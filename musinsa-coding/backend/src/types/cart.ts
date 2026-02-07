export interface CartItemRow {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  selected_option: string;
  created_at: string;
  updated_at: string;
}

export interface CartItemWithProduct extends CartItemRow {
  brand: string;
  name: string;
  price: number;
  sale_price: number | null;
  thumbnail_url: string | null;
}

export interface CartItemResponse {
  id: number;
  productId: number;
  brand: string;
  name: string;
  price: number;
  salePrice: number | null;
  thumbnailUrl: string | null;
  quantity: number;
  selectedOption: string;
}
