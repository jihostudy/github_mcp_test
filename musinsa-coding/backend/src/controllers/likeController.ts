import type { Request, Response } from "express";
import * as likeService from "../services/likeService.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getLikes(req: Request, res: Response): void {
  const userId = getUserId(req);
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 20));

  const result = likeService.getLikes(userId, { page, limit });
  res.json(result);
}

export function addLike(req: Request, res: Response): void {
  const userId = getUserId(req);
  const productId = Number(req.params.productId);

  if (!productId) {
    res.status(400).json({ error: "유효하지 않은 상품 ID입니다" });
    return;
  }

  likeService.addLike(userId, productId);
  res.status(201).json({ message: "좋아요가 추가되었습니다" });
}

export function removeLike(req: Request, res: Response): void {
  const userId = getUserId(req);
  const productId = Number(req.params.productId);

  if (!productId) {
    res.status(400).json({ error: "유효하지 않은 상품 ID입니다" });
    return;
  }

  likeService.removeLike(userId, productId);
  res.json({ message: "좋아요가 삭제되었습니다" });
}
