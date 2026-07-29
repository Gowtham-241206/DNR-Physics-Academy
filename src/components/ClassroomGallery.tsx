"use client";

import { useState } from "react";
import Image from "next/image";
import { IconMaximize, IconClose } from "./CustomIcons";

export default function ClassroomGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string; tag: string; category: string } | null>(null);

  const galleryItems = [
    {
      src: "/images/hero_classroom.png",
      caption: "Ranganath Dharmavaram explaining kinematics vector decompositions on the main classroom board.",
      tag: "boardwork",
      category: "Lecture Boardwork"
    },
    {
      src: "/images/classroom_doubt_solving.png",
      caption: "Intimate small-batch doubt session where Ranganath Sir reviews an individual student's numerical derivation step by step.",
      tag: "doubts",
      category: "Personal Doubt Solving"
    },
    {
      src: "/images/educator_portrait.png",
      caption: "Ranganath Dharmavaram preparing customized daily problem sheets (DPPs) in his academic study.",
      tag: "faculty",
      category: "Faculty Mentorship"
    },
    {
      src: "/images/physics_notes.png",
      caption: "Close-up of authentic handwritten student problem sheets showing vector diagrams and ray tracing equations.",
      tag: "notes",
      category: "Concept Notes"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.tag === activeFilter);

  return (
    <section id="classroom" className="py-20 md:py-28 bg-[var(--bg-academic-navy)] text-[var(--text-light)] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-[0.12em] transition-colors border cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]"
                    : "bg-[var(--bg-academic-navy-subtle)] text-[var(--text-light)]/80 border-white/10 hover:border-white/30"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.caption}
              className="bg-[var(--bg-academic-navy-subtle)] border border-white/10 rounded-md overflow-hidden shadow-xs group relative cursor-pointer"
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-academic-navy)] via-transparent to-transparent opacity-80" />
              </div>

              {/* Caption Overlay */}
              <div className="p-6 relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-[var(--accent-primary)]/20 text-[var(--accent-gold)] text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm mb-2 border border-[var(--accent-gold)]/30">
                    {item.category}
                  </span>
                  <p className="font-body text-sm text-[var(--text-light)] leading-relaxed max-prose-copy">
                    {item.caption}
                  </p>
                </div>
                <button
                  className="p-2 rounded-md bg-[var(--bg-academic-navy)]/80 text-[var(--accent-gold)] border border-white/10 cursor-pointer shrink-0"
                  aria-label="Expand image"
                >
                  <IconMaximize size={16} strokeWidth={1.75} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[var(--bg-academic-navy)]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[var(--bg-academic-navy-subtle)] rounded-md overflow-hidden border border-white/20 shadow-md"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[var(--bg-academic-navy)]/80 text-[var(--text-light)] hover:text-[var(--accent-gold)] cursor-pointer"
            >
              <IconClose size={22} strokeWidth={1.5} />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                fill
                sizes="(max-width: 1200px) 90vw, 1000px"
                className="object-cover"
              />
            </div>

            <div className="p-6 bg-[var(--bg-academic-navy)]">
              <span className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-[0.15em] block mb-1">
                {selectedPhoto.category}
              </span>
              <p className="font-body text-base text-[var(--text-light)] leading-relaxed max-prose-copy">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
