"use client";

import Link from "next/link";
import {
  header,
  headerInner,
  logo,
  searchBar,
  searchIcon,
  searchInput,
  iconGroup,
  iconButton,
  iconSvg,
} from "./Header.css";

export default function Header() {
  return (
    <header className={header}>
      <div className={headerInner}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className={logo}>MUSINSA</span>
        </Link>

        <div className={searchBar}>
          <svg
            className={searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            className={searchInput}
            type="text"
            placeholder="브랜드, 상품, 프로필 검색"
            readOnly
          />
        </div>

        <div className={iconGroup}>
          {/* 장바구니 */}
          <button className={iconButton} aria-label="장바구니">
            <svg
              className={iconSvg}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          {/* 마이페이지 */}
          <Link href="/my" className={iconButton} aria-label="마이페이지">
            <svg
              className={iconSvg}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
