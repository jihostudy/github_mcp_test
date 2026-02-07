import * as reviewRepo from "../repositories/reviewRepository.js";
import type {
  UserReview,
  UserReviewWithProduct,
  PaginatedResponse,
} from "../types/mypage.js";

export function getReviews(
  userId: number,
  options: { page: number; limit: number },
): PaginatedResponse<UserReviewWithProduct> {
  const offset = (options.page - 1) * options.limit;
  const { reviews, total } = reviewRepo.findByUserId(userId, {
    limit: options.limit,
    offset,
  });

  return {
    data: reviews,
    total,
    page: options.page,
    limit: options.limit,
    hasMore: offset + options.limit < total,
  };
}

export function createReview(
  userId: number,
  data: {
    productId: number;
    orderItemId?: number | null;
    rating: number;
    content: string;
    imageUrls?: string[];
  },
): UserReview {
  return reviewRepo.create(userId, {
    product_id: data.productId,
    order_item_id: data.orderItemId,
    rating: data.rating,
    content: data.content,
    image_urls: data.imageUrls?.length
      ? JSON.stringify(data.imageUrls)
      : null,
  });
}

export function updateReview(
  reviewId: number,
  userId: number,
  data: {
    rating?: number;
    content?: string;
    imageUrls?: string[];
  },
): UserReview | null {
  const result = reviewRepo.update(reviewId, userId, {
    rating: data.rating,
    content: data.content,
    image_urls:
      data.imageUrls !== undefined
        ? data.imageUrls.length
          ? JSON.stringify(data.imageUrls)
          : null
        : undefined,
  });
  return result ?? null;
}

export function deleteReview(reviewId: number, userId: number): boolean {
  return reviewRepo.remove(reviewId, userId);
}
