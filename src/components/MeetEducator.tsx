"use client";

import { useState } from "react";
import Image from "next/image";
import { IconGraduationCap, IconBookOpen, IconCheckCircle, IconClose } from "./CustomIcons";

export default function MeetEducator() {
  const [enlargedCover, setEnlargedCover] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const milestones = [
    { year: "1989", text: "Began teaching Physics with focus on first-principles concept visualization." },
    { year: "2000s", text: "Mentored hundreds of students into top IITs, NITs, and Medical Colleges." },
    { year: "2017", text: "Established DNR Physics Coaching Centre in Nellore for small-batch excellence." },
    { year: "Present", text: "35+ Years of continuous teaching & author of specialized Physics volumes." },
  ];

  const books = [
    {
      title: "Class XI Physics",
      subtitle: "A Comprehensive Book on Physics for Class XI",
      edition: "Authored by D. N. Ranganath Rao",
      cover: "/images/Class11.jpeg",
      target: "IIT-JEE (Main & Advanced) • NEET • BITSAT",
      synopsis: "The culmination of decades of teaching experience, written as a definitive guide providing simple explanations of fundamental physical concepts and an intensive repository of practice sets for deeper understanding.",
      highlights: [
        "Kinematics, Newton’s Laws of Motion & Rotational Dynamics",
        "Work, Energy & Momentum Conservation Principles",
        "Fluid Mechanics, Gravitation & Heat Thermodynamics",
        "Graded Practice Sets: Concept Grounding to JEE Advanced"
      ],
    },
    {
      title: "Class XII Physics",
      subtitle: "A Comprehensive Book on Physics for Class XII",
      edition: "Authored by D. N. Ranganath Rao",
      cover: "/images/Class12.jpeg",
      target: "IIT-JEE (Main & Advanced) • NEET • BITSAT",
      synopsis: "Staying true to the motto 'Physics Simplified', this volume articulates advanced electromagnetic fields, optics, and modern physics in an intuitive, easily understandable manner with rigorous competitive depth.",
      highlights: [
        "Electrostatics, Gauss's Theorem, Magnetism & EMI",
        "Ray & Wave Optics with Step-by-Step Ray Diagrams",
        "Atomic Structure, Nuclear Physics & Quantum Mechanics",
        "Speed-Accuracy Balancing Drills for High Competitive Ranks"
      ],
    },
  ];

  return (
    <section id="educator" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Educator Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Educator Portrait Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden border border-[var(--border-subtle)] shadow-md">
              <Image
                src="/images/DNR_Profile.png"
                alt="Ranganath Dharmavaram - Senior Physics Educator in Nellore"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md flex items-center justify-between shadow-xs border border-[var(--bg-academic-navy)]">
              <div>
                <h4 className="font-heading font-normal text-xl leading-none text-[var(--text-light)]">
                  Ranganath Dharmavaram
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--accent-gold)] font-bold mt-1">
                  Senior Physics Educator & Author
                </p>
              </div>
              <div className="px-3 py-1 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm">
                Since 1989
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Story */}
          <div className="lg:col-span-7">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight mb-6">
                Meet Ranganath Dharmavaram
              </h2>

              <div className="font-body text-[#57524A] space-y-4 text-base sm:text-lg leading-relaxed max-prose-copy">
                <p>
                  Teaching since <strong className="text-[var(--bg-academic-navy)]">1989</strong>, Ranganath Dharmavaram has dedicated over 35 years to simplifying complex Physics for IIT-JEE and NEET aspirants. In 2017, he established <strong className="text-[var(--bg-academic-navy)]">DNR Physics</strong> in Nellore to provide focused mentorship with a strictly limited number of students per batch.
                </p>
                <p>
                  Every lecture, problem set, and test evaluation is conducted personally—ensuring students move beyond formula memorization to build genuine analytical intuition and exam confidence.
                </p>
              </div>

              {/* Milestones - Clean Horizontal Hairline Timeline */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {milestones.map((m) => (
                    <div key={m.year} className="relative pl-3 border-l-2 border-[var(--accent-primary)]">
                      <span className="block font-mono font-bold text-lg text-[var(--bg-academic-navy)]">
                        {m.year}
                      </span>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-0.5 leading-snug">
                        {m.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Banner */}
              <div className="mt-8 flex items-start gap-3 text-sm text-[var(--bg-academic-navy)] font-body bg-[var(--bg-surface)] p-4 rounded-md border border-[var(--border-subtle)] shadow-xs">
                <IconGraduationCap size={20} className="text-[var(--accent-primary)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="italic">
                  &ldquo;My responsibility is not just to prepare students for an entrance exam, but to build a lifetime of analytical thinking and conceptual clarity.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Authored Publications - Balanced 2-Column Showcase */}
        <div className="pt-12 border-t border-[var(--border-subtle)]">
          <div className="mb-8">
            <h3 className="font-heading text-3xl sm:text-4xl text-[var(--bg-academic-navy)] leading-tight font-normal">
              Authored Physics Textbooks
            </h3>
            <p className="mt-1.5 font-body text-sm text-[var(--text-muted)] max-prose-copy">
              Written personally by D. N. Ranganath Rao to simplify complex theory and build competitive problem-solving mastery.
            </p>
          </div>

          {/* 2-Column Balanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-[var(--bg-surface)] rounded-xl p-5 sm:p-6 border border-[var(--border-subtle)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Textbook Cover Presentation */}
                  <div
                    onClick={() => setEnlargedCover({ src: book.cover, title: book.title, subtitle: book.subtitle })}
                    className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-[var(--bg-academic-navy)] border border-[var(--border-subtle)] shadow-sm group-hover:shadow-md transition-all cursor-zoom-in group/cover mb-5"
                  >
                    <Image
                      src={book.cover}
                      alt={`${book.title} - ${book.subtitle}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover object-center group-hover/cover:scale-[1.02] transition-transform duration-300"
                      priority
                    />
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="font-heading text-2xl text-[var(--bg-academic-navy)] font-normal">
                      {book.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[var(--accent-primary)] font-bold">
                      {book.target}
                    </span>
                  </div>

                  <p className="font-body text-xs text-[var(--text-muted)] mb-3">
                    {book.subtitle} • <strong className="text-[var(--bg-academic-navy)] font-medium">By D. N. Ranganath Rao</strong>
                  </p>

                  <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {book.synopsis}
                  </p>
                </div>

                {/* Inspect Action */}
                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    Physical Edition Available at Academy
                  </span>
                  <button
                    onClick={() => setEnlargedCover({ src: book.cover, title: book.title, subtitle: book.subtitle })}
                    className="px-3.5 py-1.5 rounded-sm bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.1em] hover:bg-[var(--accent-primary)] transition-colors cursor-pointer shrink-0"
                  >
                    Inspect Cover
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-size Lightbox for Textbook Covers */}
        {enlargedCover && (
          <div
            onClick={() => setEnlargedCover(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[var(--bg-academic-navy)]/90 backdrop-blur-sm animate-reveal cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[var(--bg-surface)] border border-white/20 rounded-md p-4 sm:p-6 shadow-2xl overflow-hidden cursor-default"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h4 className="font-heading text-2xl text-[var(--bg-academic-navy)]">
                    {enlargedCover.title}
                  </h4>
                  <p className="font-body text-xs text-[var(--text-muted)]">
                    {enlargedCover.subtitle} • By D. N. Ranganath Rao
                  </p>
                </div>
                <button
                  onClick={() => setEnlargedCover(null)}
                  className="p-2 rounded-md hover:bg-[var(--bg-canvas)] text-[var(--text-main)] transition-colors cursor-pointer"
                >
                  <IconClose size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="relative aspect-[3/2] w-full rounded-sm overflow-hidden bg-[var(--bg-academic-navy)] border border-[var(--border-subtle)]">
                <Image
                  src={enlargedCover.src}
                  alt={enlargedCover.title}
                  fill
                  sizes="1200px"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-3 text-center text-xs font-mono text-[var(--text-muted)]">
                Click anywhere outside to close
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
