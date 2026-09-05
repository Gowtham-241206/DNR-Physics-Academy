"use client";

import Image from "next/image";
import { MotionDiv } from "./MotionWrapper";
import { IconArrowRight, IconAward, IconCheckCircle } from "./CustomIcons";

interface HeroProps {
  onOpenCounselling: () => void;
}

export default function Hero({ onOpenCounselling }: HeroProps) {
  const trustStats = [
    { label: "Teaching Since", value: "1989", detail: "Over 35 Years Experience" },
    { label: "DNR Centre Founded", value: "2017", detail: "Dedicated Physics Academy" },
    { label: "Learning Modes", value: "Offline + Online", detail: "Nellore & Interactive Live" },
    { label: "Batch Strength", value: "Limited", detail: "Limited Number of Students" },
  ];

  return (
    <section className="relative pt-24 pb-14 md:pt-28 md:pb-10 overflow-hidden bg-ambient-radial border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Authority Badge */}
        <div className="text-center mb-6 animate-reveal">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs max-w-full">
            <IconAward size={14} className="text-[var(--accent-primary)] shrink-0" strokeWidth={1.75} />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[var(--text-main)] text-center">
              Ranganath Dharmavaram • Physics Specialist • Teaching Since 1989
            </span>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto mb-6 animate-reveal">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[var(--text-main)] leading-[0.98] sm:leading-[0.95] tracking-tight">
            Teaching Since 1989 <br className="hidden sm:block" />
            <span className="italic text-[var(--accent-primary)]">Simplifying Physics</span>
          </h1>
        </div>

        {/* Subheading & CTAs */}
        <div className="text-center max-w-2xl mx-auto mb-10 animate-reveal delay-1">
          <p className="font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-prose-copy mx-auto">
            Concept-based Physics coaching for JEE - ADVANCED, NEET, and CBSE Foundation. Focused batches with personal mentorship by Ranganath Dharmavaram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-primary)] transition-colors shadow-xs group cursor-pointer"
            >
              <span>Contact Tutor & Visit</span>
              <IconArrowRight size={14} className="text-[var(--accent-gold)] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </button>

            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-6 py-3 sm:py-3.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-main)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
            >
              <span>Explore Courses</span>
            </a>
          </div>
        </div>

        {/* Hero Classroom Photography */}
        <div className="relative rounded-lg overflow-hidden shadow-md mb-12 aspect-[4/3] sm:aspect-[16/9] min-h-[300px] sm:min-h-0 max-h-[500px] border border-[var(--border-subtle)] animate-reveal delay-2">
          <Image
            src="/images/hero_classroom.png"
            alt="Ranganath Dharmavaram teaching physics concepts in small batch classroom in Nellore"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
            className="object-cover object-center"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-academic-navy)] via-[var(--bg-academic-navy)]/60 to-transparent sm:from-[var(--bg-academic-navy)]/90 sm:via-transparent sm:to-transparent" />

          {/* Caption Banner */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 sm:gap-4 text-[var(--text-light)]">
            <p className="font-heading text-base sm:text-xl lg:text-2xl font-normal leading-snug max-w-[60ch]">
              When a student visualizes the physical mechanics behind an equation, problem solving ceases to be a burden and becomes second nature.
            </p>
            
            <div className="text-[11px] sm:text-xs font-mono text-[var(--text-light)] flex items-center gap-2 bg-[var(--bg-academic-navy)]/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md backdrop-blur-md border border-white/10 shrink-0">
              <IconCheckCircle size={15} className="text-[var(--accent-gold)] shrink-0" strokeWidth={1.75} />
              <span>Limited Number of Students</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators Metric Strip */}
        <div className="pt-6 pb-2 border-t border-[var(--border-subtle)] animate-reveal delay-3">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
            {trustStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <span className="font-heading text-3xl sm:text-4xl text-[var(--bg-academic-navy)] leading-none">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.1em] text-[var(--accent-primary)] mt-1.5">
                  {stat.label}
                </span>
                <span className="font-body text-xs text-[var(--text-muted)] mt-0.5">
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
