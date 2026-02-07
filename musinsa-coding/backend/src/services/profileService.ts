import { getDb } from "../db/client.js";
import * as profileRepo from "../repositories/profileRepository.js";
import type { UserProfilePublic } from "../types/mypage.js";

export function getProfile(userId: number): UserProfilePublic | null {
  const db = getDb();
  const user = db
    .prepare("SELECT id, nickname, email, created_at FROM users WHERE id = ?")
    .get(userId) as
    | { id: number; nickname: string; email: string; created_at: string }
    | undefined;

  if (!user) return null;

  const profile = profileRepo.findByUserId(userId);

  return {
    nickname: user.nickname,
    email: user.email,
    phone: profile?.phone ?? null,
    gender: profile?.gender ?? null,
    birthDate: profile?.birth_date ?? null,
    profileImageUrl: profile?.profile_image_url ?? null,
    createdAt: user.created_at,
  };
}

export function updateProfile(
  userId: number,
  data: {
    nickname?: string;
    phone?: string | null;
    gender?: string | null;
    birthDate?: string | null;
    profileImageUrl?: string | null;
  },
): UserProfilePublic | null {
  const db = getDb();

  if (data.nickname) {
    // 닉네임 중복 확인
    const existing = db
      .prepare("SELECT id FROM users WHERE nickname = ? AND id != ?")
      .get(data.nickname, userId);
    if (existing) {
      throw new ConflictError("이미 사용 중인 닉네임입니다");
    }
    db.prepare("UPDATE users SET nickname = ? WHERE id = ?").run(
      data.nickname,
      userId,
    );
  }

  profileRepo.upsert(userId, {
    phone: data.phone,
    gender: data.gender,
    birth_date: data.birthDate,
    profile_image_url: data.profileImageUrl,
  });

  return getProfile(userId);
}

export function changePassword(
  userId: number,
  _currentPassword: string,
  _newPassword: string,
): void {
  const db = getDb();
  const user = db
    .prepare("SELECT id, password_hash FROM users WHERE id = ?")
    .get(userId) as { id: number; password_hash: string } | undefined;

  if (!user) {
    throw new NotFoundError("유저를 찾을 수 없습니다");
  }

  // 참고: 실제 비밀번호 검증은 auth 머지 후 argon2로 교체
  // 현재는 placeholder로 처리
  db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(
    _newPassword,
    userId,
  );
}

export function deleteAccount(userId: number): void {
  const db = getDb();
  // CASCADE 설정으로 관련 데이터 자동 삭제
  db.prepare("DELETE FROM users WHERE id = ?").run(userId);
}

// Custom error classes
export class ConflictError extends Error {
  readonly status = 409;
  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
  }
}

export class NotFoundError extends Error {
  readonly status = 404;
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
