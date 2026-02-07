import type { Request, Response } from "express";
import {
  addItemSchema,
  updateQuantitySchema,
  removeItemsSchema,
} from "../validators/cartValidator.js";
import * as cartService from "../services/cartService.js";

export function getCart(req: Request, res: Response): void {
  const items = cartService.getCart(req.userId!);
  res.json({ items });
}

export async function addItem(req: Request, res: Response): Promise<void> {
  const parsed = addItemSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const { productId, quantity, selectedOption } = parsed.data;
    const item = cartService.addItem(
      req.userId!,
      productId,
      quantity,
      selectedOption,
    );
    res.status(201).json({ item });
  } catch (err) {
    if (err instanceof cartService.CartNotFoundError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function updateQuantity(req: Request, res: Response): void {
  const itemId = Number(req.params.itemId);
  if (!Number.isInteger(itemId) || itemId <= 0) {
    res.status(400).json({ error: "유효하지 않은 아이템 ID입니다" });
    return;
  }

  const parsed = updateQuantitySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const item = cartService.updateQuantity(
      req.userId!,
      itemId,
      parsed.data.quantity,
    );
    res.json({ item });
  } catch (err) {
    if (err instanceof cartService.CartNotFoundError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    if (err instanceof cartService.CartForbiddenError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function removeItem(req: Request, res: Response): void {
  const itemId = Number(req.params.itemId);
  if (!Number.isInteger(itemId) || itemId <= 0) {
    res.status(400).json({ error: "유효하지 않은 아이템 ID입니다" });
    return;
  }

  try {
    cartService.removeItem(req.userId!, itemId);
    res.status(204).end();
  } catch (err) {
    if (err instanceof cartService.CartNotFoundError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    if (err instanceof cartService.CartForbiddenError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function removeItems(req: Request, res: Response): void {
  const parsed = removeItemsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  const deleted = cartService.removeItems(req.userId!, parsed.data.itemIds);
  res.json({ deleted });
}
