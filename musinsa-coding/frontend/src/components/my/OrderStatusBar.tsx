import Link from "next/link";
import type { OrderSummary } from "@/types";
import {
  statusBar,
  statusTitle,
  viewAll,
  statusGrid,
  statusItem,
  statusCount,
  statusCountActive,
  statusLabel,
  statusArrow,
} from "./OrderStatusBar.css";

interface Props {
  summary: OrderSummary;
}

const STATUS_ITEMS = [
  { key: "pending" as const, label: "입금대기" },
  { key: "paid" as const, label: "결제완료" },
  { key: "shipping" as const, label: "배송중" },
  { key: "delivered" as const, label: "배송완료" },
  { key: "confirmed" as const, label: "구매확정" },
];

export default function OrderStatusBar({ summary }: Props) {
  return (
    <section className={statusBar}>
      <div className={statusTitle}>
        주문/배송 현황
        <Link href="/my/orders" className={viewAll}>
          전체보기
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className={statusGrid}>
        {STATUS_ITEMS.map((item, idx) => (
          <>
            <Link
              key={item.key}
              href={`/my/orders?status=${item.key}`}
              className={statusItem}
            >
              <span
                className={
                  summary[item.key] > 0 ? statusCountActive : statusCount
                }
              >
                {summary[item.key]}
              </span>
              <span className={statusLabel}>{item.label}</span>
            </Link>
            {idx < STATUS_ITEMS.length - 1 && (
              <svg
                key={`arrow-${item.key}`}
                className={statusArrow}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </>
        ))}
      </div>
    </section>
  );
}
