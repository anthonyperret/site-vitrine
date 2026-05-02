"use client";
import { useLayoutEffect, useEffect } from "react";

function smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    window.scrollTo(0, startY + distance * ease);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function SmoothHashScroll() {
  useLayoutEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    const scrollMarginTop = parseInt(getComputedStyle(el).scrollMarginTop) || 0;
    const targetY = el.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
    smoothScrollTo(targetY, 1200);
  }, []);

  return null;
}
