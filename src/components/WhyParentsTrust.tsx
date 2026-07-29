"use client";

import Image from "next/image";
import { IconShield, IconMapPin } from "./CustomIcons";

export default function WhyParentsTrust() {
  const reasons = [
    {
      num: "01",
      title: "Concept-First Teaching",
      short: "Understanding 'Why' Before Applying 'How'",
      desc: "We do not force students to memorize hundreds of formulas. We derive every physical concept from first principles so students can tackle any novel problem presented in IIT-JEE Advanced or NEET.",
    },
    {
      num: "02",
      title: "Uncompromised Individual Attention",
      short: "Tracking Every Student's Analytical Progress",
      desc: "In mass coaching factories, quiet students get left behind. Ranganath Dharmavaram personally reviews every student's error patterns, numerical speed, and conceptual blindspots.",
    },
    {
      num: "03",
      title: "Strictly Small Batches",
      short: "Max 30–40 Students Across Entire Institute",
      desc: "Quality education requires focus. By capping overall batch size, we maintain an interactive environment where students comfortably ask doubts without hesitation.",
    },
    {
      num: "04",
      title: "36+ Years Experienced Educator",
      short: "Direct Instruction by Senior Faculty Only",
      desc: "No junior proxy teachers or inexperienced guest tutors. Every single Physics lecture is personally planned and delivered by Ranganath Dharmavaram, who has taught since 1988.",
    },
    {
      num: "05",
      title: "Consistent Mentoring & Calm Guidance",
      short: "Building Exam Confidence Without Panic",
      desc: "Competitive exam prep is a marathon. We provide steady emotional and academic mentorship to ensure students remain disciplined, calm, and confident under exam pressure.",
    },
  ];

  return (
    <section id="why-trust" className="py-20 md:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
            The Trust Factor
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Why Parents Trust <br />
            <span className="italic text-[var(--accent-primary)] font-normal">DNR Physics</span> With Their Child’s Future
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-prose-copy">
            In an era of commercial EdTech marketing and 200-student lecture halls, DNR Physics remains committed to genuine academic excellence and personal care.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - 5 Editorial Reasons */}
          <div className="lg:col-span-7 divide-y divide-[var(--border-subtle)]">
            {reasons.map((reason) => (
              <div
                key={reason.num}
                className="py-8 first:pt-0 last:pb-0 group"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xl font-bold text-[var(--accent-primary)] group-hover:text-[var(--bg-academic-navy)] transition-colors shrink-0 mt-1">
                    {reason.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-[var(--bg-academic-navy)] leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[var(--accent-primary)] mt-1 mb-2">
                      {reason.short}
                    </p>
                    <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-prose-copy">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Classroom Photo Framing */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-[var(--border-subtle)] shadow-xs">
                <Image
                  src="/images/classroom_doubt_solving.png"
                  alt="Ranganath Dharmavaram sitting with small batch of students explaining physics problem"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover"
                />
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1.5">
                  <IconShield size={18} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
                  <span className="font-heading font-normal text-xl text-[var(--bg-academic-navy)]">
                    The Small Batch Assurance
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-prose-copy">
                  Every evening batch is structured so that Ranganath Dharmavaram sits with students, observes how they write steps, and instantly corrects their conceptual flaws.
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span className="flex items-center gap-1.5 font-bold text-[var(--bg-academic-navy)] uppercase tracking-[0.1em]">
                  <IconMapPin size={14} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
                  <span>Nellore Coaching Centre</span>
                </span>
                <span className="font-bold text-[var(--bg-academic-navy)]">36+ Years Legacy</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
