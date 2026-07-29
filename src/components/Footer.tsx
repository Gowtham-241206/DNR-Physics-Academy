"use client";

import { IconArrowUp } from "./CustomIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-academic-navy)] text-[var(--text-light)] py-14 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo & Philosophy (5 cols) - Text Mark Only */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-heading text-3xl sm:text-4xl tracking-tight text-white leading-none">
                <strong className="font-bold text-white">DNR</strong>{" "}
                <span className="font-normal italic text-[var(--accent-gold)]">Physics</span>
              </span>
              <span className="block text-[10px] tracking-[0.18em] text-[var(--accent-gold)] uppercase font-mono font-bold mt-1.5">
                Physics Simplified • Estd. 2017
              </span>
            </div>

            <p className="font-body text-xs text-[var(--text-light)]/70 max-prose-copy leading-relaxed">
              An independent Physics coaching institute run personally by senior educator <strong className="text-white">Ranganath Dharmavaram</strong> (36+ years experience since 1988). Dedicated to small batch concept clarity for IIT-JEE, NEET, and BITSAT in Nellore.
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-mono font-bold text-xs text-[var(--accent-gold)] uppercase tracking-[0.15em] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[var(--text-light)]/80">
              <li>
                <a href="#why-trust" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  Why Parents Trust Us
                </a>
              </li>
              <li>
                <a href="#educator" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  Meet Ranganath Dharmavaram
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  Teaching Philosophy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  IIT-JEE, NEET & BITSAT Courses
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  DNR Student Journey
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  Authored Textbooks
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                  Institute Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Credo (4 cols) */}
          <div className="md:col-span-4 bg-[var(--bg-academic-navy-subtle)] p-5 rounded-md border border-white/10">
            <span className="text-[10px] font-mono text-[var(--accent-gold)] font-bold block mb-2 uppercase tracking-[0.15em]">
              ACADEMIC CREDO
            </span>
            <p className="font-heading text-xl italic text-[var(--text-light)]/90 leading-snug mb-3">
              &ldquo;Physics should be understood rather than memorized. When concepts are clear, exam ranks naturally follow.&rdquo;
            </p>
            <span className="block text-[11px] font-mono text-[var(--accent-gold)] font-bold uppercase tracking-[0.1em]">
              — Ranganath Dharmavaram • Physics Educator
            </span>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-light)]/60">
          <p>
            © {new Date().getFullYear()} DNR Physics Coaching Centre. All rights reserved. Designed for academic excellence.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-academic-navy-subtle)] text-[var(--accent-gold)] hover:bg-[var(--accent-primary)] hover:text-white transition-colors text-xs font-mono font-bold uppercase tracking-[0.12em] cursor-pointer"
          >
            <span>Back to Top</span>
            <IconArrowUp size={14} strokeWidth={1.75} />
          </button>
        </div>

      </div>
    </footer>
  );
}
