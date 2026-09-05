"use client";

import Image from "next/image";
import { IconCheckCircle } from "./CustomIcons";

export default function Textbooks() {
  const books = [
    {
      title: "Class XI Physics",
      subtitle: "A Comprehensive Book on Physics for Class XI",
      edition: "Authored by D. N. Ranganath Rao",
      author: "D. N. Ranganath Rao",
      cover: "/images/Class11.jpeg",
      description: "A comprehensive guide providing simple explanations of fundamental Class 11 topics and an intensive repository of practice sets for deeper understanding. Designed for competitive excellence in IIT-JEE, NEET, and BITSAT.",
      topics: [
        "Kinematics & Newton's Laws of Motion",
        "Work, Energy & Momentum Conservation",
        "Rigid Body Dynamics & Rotational Mechanics",
        "Gravitation, Fluid Dynamics & Heat Thermodynamics"
      ],
      examTarget: "IIT-JEE (Main & Advanced), NEET & BITSAT"
    },
    {
      title: "Class XII Physics",
      subtitle: "A Comprehensive Book on Physics for Class XII",
      edition: "Authored by D. N. Ranganath Rao",
      author: "D. N. Ranganath Rao",
      cover: "/images/Class12.jpeg",
      description: "Written as a definitive culmination of years of teaching experience, bridging senior secondary concepts with upper-tier competitive problem solving across Electrodynamics, Optics, and Modern Physics.",
      topics: [
        "Electrostatics & Gauss Theorem",
        "Magnetic Effects of Current & Induction",
        "Ray & Wave Optics Interference",
        "Atomic Structure, Nuclear Physics & Quantum Mechanics"
      ],
      examTarget: "IIT-JEE (Main & Advanced), NEET & BITSAT"
    }
  ];

  return (
    <section id="books" className="py-20 md:py-24 bg-[var(--bg-canvas)] relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Authored Physics Textbooks
          </h2>
          <p className="mt-2 font-body text-base text-[var(--text-muted)] max-prose-copy">
            Written personally by D. N. Ranganath Rao to simplify complex theory and build competitive problem-solving mastery.
          </p>
        </div>

        {/* Books Balanced 2-Column Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-[var(--bg-surface)] rounded-xl p-5 sm:p-6 border border-[var(--border-subtle)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Textbook Cover */}
                <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-[var(--bg-academic-navy)] border border-[var(--border-subtle)] shadow-sm group-hover:shadow-md transition-all mb-5">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Header */}
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="font-heading text-2xl text-[var(--bg-academic-navy)] font-normal">
                    {book.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--accent-primary)] font-bold shrink-0">
                    {book.examTarget}
                  </span>
                </div>

                <p className="font-body text-xs text-[var(--text-muted)] mb-3">
                  {book.subtitle} • <strong className="text-[var(--bg-academic-navy)] font-medium">By {book.author}</strong>
                </p>

                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {book.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Available at Academy</span>
                <span className="font-bold text-[var(--bg-academic-navy)]">DNR Physics Press</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
