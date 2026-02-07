import type { CartItem } from "@/types";
import { mockProducts } from "./products";

export const mockCartItems: CartItem[] = [
  {
    id: 1,
    product: mockProducts[0], // 무신사 스탠다드 - 릴렉스드 핏 크루 넥 반팔 티셔츠
    quantity: 2,
    selectedOption: "M / 블랙",
  },
  {
    id: 2,
    product: mockProducts[3], // 나이키 - 에어포스 1 '07 로우
    quantity: 1,
    selectedOption: "275",
  },
  {
    id: 3,
    product: mockProducts[1], // 커버낫 - 어센틱 로고 크루 넥 스웨트셔츠
    quantity: 1,
    selectedOption: "L / 네이비",
  },
  {
    id: 4,
    product: mockProducts[8], // 뉴발란스 - 530 실버 러닝
    quantity: 1,
    selectedOption: "265",
  },
  {
    id: 5,
    product: mockProducts[5], // 무신사 스탠다드 - 와이드 핏 데님 팬츠
    quantity: 1,
    selectedOption: "32 / 라이트 인디고",
  },
];
