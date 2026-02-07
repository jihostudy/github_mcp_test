import { getDb } from "../db/client.js";
import type { CartItemRow, CartItemWithProduct } from "../types/cart.js";

export function findByUserId(userId: number): CartItemWithProduct[] {
  const db = getDb();
  return db
    .prepare(
      `SELECT
        ci.id, ci.user_id, ci.product_id, ci.quantity,
        ci.selected_option, ci.created_at, ci.updated_at,
        p.brand, p.name, p.price, p.sale_price, p.thumbnail_url
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.user_id = ?
      ORDER BY ci.created_at DESC`,
    )
    .all(userId) as CartItemWithProduct[];
}

export function findById(id: number): CartItemRow | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM cart_items WHERE id = ?")
    .get(id) as CartItemRow | undefined;
}

export function findByUserAndProductAndOption(
  userId: number,
  productId: number,
  selectedOption: string,
): CartItemRow | undefined {
  const db = getDb();
  return db
    .prepare(
      "SELECT * FROM cart_items WHERE user_id = ? AND product_id = ? AND selected_option = ?",
    )
    .get(userId, productId, selectedOption) as CartItemRow | undefined;
}

export function create(
  userId: number,
  productId: number,
  quantity: number,
  selectedOption: string,
): CartItemRow {
  const db = getDb();
  const result = db
    .prepare(
      "INSERT INTO cart_items (user_id, product_id, quantity, selected_option) VALUES (?, ?, ?, ?)",
    )
    .run(userId, productId, quantity, selectedOption);

  return findById(result.lastInsertRowid as number)!;
}

export function updateQuantity(id: number, quantity: number): void {
  const db = getDb();
  db.prepare(
    "UPDATE cart_items SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
  ).run(quantity, id);
}

export function deleteById(id: number): void {
  const db = getDb();
  db.prepare("DELETE FROM cart_items WHERE id = ?").run(id);
}

export function deleteByIds(userId: number, ids: number[]): number {
  const db = getDb();
  const placeholders = ids.map(() => "?").join(", ");
  const result = db
    .prepare(
      `DELETE FROM cart_items WHERE user_id = ? AND id IN (${placeholders})`,
    )
    .run(userId, ...ids);

  return result.changes;
}
