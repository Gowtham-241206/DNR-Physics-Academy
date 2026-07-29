"use client";

import { IconClose, IconCheckCircle, IconClock, IconBuilding, IconUsers, IconArrowRight } from "./CustomIcons";

export interface CourseDetail {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  overview: string;
  whoShouldJoin: string[];
  duration: string;
  teachingMethod: string;
  modes: string[];
  batchSize: string;
  curriculum: string[];
}

interface CourseModalProps {
  course: CourseDetail | null;
  onClose: () => void;
  onOpenCounselling: () => void;
}

export default function CourseModal({ course, onClose, onOpenCounselling }: CourseModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-academic-navy)]/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-md relative my-8 animate-reveal">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-md text-[var(--text-main)] hover:bg-[var(--bg-surface-elevated)] transition-colors cursor-pointer"
        >
          <IconClose size={20} strokeWidth={1.5} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm mb-2">
            {course.badge}
          </span>
          <h3 className="font-heading text-3xl font-normal text-[var(--bg-academic-navy)] leading-tight">
            {course.title}
          </h3>
          <p className="text-xs text-[var(--accent-primary)] font-mono font-bold uppercase tracking-[0.12em] mt-1">
            {course.subtitle}
          </p>
        </div>

        {/* Key Info Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[var(--bg-canvas)] p-4 rounded-md border border-[var(--border-subtle)] mb-6 text-xs font-mono text-[var(--bg-academic-navy)]">
          <div className="flex items-center gap-2">
            <IconClock size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <div>
              <span className="block text-[9px] text-[var(--text-muted)] uppercase tracking-[0.1em]">Duration</span>
              <span className="font-bold">{course.duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconUsers size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <div>
              <span className="block text-[9px] text-[var(--text-muted)] uppercase tracking-[0.1em]">Batch Size</span>
              <span className="font-bold">{course.batchSize}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
            <IconBuilding size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <div>
              <span className="block text-[9px] text-[var(--text-muted)] uppercase tracking-[0.1em]">Available Modes</span>
              <span className="font-bold">{course.modes.join(" • ")}</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h4 className="font-heading font-normal text-2xl text-[var(--bg-academic-navy)] mb-2">
            Course Overview
          </h4>
          <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed max-prose-copy">
            {course.overview}
          </p>
        </div>

        {/* Who Should Join */}
        <div className="mb-6">
          <h4 className="font-heading font-normal text-2xl text-[var(--bg-academic-navy)] mb-2">
            Who Should Join
          </h4>
          <ul className="space-y-2">
            {course.whoShouldJoin.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 font-body text-sm text-[var(--text-muted)]">
                <IconCheckCircle size={16} className="text-[var(--accent-primary)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teaching Method */}
        <div className="mb-6 bg-[var(--bg-canvas)] p-4 rounded-md border border-[var(--border-subtle)]">
          <h4 className="font-heading font-normal text-xl text-[var(--bg-academic-navy)] mb-1">
            Teaching Methodology
          </h4>
          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed max-prose-copy">
            {course.teachingMethod}
          </p>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-md border border-[var(--border-subtle)] text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--bg-academic-navy)] hover:bg-[var(--bg-canvas)] transition-colors cursor-pointer"
          >
            Close Window
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenCounselling();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-primary)] flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer group"
          >
            <span>Enquire For This Course</span>
            <IconArrowRight size={14} className="text-[var(--accent-gold)] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </button>
        </div>

      </div>
    </div>
  );
}
