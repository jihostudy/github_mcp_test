export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  salePrice: number | null;
  thumbnailUrl: string;
  reviewCount: number;
  likeCount: number;
  tag: "recommend" | "popular" | "new";
  categoryId: number;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  linkUrl: string;
  backgroundColor: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  iconLabel: string;
}

export interface NavTab {
  id: string;
  label: string;
  href: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  selectedOption: string;
}

// ── 마이페이지 타입 ──

export interface UserProfile {
  nickname: string;
  email: string;
  phone: string | null;
  gender: string | null;
  birthDate: string | null;
  profileImageUrl: string | null;
  grade: string;
  createdAt: string;
}

export type OrderStatus =
  | "pending"
  | "paid"
  | "shipping"
  | "delivered"
  | "confirmed"
  | "cancelled";

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  productBrand: string;
  productThumbnail: string;
  quantity: number;
  price: number;
  salePrice: number | null;
}

export interface Order {
  id: number;
  orderNumber: string;
  status: OrderStatus;
  totalAmount: number;
  shippingFee: number;
  orderedAt: string;
  items: OrderItem[];
}

export interface OrderSummary {
  pending: number;
  paid: number;
  shipping: number;
  delivered: number;
  confirmed: number;
}

export interface UserAddress {
  id: number;
  name: string;
  phone: string;
  zipCode: string;
  address1: string;
  address2: string | null;
  isDefault: boolean;
}

export interface UserReview {
  id: number;
  productId: number;
  productName: string;
  productBrand: string;
  productThumbnail: string;
  rating: number;
  content: string;
  imageUrls: string[];
  createdAt: string;
}

export type DiscountType = "percent" | "fixed";

export interface Coupon {
  id: number;
  name: string;
  discountType: DiscountType;
  discountValue: number;
  minOrderAmount: number;
  maxDiscount: number | null;
  expiresAt: string;
  usedAt: string | null;
}

export type PointType = "earn" | "spend" | "expire";

export interface PointHistory {
  id: number;
  amount: number;
  type: PointType;
  description: string;
  createdAt: string;
}

export interface DashboardData {
  orderSummary: OrderSummary;
  points: number;
  couponCount: number;
}

export interface MyMenuItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  count?: number;
}
