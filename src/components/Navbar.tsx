"use client";

import { useState, useEffect } from "react";
import { IconPhone, IconMenu, IconClose } from "./CustomIcons";

interface NavbarProps {
  onOpenCounselling: () => void;
}

export default function Navbar({ onOpenCounselling }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why DNR", href: "#why-trust" },
    { name: "Educator", href: "#educator" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Courses", href: "#courses" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-canvas)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <div className="w-10 h-10 rounded-md bg-[var(--bg-academic-navy)] text-[var(--accent-gold)] flex items-center justify-center font-heading text-2xl border border-[var(--accent-gold)]/30 shadow-xs group-hover:bg-[var(--bg-academic-navy-subtle)] transition-colors">
              DNR
            </div>
            <div>
              <span className="block font-heading text-xl sm:text-2xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
                DNR Physics
              </span>
              <span className="block text-[10px] tracking-[0.15em] text-[var(--accent-primary)] uppercase font-mono font-bold mt-1">
                Physics Simplified
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--text-main)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[var(--accent-primary)] transition-colors py-1 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+919848123456"
              className="hidden xl:flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--text-main)] hover:text-[var(--accent-primary)] transition-colors cursor-pointer"
            >
              <IconPhone size={14} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
              <span>+91 98481 23456</span>
            </a>

            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-primary)] transition-colors shadow-xs border border-[var(--bg-academic-navy)] cursor-pointer"
            >
              Book Free Counselling
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconClose size={22} strokeWidth={1.5} /> : <IconMenu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)] px-4 pt-4 pb-6 space-y-3 shadow-md animate-reveal">
          <div className="grid grid-cols-1 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
            <a
              href="tel:+919848123456"
              className="flex items-center justify-center gap-2 py-2.5 rounded-md border border-[var(--bg-academic-navy)] text-[var(--text-main)] font-mono font-bold text-xs uppercase tracking-[0.12em] cursor-pointer"
            >
              <IconPhone size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
              <span>Call +91 98481 23456</span>
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="flex items-center justify-center py-2.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] font-mono font-bold text-xs uppercase tracking-[0.12em] shadow-xs cursor-pointer"
            >
              Book Free Counselling
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
