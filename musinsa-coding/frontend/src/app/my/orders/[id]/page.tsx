"use client";

import { use } from "react";
import { mockOrders } from "@/data/mock/orders";
import type { OrderStatus } from "@/types";
import {
  detailPage,
  section,
  sectionTitle,
  statusRow,
  statusBadgeLarge,
  orderMeta,
  itemCard,
  itemThumb,
  itemDetail,
  itemBrand,
  itemName,
  itemMeta,
  itemPriceBold,
  summaryRow,
  summaryTotal,
} from "./page.css";

const STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "입금대기",
  paid: "결제완료",
  shipping: "배송중",
  delivered: "배송완료",
  confirmed: "구매확정",
  cancelled: "주문취소",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const order = mockOrders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <div className={detailPage}>
        <div className={section}>
          <p>주문을 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  const productTotal = order.items.reduce(
    (sum, item) => sum + (item.salePrice ?? item.price) * item.quantity,
    0,
  );

  return (
    <div className={detailPage}>
      {/* 주문 상태 */}
      <div className={section}>
        <div className={statusRow}>
          <span className={statusBadgeLarge}>
            {STATUS_LABELS[order.status]}
          </span>
          <span className={orderMeta}>
            {formatDate(order.orderedAt)} | {order.orderNumber}
          </span>
        </div>
      </div>

      {/* 주문 상품 */}
      <div className={section}>
        <h2 className={sectionTitle}>주문 상품</h2>
        {order.items.map((item) => (
          <div key={item.id} className={itemCard}>
            <img
              className={itemThumb}
              src={item.productThumbnail}
              alt={item.productName}
            />
            <div className={itemDetail}>
              <div className={itemBrand}>{item.productBrand}</div>
              <div className={itemName}>{item.productName}</div>
              <div className={itemMeta}>
                <span className={itemPriceBold}>
                  {(item.salePrice ?? item.price).toLocaleString()}원
                </span>
                {" / "}
                {item.quantity}개
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 결제 정보 */}
      <div className={section}>
        <h2 className={sectionTitle}>결제 정보</h2>
        <div className={summaryRow}>
          <span>상품 금액</span>
          <span>{productTotal.toLocaleString()}원</span>
        </div>
        <div className={summaryRow}>
          <span>배송비</span>
          <span>
            {order.shippingFee === 0
              ? "무료"
              : `${order.shippingFee.toLocaleString()}원`}
          </span>
        </div>
        <div className={summaryTotal}>
          <span>총 결제 금액</span>
          <span>{order.totalAmount.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
}
