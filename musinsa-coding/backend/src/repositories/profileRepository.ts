import { getDb } from "../db/client.js";
import type { UserProfile } from "../types/mypage.js";

export function findByUserId(userId: number): UserProfile | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM user_profiles WHERE user_id = ?")
    .get(userId) as UserProfile | undefined;
}

export function upsert(
  userId: number,
  data: {
    phone?: string | null;
    gender?: string | null;
    birth_date?: string | null;
    profile_image_url?: string | null;
  },
): UserProfile {
  const db = getDb();
  const existing = findByUserId(userId);

  if (existing) {
    db.prepare(
      `UPDATE user_profiles
       SET phone = COALESCE(?, phone),
           gender = COALESCE(?, gender),
           birth_date = COALESCE(?, birth_date),
           profile_image_url = COALESCE(?, profile_image_url),
           updated_at = CURRENT_TIMESTAMP
       WHERE user_id = ?`,
    ).run(
      data.phone ?? existing.phone,
      data.gender ?? existing.gender,
      data.birth_date ?? existing.birth_date,
      data.profile_image_url ?? existing.profile_image_url,
      userId,
    );
  } else {
    db.prepare(
      `INSERT INTO user_profiles (user_id, phone, gender, birth_date, profile_image_url)
       VALUES (?, ?, ?, ?, ?)`,
    ).run(
      userId,
      data.phone ?? null,
      data.gender ?? null,
      data.birth_date ?? null,
      data.profile_image_url ?? null,
    );
  }

  return findByUserId(userId)!;
}

export function deleteByUserId(userId: number): void {
  const db = getDb();
  db.prepare("DELETE FROM user_profiles WHERE user_id = ?").run(userId);
}
