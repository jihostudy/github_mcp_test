import type { UserProfile, DashboardData, OrderSummary } from "@/types";

export const mockUserProfile: UserProfile = {
  nickname: "무신사회원",
  email: "user@example.com",
  phone: "010-1234-5678",
  gender: "male",
  birthDate: "1995-03-15",
  profileImageUrl: null,
  grade: "실버",
  createdAt: "2024-06-01T00:00:00Z",
};

export const mockOrderSummary: OrderSummary = {
  pending: 1,
  paid: 2,
  shipping: 1,
  delivered: 3,
  confirmed: 12,
};

export const mockDashboardData: DashboardData = {
  orderSummary: mockOrderSummary,
  points: 15200,
  couponCount: 3,
};
