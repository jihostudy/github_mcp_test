import type { CartItem } from "@/types";
import {
  summaryWrapper,
  summaryTitle,
  summaryRow,
  summaryLabel,
  summaryValue,
  discountValue,
  freeShippingBadge,
  divider,
  totalRow,
  totalLabel,
  totalValue,
} from "./CartSummary.css";

interface Props {
  items: CartItem[];
  checkedIds: Set<number>;
}

const SHIPPING_FEE = 3000;
const FREE_SHIPPING_THRESHOLD = 30000;

function formatPrice(value: number): string {
  return value.toLocaleString("ko-KR") + "원";
}

export default function CartSummary({ items, checkedIds }: Props) {
  const selectedItems = items.filter((item) => checkedIds.has(item.id));

  const originalTotal = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const saleTotal = selectedItems.reduce((sum, item) => {
    const price = item.product.salePrice ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const discountAmount = originalTotal - saleTotal;
  const isFreeShipping = saleTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = selectedItems.length === 0 ? 0 : isFreeShipping ? 0 : SHIPPING_FEE;
  const finalTotal = saleTotal + shippingFee;

  return (
    <div className={summaryWrapper}>
      <h3 className={summaryTitle}>주문 요약</h3>

      <div className={summaryRow}>
        <span className={summaryLabel}>상품 금액</span>
        <span className={summaryValue}>{formatPrice(originalTotal)}</span>
      </div>

      <div className={summaryRow}>
        <span className={summaryLabel}>할인 금액</span>
        <span className={discountValue}>
          {discountAmount > 0 ? `-${formatPrice(discountAmount)}` : "0원"}
        </span>
      </div>

      <div className={summaryRow}>
        <span className={summaryLabel}>
          배송비
          {isFreeShipping && selectedItems.length > 0 && (
            <span className={freeShippingBadge}>무료</span>
          )}
        </span>
        <span className={summaryValue}>
          {selectedItems.length === 0
            ? "0원"
            : isFreeShipping
              ? "0원"
              : formatPrice(SHIPPING_FEE)}
        </span>
      </div>

      {!isFreeShipping && selectedItems.length > 0 && (
        <div className={summaryRow}>
          <span className={summaryLabel} style={{ fontSize: "12px", color: "#9E9E9E" }}>
            {formatPrice(FREE_SHIPPING_THRESHOLD - saleTotal)} 더 담으면 무료배송
          </span>
        </div>
      )}

      <div className={divider} />

      <div className={totalRow}>
        <span className={totalLabel}>총 결제금액</span>
        <span className={totalValue}>{formatPrice(finalTotal)}</span>
      </div>
    </div>
  );
}
