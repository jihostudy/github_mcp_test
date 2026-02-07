"use client";

import { useState } from "react";
import type { NavTab } from "@/types";
import { nav, navInner, tabItem, tabItemActive } from "./TabNavigation.css";

const tabs: NavTab[] = [
  { id: "recommend", label: "추천", href: "/" },
  { id: "ranking", label: "랭킹", href: "/ranking" },
  { id: "sale", label: "세일", href: "/sale" },
  { id: "new", label: "신상", href: "/new" },
  { id: "brand", label: "브랜드", href: "/brand" },
  { id: "event", label: "이벤트", href: "/event" },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("recommend");

  return (
    <nav className={nav}>
      <div className={navInner}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${tabItem} ${activeTab === tab.id ? tabItemActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
