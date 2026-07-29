"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconLightbulb,
  IconEye,
  IconPenTool,
  IconBarChart,
  IconAward,
  IconSparkles,
  IconCheck,
  IconHelpCircle,
  IconFileText,
} from "./CustomIcons";

export default function Philosophy() {
  const [activeTab, setActiveTab] = useState<"visualization" | "memorization">("visualization");

  const steps = [
    {
      num: "01",
      name: "Concept",
      icon: IconLightbulb,
      subtitle: "First Principles",
      desc: "Deconstruct physical laws into intuitive real-world truths.",
    },
    {
      num: "02",
      name: "Visualization",
      icon: IconEye,
      subtitle: "Diagrammatic Thinking",
      desc: "Draw free-body diagrams and optics paths before writing equations.",
    },
    {
      num: "03",
      name: "Practice",
      icon: IconPenTool,
      subtitle: "Tiered Solving",
      desc: "Progress seamlessly from fundamentals to JEE Advanced multi-concepts.",
    },
    {
      num: "04",
      name: "Analysis",
      icon: IconBarChart,
      subtitle: "Error Breakdown",
      desc: "Pinpoint micro-mistakes in algebra to eradicate conceptual gaps.",
    },
    {
      num: "05",
      name: "Confidence",
      icon: IconAward,
      subtitle: "Exam Mastery",
      desc: "Execute exam papers with calm precision and deep assurance.",
    },
  ];

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-ambient-dark-radial text-[var(--text-light)] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] block mb-3">
            Core Pedagogy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-white">
            Our Teaching Philosophy
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-light)]/70 max-prose-copy">
            Why memorizing formulas fails in competitive exams—and why conceptual clarity guarantees lifelong rank success.
          </p>
        </div>

        {/* Large Editorial Quote Banner */}
        <div className="mb-20 pb-12 border-b border-white/10">
          <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-4xl text-white">
            Physics is not about memorizing formulas. It is about understanding <span className="text-[var(--accent-gold)] italic">why they work</span>.
          </blockquote>
          <span className="block mt-6 text-xs font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)]">
            — Ranganath Dharmavaram • Senior Physics Educator
          </span>
        </div>

        {/* 5-Step Process Track - Minimalist Flow */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-heading text-3xl font-normal text-white">
              The 5-Stage Conceptual Ascent
            </h3>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)]">
              From Curiosity to Exam Supremacy
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.name}
                  className="relative pt-6 border-t border-white/15 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">
                      0{index + 1}
                    </span>
                    <IconComponent size={18} className="text-[var(--accent-gold)]" strokeWidth={1.75} />
                  </div>

                  <h4 className="font-heading text-2xl text-white mb-1 font-normal">
                    {step.name}
                  </h4>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[var(--accent-gold)] mb-2">
                    {step.subtitle}
                  </p>
                  <p className="font-body text-xs text-[var(--text-light)]/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Notebook & Methodology Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Handwritten Notebook Image Frame */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-md border border-white/10">
              <Image
                src="/images/physics_notes.png"
                alt="Handwritten physics equations and vector diagrams by Ranganath Dharmavaram"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[var(--text-light)]/70 px-1 font-mono">
              <span className="flex items-center gap-1.5">
                <IconFileText size={14} className="text-[var(--accent-gold)]" strokeWidth={1.75} />
                <span>Authentic Lecture Notes & Ray Tracing</span>
              </span>
              <span className="text-[var(--accent-gold)]">DNR Physics Archives</span>
            </div>
          </div>

          {/* Right: Comparative View */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl text-white font-normal mb-2">
                Formula Rote vs. DNR Visualization
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-light)]/70 max-prose-copy">
                Compare how standard coaching handles a problem versus how DNR Physics builds intuition.
              </p>
            </div>

            {/* Toggle buttons */}
            <div className="flex rounded-md bg-[var(--bg-academic-navy-subtle)] p-1 border border-white/10">
              <button
                onClick={() => setActiveTab("visualization")}
                className={`flex-1 py-2.5 text-xs font-mono font-bold uppercase tracking-[0.12em] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "visualization"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-light)]/70 hover:text-white"
                }`}
              >
                <IconSparkles size={14} strokeWidth={1.75} />
                <span>DNR Visualization Method</span>
              </button>
              <button
                onClick={() => setActiveTab("memorization")}
                className={`flex-1 py-2.5 text-xs font-mono font-bold uppercase tracking-[0.12em] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === "memorization"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-light)]/70 hover:text-white"
                }`}
              >
                <IconHelpCircle size={14} strokeWidth={1.75} />
                <span>Typical Formula Memorization</span>
              </button>
            </div>

            {/* Tab content */}
            {activeTab === "visualization" ? (
              <div className="space-y-4 text-sm pt-2">
                <div className="flex items-start gap-3">
                  <IconCheck size={18} className="text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-heading text-xl text-white block font-normal">
                      Free-Body Vector Mapping
                    </span>
                    <p className="font-body text-xs text-[var(--text-light)]/70 mt-0.5 leading-relaxed max-prose-copy">
                      Understand normal forces, friction components, and accelerations visually before writing mathematical equations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck size={18} className="text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-heading text-xl text-white block font-normal">
                      Derivation Over Blind Substitution
                    </span>
                    <p className="font-body text-xs text-[var(--text-light)]/70 mt-0.5 leading-relaxed max-prose-copy">
                      If an exam question twists conditions (e.g. non-uniform magnetic field), students easily derive the equation from scratch.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck size={18} className="text-[var(--accent-gold)] shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-heading text-xl text-white block font-normal">
                      Zero Exam Fear
                    </span>
                    <p className="font-body text-xs text-[var(--text-light)]/70 mt-0.5 leading-relaxed max-prose-copy">
                      Students enter the examination hall feeling prepared for any novel numerical variation.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm pt-2">
                <div className="flex items-start gap-3 text-red-400">
                  <IconHelpCircle size={18} className="shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-heading text-xl text-red-300 block font-normal">
                      Blind Formula Memorization
                    </span>
                    <p className="font-body text-xs text-[var(--text-light)]/60 mt-0.5 leading-relaxed max-prose-copy">
                      Memorizing 50 variations of shortcut formulas without knowing their boundary conditions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-red-400">
                  <IconHelpCircle size={18} className="shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="font-heading text-xl text-red-300 block font-normal">
                      Panic on Twisted Questions
                    </span>
                    <p className="font-body text-xs text-[var(--text-light)]/60 mt-0.5 leading-relaxed max-prose-copy">
                      When JEE Advanced modifies standard assumptions, memorized shortcuts collapse completely.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
