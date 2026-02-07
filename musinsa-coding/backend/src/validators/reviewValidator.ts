import { z } from "zod/v4";

export const createReviewSchema = z.object({
  productId: z.number().int().positive(),
  orderItemId: z.number().int().positive().nullable().optional(),
  rating: z.number().int().min(1, "1점 이상이어야 합니다").max(5, "5점 이하여야 합니다"),
  content: z
    .string()
    .min(10, "리뷰는 10자 이상 작성해주세요")
    .max(1000, "리뷰는 1000자 이하로 작성해주세요"),
  imageUrls: z.array(z.string().url()).max(5).optional(),
});

export const updateReviewSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  content: z.string().min(10).max(1000).optional(),
  imageUrls: z.array(z.string().url()).max(5).optional(),
});

export type CreateReviewInput = z.infer<typeof createReviewSchema>;
export type UpdateReviewInput = z.infer<typeof updateReviewSchema>;
