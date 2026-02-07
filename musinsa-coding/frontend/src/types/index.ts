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
