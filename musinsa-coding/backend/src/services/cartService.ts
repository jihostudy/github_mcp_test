import * as cartRepo from "../repositories/cartRepository.js";
import type { CartItemResponse, CartItemWithProduct } from "../types/cart.js";

function toResponse(row: CartItemWithProduct): CartItemResponse {
  return {
    id: row.id,
    productId: row.product_id,
    brand: row.brand,
    name: row.name,
    price: row.price,
    salePrice: row.sale_price,
    thumbnailUrl: row.thumbnail_url,
    quantity: row.quantity,
    selectedOption: row.selected_option,
  };
}

export function getCart(userId: number): CartItemResponse[] {
  const rows = cartRepo.findByUserId(userId);
  return rows.map(toResponse);
}

export function addItem(
  userId: number,
  productId: number,
  quantity: number,
  selectedOption: string,
): CartItemResponse {
  const existing = cartRepo.findByUserAndProductAndOption(
    userId,
    productId,
    selectedOption,
  );

  if (existing) {
    const newQuantity = existing.quantity + quantity;
    cartRepo.updateQuantity(existing.id, newQuantity);
    const updated = cartRepo.findByUserId(userId);
    const item = updated.find((r) => r.id === existing.id);
    if (!item) throw new CartNotFoundError();
    return toResponse(item);
  }

  const created = cartRepo.create(userId, productId, quantity, selectedOption);
  const rows = cartRepo.findByUserId(userId);
  const item = rows.find((r) => r.id === created.id);
  if (!item) throw new CartNotFoundError();
  return toResponse(item);
}

export function updateQuantity(
  userId: number,
  itemId: number,
  quantity: number,
): CartItemResponse {
  const item = cartRepo.findById(itemId);
  if (!item) throw new CartNotFoundError();
  if (item.user_id !== userId) throw new CartForbiddenError();

  cartRepo.updateQuantity(itemId, quantity);

  const rows = cartRepo.findByUserId(userId);
  const updated = rows.find((r) => r.id === itemId);
  if (!updated) throw new CartNotFoundError();
  return toResponse(updated);
}

export function removeItem(userId: number, itemId: number): void {
  const item = cartRepo.findById(itemId);
  if (!item) throw new CartNotFoundError();
  if (item.user_id !== userId) throw new CartForbiddenError();

  cartRepo.deleteById(itemId);
}

export function removeItems(userId: number, itemIds: number[]): number {
  return cartRepo.deleteByIds(userId, itemIds);
}

// Error classes

export class CartNotFoundError extends Error {
  readonly status = 404;
  constructor(message = "장바구니 아이템을 찾을 수 없습니다") {
    super(message);
    this.name = "CartNotFoundError";
  }
}

export class CartForbiddenError extends Error {
  readonly status = 403;
  constructor(message = "해당 장바구니 아이템에 대한 권한이 없습니다") {
    super(message);
    this.name = "CartForbiddenError";
  }
}
