import * as userRepo from "../repositories/userRepository.js";
import { hashPassword } from "../utils/password.js";
import type { UserPublic } from "../types/auth.js";

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
