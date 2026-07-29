"use client";

import {
  IconUserCheck,
  IconBookOpen,
  IconPenTool,
  IconCheckSquare,
  IconAlertCircle,
  IconShield,
  IconTrophy,
} from "./CustomIcons";

export default function StudentJourney() {
  const steps = [
    {
      num: "01",
      title: "Admission & Diagnostic",
      icon: IconUserCheck,
      desc: "Personal interview with Ranganath Sir to evaluate student's current Physics orientation and basic math foundation."
    },
    {
      num: "02",
      title: "Concept Building",
      icon: IconBookOpen,
      desc: "First-principles lecture derivations, visual intuition exercises, and zero-memorization theory sessions."
    },
    {
      num: "03",
      title: "Targeted Practice",
      icon: IconPenTool,
      desc: "Multi-level Daily Practice Sheets (DPPs) progressing from standard numericals to JEE Advanced / NEET level."
    },
    {
      num: "04",
      title: "Weekly Analytical Tests",
      icon: IconCheckSquare,
      desc: "Timed weekly paper simulations mapped precisely to NTA & JEE Advanced difficulty patterns."
    },
    {
      num: "05",
      title: "Personal Error Analysis",
      icon: IconAlertCircle,
      desc: "Ranganath Sir personally audits test paper mistakes to correct algebraic slips, sign errors, or misread questions."
    },
    {
      num: "06",
      title: "Calm Exam Confidence",
      icon: IconShield,
      desc: "Systematic revision cycles and time management strategies eliminate last-minute exam anxiety."
    },
    {
      num: "07",
      title: "Exam Success & Ranks",
      icon: IconTrophy,
      desc: "Achieving top percentiles and securing seats in premier IITs, NITs, and Government Medical Colleges."
    }
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
            Pedagogical Path
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            The DNR Student Journey
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
            From the first day of diagnostic counselling to the final rank celebration—how we systematically guide every student.
          </p>
        </div>

        {/* Clean Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="relative pt-6 border-t-2 border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[var(--accent-primary)]">
                    STEP {step.num}
                  </span>
                  <IconComponent size={18} className="text-[var(--bg-academic-navy)] group-hover:text-[var(--accent-primary)] transition-colors" strokeWidth={1.75} />
                </div>

                <h3 className="font-heading text-2xl text-[var(--bg-academic-navy)] mb-2 leading-tight font-normal">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed max-prose-copy">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
