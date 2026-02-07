import * as userRepo from "../repositories/userRepository.js";
import * as tokenRepo from "../repositories/tokenRepository.js";
import { hashPassword, verifyPassword, dummyHash } from "../utils/password.js";
import {
  signAccessToken,
  generateRefreshToken,
  hashToken,
} from "../utils/jwt.js";
import {
  REFRESH_TOKEN_EXPIRES_MS,
  MAX_FAILED_ATTEMPTS,
  LOCKOUT_DURATION_MS,
} from "../config/auth.js";
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

  // Account Lockout 확인
  if (user.locked_until && new Date(user.locked_until) > new Date()) {
    throw new AuthError("계정이 잠겨있습니다. 잠시 후 다시 시도해주세요");
  }

  const valid = await verifyPassword(user.password_hash, password);
  if (!valid) {
    // 실패 횟수 증가
    userRepo.incrementFailedAttempts(user.id);
    const newAttempts = user.failed_login_attempts + 1;

    // 최대 시도 초과 시 계정 잠금
    if (newAttempts >= MAX_FAILED_ATTEMPTS) {
      const lockedUntil = new Date(
        Date.now() + LOCKOUT_DURATION_MS,
      ).toISOString();
      userRepo.lockAccount(user.id, lockedUntil);
    }

    throw new AuthError("닉네임 또는 비밀번호가 올바르지 않습니다");
  }

  // 로그인 성공: 실패 카운터 리셋
  if (user.failed_login_attempts > 0) {
    userRepo.resetFailedAttempts(user.id);
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

export function refresh(
  rawToken: string,
): { accessToken: string; refreshToken: string } {
  const oldHash = hashToken(rawToken);
  const row = tokenRepo.findByTokenHash(oldHash);

  // 토큰이 없으면 무효
  if (!row) {
    throw new AuthError("유효하지 않은 리프레시 토큰입니다");
  }

  // 이미 폐기된 토큰이 재사용됨 → token family detection
  if (row.revoked_at) {
    tokenRepo.revokeAllForUser(row.user_id);
    throw new AuthError("토큰이 재사용 감지되었습니다. 다시 로그인해주세요");
  }

  // 만료 확인
  if (new Date(row.expires_at) < new Date()) {
    tokenRepo.revoke(oldHash);
    throw new AuthError("리프레시 토큰이 만료되었습니다");
  }

  // 기존 토큰 폐기
  tokenRepo.revoke(oldHash);

  // 유저 확인
  const user = userRepo.findById(row.user_id);
  if (!user) {
    throw new AuthError("유저를 찾을 수 없습니다");
  }

  // 새 토큰 발급
  const accessToken = signAccessToken({
    sub: user.id,
    nickname: user.nickname,
  });
  const newRefreshToken = generateRefreshToken();
  const newHash = hashToken(newRefreshToken);
  const expiresAt = new Date(
    Date.now() + REFRESH_TOKEN_EXPIRES_MS,
  ).toISOString();

  tokenRepo.save(user.id, newHash, expiresAt);

  return { accessToken, refreshToken: newRefreshToken };
}

export function logout(rawToken: string): void {
  const tokenHash = hashToken(rawToken);
  tokenRepo.revoke(tokenHash);
}

export function getMe(userId: number): UserPublic {
  const user = userRepo.findById(userId);
  if (!user) {
    throw new AuthError("유저를 찾을 수 없습니다");
  }
  return {
    id: user.id,
    email: user.email,
    nickname: user.nickname,
    created_at: user.created_at,
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
