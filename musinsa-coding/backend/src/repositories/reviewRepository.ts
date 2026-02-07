import { getDb } from "../db/client.js";
import type { UserReview, UserReviewWithProduct } from "../types/mypage.js";

export function findByUserId(
  userId: number,
  options: { limit: number; offset: number },
): { reviews: UserReviewWithProduct[]; total: number } {
  const db = getDb();

  const total = db
    .prepare("SELECT COUNT(*) as count FROM user_reviews WHERE user_id = ?")
    .get(userId) as { count: number };

  const reviews = db
    .prepare(
      `SELECT ur.*, p.name as product_name, p.brand as product_brand, p.thumbnail_url as product_thumbnail
       FROM user_reviews ur
       JOIN products p ON ur.product_id = p.id
       WHERE ur.user_id = ?
       ORDER BY ur.created_at DESC LIMIT ? OFFSET ?`,
    )
    .all(userId, options.limit, options.offset) as UserReviewWithProduct[];

  return { reviews, total: total.count };
}

export function findById(
  reviewId: number,
  userId: number,
): UserReview | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM user_reviews WHERE id = ? AND user_id = ?")
    .get(reviewId, userId) as UserReview | undefined;
}

export function create(
  userId: number,
  data: {
    product_id: number;
    order_item_id?: number | null;
    rating: number;
    content: string;
    image_urls?: string | null;
  },
): UserReview {
  const db = getDb();
  const result = db
    .prepare(
      `INSERT INTO user_reviews (user_id, product_id, order_item_id, rating, content, image_urls)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .run(
      userId,
      data.product_id,
      data.order_item_id ?? null,
      data.rating,
      data.content,
      data.image_urls ?? null,
    );

  return db
    .prepare("SELECT * FROM user_reviews WHERE id = ?")
    .get(result.lastInsertRowid) as UserReview;
}

export function update(
  reviewId: number,
  userId: number,
  data: { rating?: number; content?: string; image_urls?: string | null },
): UserReview | undefined {
  const db = getDb();
  const existing = findById(reviewId, userId);
  if (!existing) return undefined;

  db.prepare(
    `UPDATE user_reviews
     SET rating = ?, content = ?, image_urls = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ? AND user_id = ?`,
  ).run(
    data.rating ?? existing.rating,
    data.content ?? existing.content,
    data.image_urls !== undefined ? data.image_urls : existing.image_urls,
    reviewId,
    userId,
  );

  return findById(reviewId, userId);
}

export function remove(reviewId: number, userId: number): boolean {
  const db = getDb();
  const result = db
    .prepare("DELETE FROM user_reviews WHERE id = ? AND user_id = ?")
    .run(reviewId, userId);
  return result.changes > 0;
}
