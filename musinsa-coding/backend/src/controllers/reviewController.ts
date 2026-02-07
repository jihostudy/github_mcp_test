import type { Request, Response } from "express";
import * as reviewService from "../services/reviewService.js";
import { createReviewSchema, updateReviewSchema } from "../validators/reviewValidator.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getReviews(req: Request, res: Response): void {
  const userId = getUserId(req);
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));

  const result = reviewService.getReviews(userId, { page, limit });
  res.json(result);
}

export function createReview(req: Request, res: Response): void {
  const userId = getUserId(req);
  const parsed = createReviewSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  const review = reviewService.createReview(userId, parsed.data);
  res.status(201).json(review);
}

export function updateReview(req: Request, res: Response): void {
  const userId = getUserId(req);
  const reviewId = Number(req.params.id);
  const parsed = updateReviewSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  const review = reviewService.updateReview(reviewId, userId, parsed.data);
  if (!review) {
    res.status(404).json({ error: "리뷰를 찾을 수 없습니다" });
    return;
  }

  res.json(review);
}

export function deleteReview(req: Request, res: Response): void {
  const userId = getUserId(req);
  const reviewId = Number(req.params.id);

  const deleted = reviewService.deleteReview(reviewId, userId);
  if (!deleted) {
    res.status(404).json({ error: "리뷰를 찾을 수 없습니다" });
    return;
  }

  res.json({ message: "리뷰가 삭제되었습니다" });
}
