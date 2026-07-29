"use client";

import Image from "next/image";
import { IconGraduationCap } from "./CustomIcons";

export default function MeetEducator() {
  const milestones = [
    { year: "1988", text: "Began teaching Physics with a passion for concept visualization." },
    { year: "2000s", text: "Mentored hundreds of students into top IITs, NITs, and Medical Colleges." },
    { year: "2017", text: "Founded DNR Physics Coaching Centre in Nellore for small-batch excellence." },
    { year: "Present", text: "36+ Years of continuous Physics teaching & textbook authorship." },
  ];

  return (
    <section id="educator" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Educator Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-[var(--border-subtle)] shadow-md">
                <Image
                  src="/images/educator_portrait.png"
                  alt="Ranganath Dharmavaram - Senior Physics Educator in Nellore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover"
                />
              </div>

              <div className="p-4 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md flex items-center justify-between shadow-xs border border-[var(--bg-academic-navy)]">
                <div>
                  <h4 className="font-heading font-normal text-xl leading-none text-[var(--text-light)]">
                    Ranganath Dharmavaram
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--accent-gold)] font-bold mt-1">
                    Physics Educator • Mentor • Guide
                  </p>
                </div>
                <div className="px-3 py-1 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm">
                  Since 1988
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative Storytelling */}
          <div className="lg:col-span-7">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
                Faculty Spotlight
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight mb-6">
                Meet Ranganath Dharmavaram
              </h2>

              <div className="font-body text-[#57524A] space-y-4 text-base sm:text-lg leading-relaxed max-prose-copy">
                <p>
                  Physics is often perceived as a daunting maze of abstract formulas and mathematical traps. But to <strong className="text-[var(--bg-academic-navy)]">Ranganath Dharmavaram</strong>, Physics is the most intuitive, beautiful language in the natural world.
                </p>
                <p>
                  Having begun his teaching career in <strong className="text-[var(--bg-academic-navy)]">1988</strong>, Ranganath Sir has spent <strong className="text-[var(--bg-academic-navy)]">over 36 years</strong> refining the art of simplifying complex physical phenomena—from rotational dynamics and wave optics to electromagnetic induction and quantum mechanics.
                </p>
                <p>
                  In <strong className="text-[var(--bg-academic-navy)]">2017</strong>, dissatisfied with the commercialization of mass coaching institutes where students were treated as roll numbers, he established <strong className="text-[var(--bg-academic-navy)]">DNR Physics Coaching Centre</strong> in Nellore. His mission was singular: to create a sanctuary of learning where small batches allow every student to receive master-level guidance directly from a veteran educator.
                </p>
                <p>
                  As an <strong className="text-[var(--bg-academic-navy)]">author of specialized Physics textbooks</strong> tailored for IIT-JEE and NEET aspirants, his teaching methodology bridges raw theoretical elegance with razor-sharp exam application.
                </p>
              </div>

              {/* Milestones - Clean Horizontal Hairline Timeline */}
              <div className="mt-10 pt-8 border-t border-[var(--border-subtle)]">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-6">
                  Key Career Milestones
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {milestones.map((m) => (
                    <div key={m.year} className="relative pl-4 border-l-2 border-[var(--accent-primary)]">
                      <span className="block font-mono font-bold text-xl text-[var(--bg-academic-navy)]">
                        {m.year}
                      </span>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-1 leading-snug">
                        {m.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Quote Banner */}
              <div className="mt-8 flex items-start gap-3 text-sm text-[var(--bg-academic-navy)] font-body bg-[var(--bg-surface)] p-4 rounded-md border border-[var(--border-subtle)]">
                <IconGraduationCap size={20} className="text-[var(--accent-primary)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="italic">
                  My responsibility is not just to prepare students for an exam, but to instill a lifetime of analytical thinking and conceptual clarity.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
