"use client";

import Image from "next/image";
import { MotionDiv } from "./MotionWrapper";
import { IconArrowRight, IconAward, IconCheckCircle } from "./CustomIcons";

interface HeroProps {
  onOpenCounselling: () => void;
}

export default function Hero({ onOpenCounselling }: HeroProps) {
  const trustStats = [
    { label: "Teaching Experience", value: "36+ Years", detail: "Physics Educator since 1988" },
    { label: "Teaching Since", value: "1988", detail: "Pioneer in Conceptual Physics" },
    { label: "DNR Centre Founded", value: "2017", detail: "Dedicated Physics Institute" },
    { label: "Learning Modes", value: "Offline + Online", detail: "Nellore & Live Interactive" },
    { label: "Batch Capacity", value: "30–40 Students", detail: "Strictly Limited Strength" },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-ambient-radial border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Label
        <div className="text-center mb-6 animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs">
            <IconAward size={14} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[var(--text-main)]">
              Ranganath Dharmavaram • The Physics Specialist of Nellore
            </span>
          </div>
        </div> */}

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-8 animate-reveal delay-1">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-normal text-[var(--text-main)] leading-[0.95] tracking-tight">
            36 Years of <br className="hidden sm:block" />
            <span className="italic text-[var(--accent-primary)]">Simplifying Physics</span>
          </h1>
        </div>

        {/* Subheading & CTAs */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-reveal delay-2">
          <p className="font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-prose-copy mx-auto">
            Concept-based Physics coaching for IIT-JEE Main, IIT-JEE Advanced, NEET and BITSAT. Helping students understand Physics through clarity, visualization and problem solving since 1988.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-primary)] transition-colors shadow-xs group cursor-pointer"
            >
              <span>Book Free Counselling</span>
              <IconArrowRight size={14} className="text-[var(--accent-gold)] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </button>

            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-main)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            >
              <span>Explore Courses</span>
            </a>
          </div>
        </div>

        {/* Hero Classroom Photography */}
        <div className="relative rounded-lg overflow-hidden shadow-md mb-14 aspect-[16/9] max-h-[520px] border border-[var(--border-subtle)] animate-reveal delay-3">
          <Image
            src="/images/hero_classroom.png"
            alt="Ranganath Dharmavaram teaching physics concepts in small batch classroom in Nellore"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
            className="object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-academic-navy)]/90 via-transparent to-transparent" />

          {/* Floating Caption Banner */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-[var(--text-light)]">
            <div className="max-w-[65ch]">
              <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm mb-2">
                Authentic Classroom Learning
              </span>
              <p className="font-heading text-xl sm:text-2xl font-normal leading-snug">
                When a student visualizes the physical mechanics behind an equation, problem solving ceases to be a burden and becomes second nature.
              </p>
            </div>
            
            <div className="text-xs font-mono text-[var(--text-light)] flex items-center gap-2 bg-[var(--bg-academic-navy)]/85 px-4 py-2.5 rounded-md backdrop-blur-md border border-white/10 shrink-0">
              <IconCheckCircle size={16} className="text-[var(--accent-gold)]" strokeWidth={1.75} />
              <span>Small Batches (Max 30–40 Total)</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators Metric Strip */}
        <div className="pt-8 pb-4 border-t border-[var(--border-subtle)] animate-reveal delay-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
            {trustStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <span className="font-heading text-3xl sm:text-4xl text-[var(--bg-academic-navy)] leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] mt-2">
                  {stat.label}
                </span>
                <span className="text-xs text-[var(--text-muted)] mt-1 font-body">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
