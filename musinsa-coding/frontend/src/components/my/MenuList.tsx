import Link from "next/link";
import {
  menuSection,
  menuItem,
  menuIcon,
  menuLabel,
  menuCount,
  menuArrow,
} from "./MenuList.css";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
}

const MENU_ITEMS: MenuItem[] = [
  {
    label: "좋아요",
    href: "/my/likes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "리뷰 관리",
    href: "/my/reviews",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "배송지 관리",
    href: "/my/addresses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "쿠폰함",
    href: "/my/coupons",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
      </svg>
    ),
  },
  {
    label: "설정",
    href: "/my/settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
];

export default function MenuList() {
  return (
    <nav className={menuSection} aria-label="마이페이지 메뉴">
      {MENU_ITEMS.map((item) => (
        <Link key={item.href} href={item.href} className={menuItem}>
          <span className={menuIcon}>{item.icon}</span>
          <span className={menuLabel}>{item.label}</span>
          {item.count !== undefined && (
            <span className={menuCount}>{item.count}</span>
          )}
          <svg
            className={menuArrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      ))}
    </nav>
  );
}
