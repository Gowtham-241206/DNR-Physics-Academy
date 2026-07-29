"use client";

import { useState, useEffect } from "react";
import { IconArrowUp } from "./CustomIcons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[var(--bg-academic-navy)] text-[var(--accent-gold)] border border-[var(--border-subtle)] shadow-md hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 cursor-pointer group flex items-center justify-center"
    >
      <IconArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
    </button>
  );
}
