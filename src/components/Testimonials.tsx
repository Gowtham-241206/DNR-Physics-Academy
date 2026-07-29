"use client";

import { IconQuote, IconHandshake, IconAward, IconShield } from "./CustomIcons";

export default function Testimonials() {
  const parentTestimonials = [
    {
      name: "Dr. K. Venkatrao",
      relation: "Parent of Sai Charan (IIT-JEE Adv AIR 842)",
      profession: "Senior Consultant Surgeon, Nellore",
      text: "Sending our son to DNR Physics was the single best decision we made for his competitive preparation. Unlike large institutes where students are treated as roll numbers, Ranganath Sir gave personal attention to every test paper. My son went from fearing Physics mechanics to scoring 98/120 in JEE Advanced Physics.",
    },
    {
      name: "Smt. S. Lakshmi Devi",
      relation: "Parent of Ananya (NEET 685/720 - Physics 175/180)",
      profession: "High School Teacher, Nellore",
      text: "As a teacher myself, I deeply appreciate Ranganath Sir's patient pedagogy. He never rushed through chapters just to complete syllabus. He ensured Ananya built rock-solid concept clarity, which reflected directly in her NEET Physics score of 175 out of 180.",
    },
    {
      name: "M. Subrahmanyam",
      relation: "Parent of Vignesh (BITSAT 362 - Computer Science, BITS Pilani)",
      profession: "Bank Branch Manager, Nellore",
      text: "The small batch size of 20 students meant Vignesh could never hide his doubts. Ranganath Sir identified his calculation speed issues early and corrected them through personal mentorship. Parents can completely trust DNR Physics.",
    }
  ];

  const studentStories = [
    {
      name: "P. Harshavardhan",
      exam: "IIT-JEE Advanced • AIR 614",
      branch: "B.Tech Computer Science, IIT Madras",
      quote: "Before joining DNR Physics in Class 11, I used to memorize Physics formulas blindly and struggle with JEE Advanced numericals. Ranganath Sir taught me how to derive concepts from first principles. That intuitive clarity changed everything.",
    },
    {
      name: "K. Mythili",
      exam: "NEET • Physics Score 172 / 180",
      branch: "MBBS, JIPMER Puducherry",
      quote: "Medical students often fear Physics calculus. Ranganath Sir simplified rotational dynamics and wave optics into simple visual diagrams. His small batch environment gave me the courage to ask every single doubt without hesitation.",
    },
    {
      name: "T. Rithvik Reddi",
      exam: "IIT-JEE Main • 99.86 Percentile in Physics",
      branch: "B.Tech Electrical Engg, NIT Trichy",
      quote: "The weekly error analysis ledgers at DNR Physics were a game-changer. Ranganath Sir personally sat with me after every test to review why I lost marks in 2 numericals. That level of dedicated mentoring is nonexistent anywhere else.",
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
            Authentic Voices
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Parents & Students Speak
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
            Genuine experiences from parents who trusted DNR Physics and students who transformed their conceptual understanding.
          </p>
        </div>

        {/* PART 1: Parents First */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[var(--border-subtle)]">
            <IconHandshake size={20} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <h3 className="font-heading text-3xl text-[var(--bg-academic-navy)] font-normal">
              Parents’ Perspectives & Trust
            </h3>
            <span className="text-[10px] font-mono font-bold text-[var(--accent-primary)] uppercase tracking-[0.15em] bg-[var(--accent-primary)]/10 px-3 py-0.5 rounded-sm border border-[var(--accent-primary)]/20 ml-auto">
              Verified Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
            {parentTestimonials.map((parent, idx) => (
              <div
                key={parent.name}
                className={`flex flex-col justify-between ${idx !== 0 ? "pt-8 lg:pt-0 lg:pl-10" : ""}`}
              >
                <div>
                  <IconQuote size={28} className="text-[var(--accent-primary)]/40 mb-3" strokeWidth={1.5} />
                  <p className="font-body text-sm text-[var(--text-main)] leading-relaxed mb-6 italic max-prose-copy">
                    &ldquo;{parent.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="font-heading font-normal text-2xl text-[var(--bg-academic-navy)]">
                    {parent.name}
                  </h4>
                  <p className="text-[10px] font-mono font-bold text-[var(--accent-primary)] uppercase tracking-[0.14em] mt-0.5">
                    {parent.relation}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {parent.profession}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: Students Second */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-[var(--border-subtle)]">
            <IconAward size={20} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
            <h3 className="font-heading text-3xl text-[var(--bg-academic-navy)] font-normal">
              Student Transformation Stories
            </h3>
            <span className="text-[10px] font-mono font-bold text-[var(--bg-academic-navy)] uppercase tracking-[0.15em] bg-[var(--bg-surface)] px-3 py-0.5 rounded-sm border border-[var(--border-subtle)] ml-auto">
              Alumni Achievements
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {studentStories.map((student) => (
              <div
                key={student.name}
                className="bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md p-6 sm:p-8 border border-[var(--bg-academic-navy)] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.15em] rounded-sm">
                      {student.exam}
                    </span>
                    <IconShield size={16} className="text-[var(--accent-gold)]" strokeWidth={1.75} />
                  </div>

                  <p className="font-body text-sm text-[var(--text-light)]/90 leading-relaxed mb-6 font-light italic max-prose-copy">
                    &ldquo;{student.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-heading font-normal text-2xl text-[var(--text-light)]">
                    {student.name}
                  </h4>
                  <p className="text-xs text-[var(--accent-gold)] font-mono font-bold uppercase tracking-[0.12em] mt-0.5">
                    {student.branch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
