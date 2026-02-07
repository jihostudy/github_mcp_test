// ── 유저 프로필 ──
export interface UserProfile {
  id: number;
  user_id: number;
  phone: string | null;
  gender: string | null;
  birth_date: string | null;
  profile_image_url: string | null;
  updated_at: string;
}

export interface UserProfilePublic {
  nickname: string;
  email: string;
  phone: string | null;
  gender: string | null;
  birthDate: string | null;
  profileImageUrl: string | null;
  createdAt: string;
}

// ── 주문 ──
export type OrderStatus =
  | "pending"
  | "paid"
  | "shipping"
  | "delivered"
  | "confirmed"
  | "cancelled";

export interface Order {
  id: number;
  user_id: number;
  order_number: string;
  status: OrderStatus;
  total_amount: number;
  shipping_fee: number;
  address_snapshot: string | null;
  ordered_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  sale_price: number | null;
  created_at: string;
}

export interface OrderWithItems extends Order {
  items: (OrderItem & {
    product_name: string;
    product_brand: string;
    product_thumbnail: string | null;
  })[];
}

export interface OrderSummary {
  pending: number;
  paid: number;
  shipping: number;
  delivered: number;
  confirmed: number;
}

// ── 좋아요 ──
export interface UserLike {
  id: number;
  user_id: number;
  product_id: number;
  created_at: string;
}

// ── 배송지 ──
export interface UserAddress {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  zip_code: string;
  address1: string;
  address2: string | null;
  is_default: number;
  created_at: string;
  updated_at: string;
}

// ── 리뷰 ──
export interface UserReview {
  id: number;
  user_id: number;
  product_id: number;
  order_item_id: number | null;
  rating: number;
  content: string;
  image_urls: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserReviewWithProduct extends UserReview {
  product_name: string;
  product_brand: string;
  product_thumbnail: string | null;
}

// ── 쿠폰 ──
export type DiscountType = "percent" | "fixed";

export interface Coupon {
  id: number;
  name: string;
  discount_type: DiscountType;
  discount_value: number;
  min_order_amount: number;
  max_discount: number | null;
  expires_at: string;
  created_at: string;
}

export interface UserCoupon {
  id: number;
  user_id: number;
  coupon_id: number;
  used_at: string | null;
  created_at: string;
}

export interface UserCouponWithDetails extends UserCoupon {
  name: string;
  discount_type: DiscountType;
  discount_value: number;
  min_order_amount: number;
  max_discount: number | null;
  expires_at: string;
}

// ── 포인트 ──
export type PointType = "earn" | "spend" | "expire";

export interface PointHistory {
  id: number;
  user_id: number;
  amount: number;
  type: PointType;
  description: string;
  created_at: string;
}

// ── 대시보드 ──
export interface DashboardData {
  orderSummary: OrderSummary;
  points: number;
  couponCount: number;
}

// ── 페이지네이션 ──
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
