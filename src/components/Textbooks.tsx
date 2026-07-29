"use client";

import Image from "next/image";
import { IconCheckCircle } from "./CustomIcons";

export default function Textbooks() {
  const books = [
    {
      title: "Concepts of Physics: Mechanics & Thermodynamics",
      subtitle: "Comprehensive Problem Solving Guide for IIT-JEE Advanced & NEET",
      edition: "4th Revised Edition (2025-26)",
      author: "Ranganath Dharmavaram",
      cover: "/images/book_mechanics.png",
      description: "A definitive volume focused on building deep mechanical intuition. Features 1,200+ step-by-step solved problems, vector kinematic maps, rotational dynamics analysis, and thermodynamic cycles.",
      topics: [
        "Kinematics & Newton's Laws of Motion",
        "Work, Energy & Momentum Conservation",
        "Rigid Body Dynamics & Rotational Mechanics",
        "Gravitation, Fluid Dynamics & Heat Thermodynamics"
      ],
      examTarget: "IIT-JEE Main, Advanced & NEET Aspirants"
    },
    {
      title: "Advanced Electromagnetism & Modern Physics",
      subtitle: "Mastering Fields, Waves & Quantum Phenomena",
      edition: "3rd Deluxe Edition",
      author: "Ranganath Dharmavaram",
      cover: "/images/book_electromagnetism.png",
      description: "Designed for upper-tier competitive exam preparation. Deconstructs Gauss's Law, Faraday's Induction, Alternating Currents, Wave Optics, and Photoelectric Effect with mathematical precision and diagrammatic clarity.",
      topics: [
        "Electrostatics & Gauss Theorem",
        "Magnetic Effects of Current & Induction",
        "Ray & Wave Optics Interference",
        "Atomic Structure, Nuclear Physics & Quantum Mechanics"
      ],
      examTarget: "IIT-JEE Advanced & Olympiad Aspirants"
    }
  ];

  return (
    <section id="books" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
            Academic Publications
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Authored Physics Textbooks
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
            Written personally by Ranganath Dharmavaram to bridge high-school theory with top-tier competitive exam problem solving.
          </p>
        </div>

        {/* Books Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col sm:flex-row gap-8 items-start pb-10 border-b border-[var(--border-subtle)]"
            >
              {/* Book Cover Image */}
              <div className="w-full sm:w-5/12 shrink-0">
                <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-xs bg-[var(--bg-academic-navy)] border border-[var(--border-subtle)]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="w-full sm:w-7/12 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm mb-2 border border-[var(--accent-primary)]/20">
                    {book.edition}
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl text-[var(--bg-academic-navy)] leading-tight mb-1 font-normal">
                    {book.title}
                  </h3>
                  <p className="text-xs text-[var(--accent-primary)] font-mono font-bold uppercase tracking-[0.12em] mb-3">
                    By {book.author}
                  </p>

                  <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-4 max-prose-copy">
                    {book.description}
                  </p>

                  {/* Core Topics Covered */}
                  <div className="mb-4 pt-3 border-t border-[var(--border-subtle)]">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                      Key Topics Covered:
                    </span>
                    <ul className="space-y-1.5 font-body">
                      {book.topics.map((t, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <IconCheckCircle size={14} className="text-[var(--accent-primary)] shrink-0" strokeWidth={1.75} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                  <span>Target: <strong className="text-[var(--bg-academic-navy)]">{book.examTarget}</strong></span>
                  <span className="font-bold text-[var(--bg-academic-navy)]">DNR Physics Press</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
