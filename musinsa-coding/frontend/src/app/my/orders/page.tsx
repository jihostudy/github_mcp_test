"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OrderCard from "@/components/my/OrderCard";
import EmptyState from "@/components/my/EmptyState";
import { mockOrders } from "@/data/mock/orders";
import { ordersPage, tabBar, tab, tabActive, orderList } from "./page.css";

const TABS = [
  { key: "all", label: "전체" },
  { key: "pending", label: "입금대기" },
  { key: "paid", label: "결제완료" },
  { key: "shipping", label: "배송중" },
  { key: "delivered", label: "배송완료" },
  { key: "confirmed", label: "구매확정" },
];

function OrdersContent() {
  const searchParams = useSearchParams();
  const initialStatus = searchParams.get("status") ?? "all";
  const [activeTab, setActiveTab] = useState(initialStatus);

  const filtered =
    activeTab === "all"
      ? mockOrders
      : mockOrders.filter((o) => o.status === activeTab);

  return (
    <>
      <div className={tabBar} role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={activeTab === t.key ? tabActive : tab}
            onClick={() => setActiveTab(t.key)}
            role="tab"
            aria-selected={activeTab === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={orderList}>
        {filtered.length > 0 ? (
          filtered.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <EmptyState
            icon="order"
            title="주문 내역이 없습니다"
            description="아직 주문한 상품이 없어요"
          />
        )}
      </div>
    </>
  );
}

export default function OrdersPage() {
  return (
    <div className={ordersPage}>
      <Suspense>
        <OrdersContent />
      </Suspense>
    </div>
  );
}
