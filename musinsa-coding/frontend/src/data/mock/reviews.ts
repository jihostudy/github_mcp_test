import type { UserReview } from "@/types";

export const mockReviews: UserReview[] = [
  {
    id: 1,
    productId: 1,
    productName: "오버사이즈 크루넥 스웨트셔츠",
    productBrand: "무신사 스탠다드",
    productThumbnail: "https://placehold.co/80x80/e0e0e0/666?text=Sweatshirt",
    rating: 5,
    content:
      "핏이 정말 좋아요. 오버사이즈인데 너무 크지 않고 딱 적당합니다. 소재도 부드럽고 가격 대비 최고예요!",
    imageUrls: [],
    createdAt: "2026-02-03T10:30:00Z",
  },
  {
    id: 2,
    productId: 3,
    productName: "레더 스니커즈",
    productBrand: "커버낫",
    productThumbnail: "https://placehold.co/80x80/e0e0e0/666?text=Sneakers",
    rating: 4,
    content:
      "디자인은 마음에 드는데 발볼이 조금 좁아요. 반 사이즈 업하시는 걸 추천합니다.",
    imageUrls: [],
    createdAt: "2026-01-30T15:45:00Z",
  },
  {
    id: 3,
    productId: 4,
    productName: "베이직 반팔 티셔츠 3팩",
    productBrand: "무신사 스탠다드",
    productThumbnail: "https://placehold.co/80x80/e0e0e0/666?text=T-shirts",
    rating: 5,
    content: "가성비 최고입니다. 세 장에 이 가격이면 무조건 사야 해요. 재질도 좋고 세탁해도 잘 안 줄어요.",
    imageUrls: [],
    createdAt: "2026-01-27T09:20:00Z",
  },
];
