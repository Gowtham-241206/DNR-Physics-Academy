"use client";

import Image from "next/image";
import { IconShield, IconMapPin, IconCheckCircle, IconUserCheck, IconAward, IconBookOpen } from "./CustomIcons";

export default function WhyParentsTrust() {
  const pillars = [
    {
      num: "01",
      icon: IconBookOpen,
      title: "Concept-First Teaching",
      short: "Understanding 'Why' Before 'How'",
      desc: "Zero blind formula memorization. Every concept is derived from first principles so students effortlessly solve novel, twisted problems in JEE - ADVANCED and NEET.",
    },
    {
      num: "02",
      icon: IconUserCheck,
      title: "Strictly Limited Batches",
      short: "Limited Number of Students",
      desc: "Our strictly limited batch size ensures every quiet student's doubts are heard, discussed, and resolved daily with direct faculty mentorship.",
    },
    {
      num: "03",
      icon: IconAward,
      title: "100% Senior Faculty Delivery",
      short: "Taught by Ranganath Dharmavaram",
      desc: "No proxy tutors or junior faculty. Every single lecture, problem sheet, and test evaluation is personally conducted by Ranganath Sir with decades of mastery (Teaching since 1989).",
    },
    {
      num: "04",
      icon: IconCheckCircle,
      title: "Personal Error Ledger Audits",
      short: "Individual Weakness Diagnosis",
      desc: "We analyze each student's weekly test papers individually to eliminate algebraic slips, sign mistakes, and conceptual blindspots before actual entrance exams.",
    },
  ];

  return (
    <section id="why-trust" className="py-20 md:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Why Parents Trust <br />
            <span className="italic text-[var(--accent-primary)] font-normal">DNR Physics</span> With Their Child’s Future
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-prose-copy">
            Dedicated to personal care, focused batches with a limited number of students, and deep conceptual clarity.
          </p>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 4 Distinct Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-[var(--bg-canvas)] rounded-lg p-6 border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between hover:border-[var(--accent-primary)] transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                        {pillar.num}
                      </span>
                      <IconComp size={20} className="text-[var(--bg-academic-navy)] group-hover:text-[var(--accent-primary)] transition-colors" strokeWidth={1.75} />
                    </div>

                    <h3 className="font-heading text-2xl text-[var(--bg-academic-navy)] leading-tight mb-2 font-normal group-hover:text-[var(--accent-primary)] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Framed Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[16/10] lg:aspect-[4/5] rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-md">
              <Image
                src="/images/classroom_doubt_solving.png"
                alt="Ranganath Dharmavaram sitting with students explaining physics problem"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-academic-navy)]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-[var(--text-light)]">
                <p className="font-heading text-base sm:text-lg leading-snug">
                  Every student solves derivations side-by-side with Ranganath Sir.
                </p>
              </div>
            </div>

            {/* Proof Strip */}
            <div className="p-3.5 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <IconShield size={16} className="text-[var(--accent-gold)] shrink-0" strokeWidth={1.75} />
                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold">
                  Mentorship Promise
                </span>
              </div>
              <span className="font-mono text-xs text-[var(--text-light)]/80">
                Limited Number of Students
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
