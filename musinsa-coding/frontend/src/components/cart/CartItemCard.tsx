import type { CartItem } from "@/types";
import {
  cartItemWrapper,
  checkboxWrapper,
  checkbox,
  thumbnailBox,
  itemInfo,
  brandText,
  nameText,
  optionText,
  priceArea,
  discountBadge,
  currentPrice,
  originalPriceText,
  quantityControl,
  quantityButton,
  quantityButtonDisabled,
  quantityValue,
  deleteButton,
  deleteIcon,
} from "./CartItemCard.css";

interface Props {
  item: CartItem;
  isChecked: boolean;
  onToggleCheck: (id: number) => void;
  onQuantityChange: (id: number, delta: number) => void;
  onDelete: (id: number) => void;
}

function formatPrice(value: number): string {
  return value.toLocaleString("ko-KR") + "원";
}

function calcDiscountRate(price: number, sale: number): number {
  return Math.round(((price - sale) / price) * 100);
}

export default function CartItemCard({
  item,
  isChecked,
  onToggleCheck,
  onQuantityChange,
  onDelete,
}: Props) {
  const { product, quantity, selectedOption } = item;
  const hasSale =
    product.salePrice !== null && product.salePrice < product.price;
  const displayPrice = hasSale ? product.salePrice! : product.price;
  const discount = hasSale
    ? calcDiscountRate(product.price, product.salePrice!)
    : 0;
  const lineTotal = displayPrice * quantity;

  return (
    <li className={cartItemWrapper}>
      <div className={checkboxWrapper}>
        <input
          type="checkbox"
          className={checkbox}
          checked={isChecked}
          onChange={() => onToggleCheck(item.id)}
          aria-label={`${product.name} 선택`}
        />
      </div>

      <div className={thumbnailBox}>
        {product.brand.slice(0, 3).toUpperCase()}
      </div>

      <div className={itemInfo}>
        <span className={brandText}>{product.brand}</span>
        <span className={nameText}>{product.name}</span>
        <span className={optionText}>{selectedOption}</span>

        <div className={priceArea}>
          {hasSale && (
            <span className={discountBadge}>{discount}%</span>
          )}
          <span className={currentPrice}>{formatPrice(lineTotal)}</span>
          {hasSale && (
            <span className={originalPriceText}>
              {formatPrice(product.price * quantity)}
            </span>
          )}
        </div>

        <div className={quantityControl}>
          <button
            className={`${quantityButton} ${quantity <= 1 ? quantityButtonDisabled : ""}`}
            onClick={() => quantity > 1 && onQuantityChange(item.id, -1)}
            disabled={quantity <= 1}
            aria-label="수량 감소"
          >
            −
          </button>
          <span className={quantityValue}>{quantity}</span>
          <button
            className={quantityButton}
            onClick={() => onQuantityChange(item.id, 1)}
            aria-label="수량 증가"
          >
            +
          </button>
        </div>
      </div>

      <button
        className={deleteButton}
        onClick={() => onDelete(item.id)}
        aria-label={`${product.name} 삭제`}
      >
        <svg
          className={deleteIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </li>
  );
}
