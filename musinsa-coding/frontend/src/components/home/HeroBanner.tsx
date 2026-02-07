"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { Banner } from "@/types";
import { mockBanners } from "@/data/mock/banners";
import {
  wrapper,
  track,
  slide,
  slideTitle,
  slideSubtitle,
  indicators,
  dot,
  dotActive,
  counter,
} from "./HeroBanner.css";

const AUTO_PLAY_INTERVAL = 4000;

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>();
  const total = mockBanners.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const startAutoPlay = useCallback(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_PLAY_INTERVAL);
  }, [total]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoPlay();
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (Math.abs(deltaX.current) > 50) {
      goTo(deltaX.current > 0 ? current - 1 : current + 1);
    }
    startAutoPlay();
  };

  return (
    <div
      className={wrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {mockBanners.map((banner) => (
          <div
            key={banner.id}
            className={slide}
            style={{ backgroundColor: banner.backgroundColor }}
          >
            <span className={slideTitle}>{banner.title}</span>
            <span className={slideSubtitle}>{banner.subtitle}</span>
          </div>
        ))}
      </div>

      <div className={indicators}>
        {mockBanners.map((_, i) => (
          <button
            key={i}
            className={`${dot} ${i === current ? dotActive : ""}`}
            onClick={() => {
              stopAutoPlay();
              goTo(i);
              startAutoPlay();
            }}
            aria-label={`배너 ${i + 1}`}
          />
        ))}
      </div>

      <span className={counter}>
        {current + 1} / {total}
      </span>
    </div>
  );
}
