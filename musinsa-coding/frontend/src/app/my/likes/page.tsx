"use client";

import { useState } from "react";
import EmptyState from "@/components/my/EmptyState";
import { mockLikedProducts } from "@/data/mock/likes";
import type { Product } from "@/types";
import {
  likesPage,
  likeCount,
  countBold,
  productGrid,
  productCard,
  thumbWrapper,
  thumb,
  heartButton,
  heartIcon,
  cardInfo,
  brand,
  name,
  priceRow,
  salePercent,
  price,
} from "./page.css";

function getDiscountPercent(original: number, sale: number): number {
  return Math.round(((original - sale) / original) * 100);
}

export default function LikesPage() {
  const [products, setProducts] = useState<Product[]>(mockLikedProducts);

  const handleRemoveLike = (productId: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className={likesPage}>
      <div className={likeCount}>
        좋아요 <span className={countBold}>{products.length}</span>개
      </div>

      {products.length > 0 ? (
        <div className={productGrid}>
          {products.map((product) => (
            <article key={product.id} className={productCard}>
              <div className={thumbWrapper}>
                <img
                  className={thumb}
                  src={product.thumbnailUrl}
                  alt={product.name}
                />
                <button
                  className={heartButton}
                  onClick={() => handleRemoveLike(product.id)}
                  aria-label={`${product.name} 좋아요 취소`}
                >
                  <svg
                    className={heartIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <div className={cardInfo}>
                <div className={brand}>{product.brand}</div>
                <div className={name}>{product.name}</div>
                <div className={priceRow}>
                  {product.salePrice && (
                    <span className={salePercent}>
                      {getDiscountPercent(product.price, product.salePrice)}%
                    </span>
                  )}
                  <span className={price}>
                    {(product.salePrice ?? product.price).toLocaleString()}원
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState
          icon="like"
          title="좋아요한 상품이 없습니다"
          description="마음에 드는 상품에 좋아요를 눌러보세요"
        />
      )}
    </div>
  );
}
