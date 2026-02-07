import argon2 from "argon2";
import { ARGON2_OPTIONS } from "../config/auth.js";

export async function hashPassword(plain: string): Promise<string> {
  return argon2.hash(plain, {
    type: argon2.argon2id,
    memoryCost: ARGON2_OPTIONS.memoryCost,
    timeCost: ARGON2_OPTIONS.timeCost,
    parallelism: ARGON2_OPTIONS.parallelism,
  });
}

export async function verifyPassword(
  hash: string,
  plain: string,
): Promise<boolean> {
  return argon2.verify(hash, plain);
}

/**
 * timing attack 방어용 더미 해싱.
 * 유저가 존재하지 않을 때도 동일한 시간이 소요되도록 한다.
 */
export async function dummyHash(): Promise<void> {
  await argon2.hash("dummy-password-for-timing-attack-prevention", {
    type: argon2.argon2id,
    memoryCost: ARGON2_OPTIONS.memoryCost,
    timeCost: ARGON2_OPTIONS.timeCost,
    parallelism: ARGON2_OPTIONS.parallelism,
  });
}
