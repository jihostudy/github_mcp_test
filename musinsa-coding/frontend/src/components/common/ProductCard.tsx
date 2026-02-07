import type { Product } from "@/types";
import {
  card,
  thumbnailWrapper,
  thumbnailPlaceholder,
  likeButton,
  likeIcon,
  info,
  brandName,
  productName,
  priceRow,
  discountRate,
  salePrice,
  originalPrice,
  metaRow,
  reviewCount,
} from "./ProductCard.css";

interface Props {
  product: Product;
}

function formatPrice(value: number): string {
  return value.toLocaleString("ko-KR") + "원";
}

function calcDiscountRate(price: number, sale: number): number {
  return Math.round(((price - sale) / price) * 100);
}

function formatReviewCount(count: number): string {
  if (count >= 10000) return (count / 10000).toFixed(1) + "만";
  if (count >= 1000) return (count / 1000).toFixed(1) + "천";
  return String(count);
}

export default function ProductCard({ product }: Props) {
  const hasSale = product.salePrice !== null && product.salePrice < product.price;
  const displayPrice = hasSale ? product.salePrice! : product.price;
  const discount = hasSale ? calcDiscountRate(product.price, product.salePrice!) : 0;

  return (
    <article className={card}>
      <div className={thumbnailWrapper}>
        <div className={thumbnailPlaceholder}>
          {product.brand.slice(0, 3).toUpperCase()}
        </div>
        <button className={likeButton} aria-label="좋아요">
          <svg
            className={likeIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className={info}>
        <span className={brandName}>{product.brand}</span>
        <span className={productName}>{product.name}</span>

        <div className={priceRow}>
          {hasSale && (
            <span className={discountRate}>{discount}%</span>
          )}
          <span className={salePrice}>{formatPrice(displayPrice)}</span>
        </div>

        {hasSale && (
          <span className={originalPrice}>{formatPrice(product.price)}</span>
        )}

        <div className={metaRow}>
          <span className={reviewCount}>
            리뷰 {formatReviewCount(product.reviewCount)}
          </span>
        </div>
      </div>
    </article>
  );
}
