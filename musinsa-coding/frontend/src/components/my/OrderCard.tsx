import Link from "next/link";
import type { Order, OrderStatus } from "@/types";
import {
  card,
  cardHeader,
  orderDate,
  orderNumber,
  statusBadge,
  statusBadgeActive,
  itemRow,
  itemImage,
  itemInfo,
  itemBrand,
  itemName,
  itemPrice,
  itemQuantity,
  cardFooter,
  totalAmount,
} from "./OrderCard.css";

interface Props {
  order: Order;
}

const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "입금대기",
  paid: "결제완료",
  shipping: "배송중",
  delivered: "배송완료",
  confirmed: "구매확정",
  cancelled: "주문취소",
};

function isActiveStatus(status: OrderStatus): boolean {
  return status === "shipping" || status === "paid";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function OrderCard({ order }: Props) {
  return (
    <article className={card}>
      <div className={cardHeader}>
        <div>
          <div className={orderDate}>{formatDate(order.orderedAt)}</div>
          <div className={orderNumber}>{order.orderNumber}</div>
        </div>
        <span
          className={
            isActiveStatus(order.status) ? statusBadgeActive : statusBadge
          }
        >
          {STATUS_LABELS[order.status]}
        </span>
      </div>

      {order.items.map((item) => (
        <Link
          key={item.id}
          href={`/my/orders/${order.id}`}
          className={itemRow}
        >
          <img
            className={itemImage}
            src={item.productThumbnail}
            alt={item.productName}
          />
          <div className={itemInfo}>
            <div className={itemBrand}>{item.productBrand}</div>
            <div className={itemName}>{item.productName}</div>
            <div className={itemPrice}>
              {(item.salePrice ?? item.price).toLocaleString()}원
              {item.quantity > 1 && (
                <span className={itemQuantity}>{item.quantity}개</span>
              )}
            </div>
          </div>
        </Link>
      ))}

      <div className={cardFooter}>
        <span className={totalAmount}>
          총 {order.totalAmount.toLocaleString()}원
        </span>
      </div>
    </article>
  );
}
