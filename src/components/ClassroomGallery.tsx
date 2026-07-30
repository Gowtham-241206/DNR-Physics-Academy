"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IconMaximize, IconClose, IconChevronLeft, IconChevronRight } from "./CustomIcons";

interface GalleryItem {
  src: string;
  caption: string;
  tag: string;
  category: string;
  highlights?: string[];
  featured?: boolean;
}

export default function ClassroomGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      src: "/images/hero_classroom.png",
      caption: "Ranganath Dharmavaram explaining kinematics vector decompositions on the main classroom board.",
      tag: "boardwork",
      category: "Lecture Boardwork",
      featured: true,
      highlights: ["Step-by-step Vector Mechanics", "Smart Screen + Slate Integration", "Acoustic Classroom Design"]
    },
    {
      src: "/images/classroom_doubt_solving.png",
      caption: "Intimate small-batch doubt session where Ranganath Sir reviews an individual student's numerical derivation step by step.",
      tag: "doubts",
      category: "Personal Doubt Solving",
      highlights: ["Individual Derivation Review", "Zero Doubt Backlog"]
    },
    {
      src: "/images/educator_portrait.png",
      caption: "Ranganath Dharmavaram preparing customized daily problem sheets (DPPs) in his academic study.",
      tag: "faculty",
      category: "Faculty Mentorship",
      highlights: ["Tailored Problem Sets", "Direct Faculty Access"]
    },
    {
      src: "/images/physics_notes.png",
      caption: "Close-up of authentic handwritten student problem sheets showing vector diagrams and ray tracing equations.",
      tag: "notes",
      category: "Concept Notes",
      highlights: ["Handdrawn Ray Diagrams", "JEE Advanced Standard"]
    }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.tag === activeFilter);

  const activePhoto = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedIndex, galleryItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="classroom" className="py-20 md:py-28 bg-[var(--bg-academic-navy)] text-[var(--text-light)] relative border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-gold)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] block mb-2">
              Learning Environment
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none tracking-tight">
              Inside The Classroom
            </h2>
            <p className="mt-3 font-body text-sm text-[var(--text-light)]/70 max-prose-copy">
              Authentic glimpses of everyday learning, whiteboard derivations, small-batch discussions, and one-on-one student mentoring at DNR Physics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Moments" },
              { id: "boardwork", label: "Board Work" },
              { id: "doubts", label: "Doubt Sessions" },
              { id: "faculty", label: "Faculty Mentorship" },
              { id: "notes", label: "Concept Notes" },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-[0.12em] transition-all cursor-pointer border ${
                  activeFilter === filter.id
                    ? "bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm"
                    : "bg-[var(--bg-academic-navy-subtle)] text-[var(--text-light)]/80 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-4 md:p-6 rounded-md bg-[var(--bg-academic-navy-subtle)]/70 border border-white/10 backdrop-blur-xs">
          <div className="p-2 sm:p-3 text-center sm:text-left">
            <span className="block font-heading text-2xl sm:text-3xl text-[var(--accent-gold)] font-normal">30–40 Max</span>
            <span className="font-mono text-[10px] text-[var(--text-light)]/70 uppercase tracking-wider block mt-0.5">Strict Batch Limit</span>
          </div>
          <div className="p-2 sm:p-3 text-center sm:text-left sm:border-l border-white/10">
            <span className="block font-heading text-2xl sm:text-3xl text-[var(--accent-gold)] font-normal">Daily DPPs</span>
            <span className="font-mono text-[10px] text-[var(--text-light)]/70 uppercase tracking-wider block mt-0.5">Custom Problem Sets</span>
          </div>
          <div className="p-2 sm:p-3 text-center sm:text-left sm:border-l border-white/10">
            <span className="block font-heading text-2xl sm:text-3xl text-[var(--accent-gold)] font-normal">1-on-1 Desk</span>
            <span className="font-mono text-[10px] text-[var(--text-light)]/70 uppercase tracking-wider block mt-0.5">Personal Doubts Desk</span>
          </div>
          <div className="p-2 sm:p-3 text-center sm:text-left sm:border-l border-white/10">
            <span className="block font-heading text-2xl sm:text-3xl text-[var(--accent-gold)] font-normal">Acoustic AC</span>
            <span className="font-mono text-[10px] text-[var(--text-light)]/70 uppercase tracking-wider block mt-0.5">Focused Classroom</span>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item) => {
            const globalIndex = galleryItems.findIndex(g => g.src === item.src);
            const isHero = activeFilter === "all" && item.src === "/images/hero_classroom.png";
            const colSpan = isHero ? "lg:col-span-7" : item.src === "/images/physics_notes.png" && activeFilter === "all" ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div
                key={item.src}
                className={`${colSpan} bg-[var(--bg-academic-navy-subtle)] border border-white/10 hover:border-[var(--accent-gold)]/50 rounded-md overflow-hidden shadow-sm group relative cursor-pointer flex flex-col justify-between transition-all duration-300`}
                onClick={() => setSelectedIndex(globalIndex)}
              >
                <div className={`relative ${isHero ? "aspect-[16/9] lg:aspect-[16/10]" : "aspect-[16/10]"} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-academic-navy)] via-[var(--bg-academic-navy)]/30 to-transparent opacity-90" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-block px-3 py-1 bg-[var(--bg-academic-navy)]/80 text-[var(--accent-gold)] text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm backdrop-blur-xs border border-[var(--accent-gold)]/30">
                      {item.category}
                    </span>
                    <button
                      className="p-2 rounded-md bg-[var(--bg-academic-navy)]/80 text-[var(--accent-gold)] border border-white/10 hover:bg-[var(--accent-primary)] hover:text-white transition-colors cursor-pointer shrink-0"
                      aria-label="Expand image"
                    >
                      <IconMaximize size={15} strokeWidth={1.75} />
                    </button>
                  </div>
                </div>

                {/* Caption & Details Section */}
                <div className="p-6 relative z-10 flex flex-col justify-between flex-1 bg-gradient-to-b from-transparent to-[var(--bg-academic-navy-subtle)]">
                  <div>
                    <p className="font-body text-sm sm:text-base text-[var(--text-light)] leading-relaxed">
                      {item.caption}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/10">
                        {item.highlights.map(h => (
                          <span key={h} className="text-[10px] font-mono text-[var(--text-light)]/70 bg-white/5 px-2 py-0.5 rounded-xs border border-white/10">
                            • {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--accent-gold)] font-mono font-bold pt-2">
                    <span className="group-hover:underline flex items-center gap-1.5">
                      <span>View High-Res Photo</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal with Carousel Navigation */}
      {activePhoto && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[var(--bg-academic-navy)]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[var(--bg-academic-navy-subtle)] rounded-md overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-6 py-4 bg-[var(--bg-academic-navy)] border-b border-white/10 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-[0.15em]">
                  {activePhoto.category}
                </span>
                <span className="text-xs font-mono text-[var(--text-light)]/50">
                  ({selectedIndex + 1} of {galleryItems.length})
                </span>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="p-1.5 rounded-full bg-white/10 text-[var(--text-light)] hover:text-[var(--accent-gold)] hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <IconClose size={20} strokeWidth={1.75} />
              </button>
            </div>

            {/* Image Preview Frame */}
            <div className="relative aspect-[16/10] w-full bg-black/40 flex items-center justify-center">
              <Image
                src={activePhoto.src}
                alt={activePhoto.caption}
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-contain"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-academic-navy)]/80 text-[var(--text-light)] hover:text-[var(--accent-gold)] border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <IconChevronLeft size={22} strokeWidth={2} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[var(--bg-academic-navy)]/80 text-[var(--text-light)] hover:text-[var(--accent-gold)] border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <IconChevronRight size={22} strokeWidth={2} />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-6 bg-[var(--bg-academic-navy)] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-body text-sm sm:text-base text-[var(--text-light)] leading-relaxed max-prose-copy">
                {activePhoto.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[var(--text-light)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
                >
                  Prev (←)
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-[var(--text-light)] hover:text-[var(--accent-gold)] transition-colors cursor-pointer"
                >
                  Next (→)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
