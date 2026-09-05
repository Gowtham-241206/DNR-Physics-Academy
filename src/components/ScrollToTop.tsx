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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--bg-academic-navy)]/90 backdrop-blur-xs text-[var(--accent-gold)] border border-white/20 shadow-md hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 cursor-pointer group flex items-center justify-center"
    >
      <IconArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
    </button>
  );
}
