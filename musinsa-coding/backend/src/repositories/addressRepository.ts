import { getDb } from "../db/client.js";
import type { UserAddress } from "../types/mypage.js";

export function findByUserId(userId: number): UserAddress[] {
  const db = getDb();
  return db
    .prepare(
      "SELECT * FROM user_addresses WHERE user_id = ? ORDER BY is_default DESC, created_at DESC",
    )
    .all(userId) as UserAddress[];
}

export function findById(
  addressId: number,
  userId: number,
): UserAddress | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM user_addresses WHERE id = ? AND user_id = ?")
    .get(addressId, userId) as UserAddress | undefined;
}

export function create(
  userId: number,
  data: {
    name: string;
    phone: string;
    zip_code: string;
    address1: string;
    address2?: string | null;
    is_default?: boolean;
  },
): UserAddress {
  const db = getDb();

  if (data.is_default) {
    db.prepare(
      "UPDATE user_addresses SET is_default = 0 WHERE user_id = ?",
    ).run(userId);
  }

  const result = db
    .prepare(
      `INSERT INTO user_addresses (user_id, name, phone, zip_code, address1, address2, is_default)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      userId,
      data.name,
      data.phone,
      data.zip_code,
      data.address1,
      data.address2 ?? null,
      data.is_default ? 1 : 0,
    );

  return findById(result.lastInsertRowid as number, userId)!;
}

export function update(
  addressId: number,
  userId: number,
  data: {
    name?: string;
    phone?: string;
    zip_code?: string;
    address1?: string;
    address2?: string | null;
    is_default?: boolean;
  },
): UserAddress | undefined {
  const db = getDb();
  const existing = findById(addressId, userId);
  if (!existing) return undefined;

  if (data.is_default) {
    db.prepare(
      "UPDATE user_addresses SET is_default = 0 WHERE user_id = ?",
    ).run(userId);
  }

  db.prepare(
    `UPDATE user_addresses
     SET name = ?, phone = ?, zip_code = ?, address1 = ?, address2 = ?, is_default = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ? AND user_id = ?`,
  ).run(
    data.name ?? existing.name,
    data.phone ?? existing.phone,
    data.zip_code ?? existing.zip_code,
    data.address1 ?? existing.address1,
    data.address2 !== undefined ? data.address2 : existing.address2,
    data.is_default !== undefined ? (data.is_default ? 1 : 0) : existing.is_default,
    addressId,
    userId,
  );

  return findById(addressId, userId);
}

export function remove(addressId: number, userId: number): boolean {
  const db = getDb();
  const result = db
    .prepare("DELETE FROM user_addresses WHERE id = ? AND user_id = ?")
    .run(addressId, userId);
  return result.changes > 0;
}
