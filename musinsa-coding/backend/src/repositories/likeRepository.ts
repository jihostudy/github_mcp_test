import { getDb } from "../db/client.js";
import type { UserLike } from "../types/mypage.js";

export function findByUserId(
  userId: number,
  options: { limit: number; offset: number },
): { likes: UserLike[]; total: number } {
  const db = getDb();

  const total = db
    .prepare("SELECT COUNT(*) as count FROM user_likes WHERE user_id = ?")
    .get(userId) as { count: number };

  const likes = db
    .prepare(
      `SELECT ul.*, p.name as product_name, p.brand as product_brand,
              p.price, p.sale_price, p.thumbnail_url as product_thumbnail
       FROM user_likes ul
       JOIN products p ON ul.product_id = p.id
       WHERE ul.user_id = ?
       ORDER BY ul.created_at DESC LIMIT ? OFFSET ?`,
    )
    .all(userId, options.limit, options.offset) as UserLike[];

  return { likes, total: total.count };
}

export function add(userId: number, productId: number): void {
  const db = getDb();
  db.prepare(
    "INSERT OR IGNORE INTO user_likes (user_id, product_id) VALUES (?, ?)",
  ).run(userId, productId);
}

export function remove(userId: number, productId: number): void {
  const db = getDb();
  db.prepare(
    "DELETE FROM user_likes WHERE user_id = ? AND product_id = ?",
  ).run(userId, productId);
}

export function exists(userId: number, productId: number): boolean {
  const db = getDb();
  const row = db
    .prepare(
      "SELECT 1 FROM user_likes WHERE user_id = ? AND product_id = ?",
    )
    .get(userId, productId);
  return !!row;
}
