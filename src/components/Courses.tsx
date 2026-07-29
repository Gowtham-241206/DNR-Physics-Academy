"use client";

import { useState } from "react";
import CourseModal, { CourseDetail } from "./CourseModal";
import { IconArrowRight, IconBuilding, IconLaptop } from "./CustomIcons";

interface CoursesProps {
  onOpenCounselling: () => void;
}

export default function Courses({ onOpenCounselling }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

  const courseList: CourseDetail[] = [
    {
      id: "jee-advanced",
      title: "IIT-JEE Advanced Physics",
      badge: "Flagship Program",
      subtitle: "Comprehensive 2-Year & 1-Year Intensive Masterclass",
      overview: "Designed for serious aspirants seeking top ranks in IIT-JEE Advanced. Focuses heavily on multi-concept numericals, advanced calculus applications in kinematics & electrodynamics, and non-standard problem solving.",
      whoShouldJoin: [
        "Students currently entering Class 11 (2-Year Program)",
        "Class 12 students wanting advanced numerical mastery (1-Year Program)",
        "Repeaters aiming to boost Physics percentile from 90 to 99.9+"
      ],
      duration: "1 Year / 2 Years",
      teachingMethod: "Deep concept derivations, daily problem sheets (DPPs), weekly Advanced pattern test series, personal error ledger review.",
      modes: ["Offline (Nellore)", "Online Live"],
      batchSize: "Max 15–20 per batch",
      curriculum: ["Mechanics & Gravitation", "Thermodynamics & Waves", "Electromagnetism & Optics", "Modern & Quantum Physics"]
    },
    {
      id: "jee-main",
      title: "IIT-JEE Main Physics",
      badge: "High Accuracy",
      subtitle: "Precision, Speed & Conceptual Mastery",
      overview: "Built to achieve 99+ percentile in NTA JEE Main Physics. Emphasizes rapid question recognition, zero-error calculations, and complete coverage of NCERT & exemplar concepts.",
      whoShouldJoin: [
        "Class 11 & 12 students targeting high JEE Main scores",
        "Aspirants seeking strong speed and accuracy techniques",
        "Students wanting systematic chapter-by-chapter problem solving"
      ],
      duration: "1 Year / 2 Years",
      teachingMethod: "Concept summary charts, formula intuition, timer-based mock tests, individual weakness diagnosis.",
      modes: ["Offline (Nellore)", "Online Live"],
      batchSize: "Max 15–20 per batch",
      curriculum: ["Complete NCERT Physics", "Past 15 Years NTA Paper Analysis", "Formula Intuition Modules"]
    },
    {
      id: "neet-physics",
      title: "NEET Medical Physics",
      badge: "Concept & Speed",
      subtitle: "Targeting 170+ / 180 Marks in Medical Entrance",
      overview: "Physics is often the rank-decider for medical aspirants. We eliminate Physics anxiety by teaching intuitive visual techniques, short derivations, and high-speed accuracy methods.",
      whoShouldJoin: [
        "Class 11 & 12 NEET Medical Aspirants",
        "Long-term Repeater / Dropper Batch Students",
        "Students looking to conquer Physics fear with calm step-by-step guidance"
      ],
      duration: "1 Year / 2 Years / Repeater",
      teachingMethod: "Visual physics diagrams, step-by-step numerical simplification, 45-question timed NEET mocks, individual error correction.",
      modes: ["Offline (Nellore)", "Online Live"],
      batchSize: "Max 15–20 per batch",
      curriculum: ["Mechanics & Heat", "Electricity & Magnetism", "Optics & Atom Models", "NCERT Exemplar Special Sessions"]
    },
    {
      id: "bitsat-physics",
      title: "BITSAT & Speed Entrance Physics",
      badge: "Rapid Precision",
      subtitle: "High-Speed Numerical Application & Logical Agility",
      overview: "Tailored specifically for BITS Pilani entrance requirements where speed and accuracy are paramount. Trains students to solve 30+ Physics questions in 45 minutes flawlessly.",
      whoShouldJoin: [
        "Class 12 students preparing for BITSAT & State CETs",
        "JEE aspirants looking for a dedicated speed-polishing module"
      ],
      duration: "6 Months / Crash Module",
      teachingMethod: "Speed trick verification, computer-based test simulation, topic-wise time budgeting strategy.",
      modes: ["Offline (Nellore)", "Online Live"],
      batchSize: "Max 15–20 per batch",
      curriculum: ["Formula Context Maps", "BITSAT Pattern Mocks", "Speed-Accuracy Balancing"]
    },
    {
      id: "competitive-physics",
      title: "Competitive Physics Foundation",
      badge: "Class 11 & 12 Boards + Olympiads",
      subtitle: "Strong Fundamental Base & Analytical Thinking",
      overview: "For students wanting rock-solid Physics fundamentals alongside state board / CBSE excellence and Olympiad preparedness. Establishes deep conceptual clarity early on.",
      whoShouldJoin: [
        "Class 11 students wanting an early head start",
        "Students preparing for Physics Olympiads (NSEP)",
        "Parents seeking personal academic mentoring for their child"
      ],
      duration: "1 Academic Year",
      teachingMethod: "First-principles derivations, experimental visualization, structured homework feedback.",
      modes: ["Offline (Nellore)", "Online Live"],
      batchSize: "Max 15–20 per batch",
      curriculum: ["Basic Mathematics for Physics", "Vector Calculus Fundamentals", "Classical Mechanics"]
    }
  ];

  return (
    <section id="courses" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
              Academic Offerings
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
              Specialized Physics Programs
            </h2>
            <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
              Every program is strictly focused on Physics only, taught personally by Ranganath Dharmavaram in small, highly attentive batches.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[var(--bg-surface)] px-4 py-2.5 rounded-md border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--bg-academic-navy)] uppercase tracking-[0.1em]">
            <IconBuilding size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <span>Offline Classes in Nellore</span>
            <span className="text-[var(--border-subtle)]">|</span>
            <IconLaptop size={16} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <span>Online Live Classes</span>
          </div>
        </div>

        {/* Editorial Course Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Featured Program: JEE Advanced (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md p-8 sm:p-10 flex flex-col justify-between shadow-xs border border-[var(--bg-academic-navy)] relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm">
                  {courseList[0].badge}
                </span>
                <span className="text-xs text-[var(--accent-gold)] font-mono">
                  {courseList[0].duration}
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl text-white leading-tight mb-2 font-normal">
                {courseList[0].title}
              </h3>
              <p className="text-xs text-[var(--accent-gold)] font-mono font-bold uppercase tracking-[0.14em] mb-4">
                {courseList[0].subtitle}
              </p>
              <p className="font-body text-sm text-[var(--text-light)]/80 leading-relaxed mb-6 max-prose-copy">
                {courseList[0].overview}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-mono text-[var(--text-light)]/70 border-t border-white/10 pt-4">
                <div>
                  <span className="block text-[var(--accent-gold)] font-bold">Modes:</span>
                  <span>{courseList[0].modes.join(" & ")}</span>
                </div>
                <div>
                  <span className="block text-[var(--accent-gold)] font-bold">Capacity:</span>
                  <span>{courseList[0].batchSize}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedCourse(courseList[0])}
                className="text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--accent-gold)] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Full Syllabus & Details</span>
                <IconArrowRight size={14} className="text-[var(--accent-gold)]" strokeWidth={1.75} />
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-4 py-2 rounded-sm bg-[var(--accent-primary)] text-white text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Secondary Featured Program: NEET Physics (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--bg-surface)] text-[var(--text-main)] rounded-md p-8 flex flex-col justify-between border border-[var(--border-subtle)] shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm">
                  {courseList[2].badge}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {courseList[2].duration}
                </span>
              </div>

              <h3 className="font-heading text-3xl text-[var(--bg-academic-navy)] leading-tight mb-2 font-normal">
                {courseList[2].title}
              </h3>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.14em] text-[var(--accent-primary)] mb-3">
                {courseList[2].subtitle}
              </p>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-prose-copy">
                {courseList[2].overview}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <button
                onClick={() => setSelectedCourse(courseList[2])}
                className="text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--bg-academic-navy)] hover:text-[var(--accent-primary)] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Details</span>
                <IconArrowRight size={14} strokeWidth={1.75} />
              </button>
              <button
                onClick={onOpenCounselling}
                className="px-4 py-2 rounded-sm bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--bg-academic-navy-subtle)] transition-colors cursor-pointer"
              >
                Enquire
              </button>
            </div>
          </div>

          {/* Bottom 3 Courses (3 columns) */}
          {courseList.filter(c => c.id !== "jee-advanced" && c.id !== "neet-physics").map((course) => (
            <div
              key={course.id}
              className="lg:col-span-4 bg-[var(--bg-surface)] rounded-md p-6 border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[var(--accent-primary)] uppercase tracking-[0.15em]">
                    {course.badge}
                  </span>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    {course.duration}
                  </span>
                </div>

                <h3 className="font-heading text-2xl text-[var(--bg-academic-navy)] leading-tight mb-2 font-normal">
                  {course.title}
                </h3>
                <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed mb-4 max-prose-copy">
                  {course.overview}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="text-xs font-mono font-bold uppercase tracking-[0.12em] text-[var(--bg-academic-navy)] hover:text-[var(--accent-primary)] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Syllabus</span>
                  <IconArrowRight size={14} strokeWidth={1.75} />
                </button>
                <button
                  onClick={onOpenCounselling}
                  className="px-3 py-1.5 rounded-sm border border-[var(--bg-academic-navy)] text-[var(--bg-academic-navy)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--bg-academic-navy)] hover:text-white transition-colors cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenCounselling={onOpenCounselling}
      />
    </section>
  );
}
