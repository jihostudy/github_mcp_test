import * as userRepo from "../repositories/userRepository.js";
import * as tokenRepo from "../repositories/tokenRepository.js";
import { hashPassword, verifyPassword, dummyHash } from "../utils/password.js";
import {
  signAccessToken,
  generateRefreshToken,
  hashToken,
} from "../utils/jwt.js";
import { REFRESH_TOKEN_EXPIRES_MS } from "../config/auth.js";
import type { UserPublic, TokenPair } from "../types/auth.js";

export async function register(
  nickname: string,
  email: string,
  password: string,
): Promise<UserPublic> {
  if (userRepo.findByNickname(nickname)) {
    throw new ConflictError("이미 사용 중인 닉네임입니다");
  }
  if (userRepo.findByEmail(email)) {
    throw new ConflictError("이미 사용 중인 이메일입니다");
  }

  const passwordHash = await hashPassword(password);
  return userRepo.create(nickname, email, passwordHash);
}

export async function login(
  nickname: string,
  password: string,
): Promise<{ user: UserPublic; tokens: TokenPair }> {
  const user = userRepo.findByNickname(nickname);

  // timing attack 방어: 유저가 없어도 해싱 수행
  if (!user) {
    await dummyHash();
    throw new AuthError("닉네임 또는 비밀번호가 올바르지 않습니다");
  }

  const valid = await verifyPassword(user.password_hash, password);
  if (!valid) {
    throw new AuthError("닉네임 또는 비밀번호가 올바르지 않습니다");
  }

  // 토큰 발급
  const accessToken = signAccessToken({
    sub: user.id,
    nickname: user.nickname,
  });
  const refreshToken = generateRefreshToken();
  const refreshTokenHash = hashToken(refreshToken);
  const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRES_MS).toISOString();

  tokenRepo.save(user.id, refreshTokenHash, expiresAt);

  return {
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
      created_at: user.created_at,
    },
    tokens: { accessToken, refreshToken },
  };
}

// Custom error classes
export class ConflictError extends Error {
  readonly status = 409;
  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
  }
}

export class AuthError extends Error {
  readonly status = 401;
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
