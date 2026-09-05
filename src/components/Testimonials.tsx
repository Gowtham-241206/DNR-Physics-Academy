"use client";

import { IconQuote, IconHandshake, IconAward, IconShield, IconBuilding, IconStar } from "./CustomIcons";

export default function Testimonials() {
  const institutionalEndorsement = {
    quote: [
      "It is both a privilege and a matter of great pride to recognize the invaluable contribution of Mr. D. N. Ranganath Rao to Rainbow, one of the fastest growing institutions in Nellore. Over the past three years, he has brought exceptional academic rigour, remarkable clarity, and a rare depth of insight into the teaching of Physics for our IIT–JEE aspirants.",
      "His distinctive ability to deconstruct complex concepts into lucid and engaging learning experiences has consistently empowered students to excel. His influence extends far beyond the classroom—his mentorship has shaped many of our senior students who today stand as part of our accomplished alumni, carrying forward the legacy of excellence he has helped build.",
      "With an association spanning over two decades, his journey stands as a testament to unwavering integrity, intellectual brilliance, and an enduring passion for education. He is not merely a faculty member, but a transformative force who inspires, mentors and elevates every learner he engages with.",
      "Rainbow is truly enriched by his presence."
    ],
    name: "Mrs Padma Subrahmanyam",
    title: "Director",
    institution: "Rainbow School, Nellore"
  };

  const holisticMentorship = {
    name: "Parent of Physics Student",
    relation: "Holistic Mentorship",
    profession: "Endorsement of Academic & Moral Foundations",
    text: "My son had the privilege of taking physics coaching under Ranganath whose erudition and integrity have always set a benchmark for excellence. His vision of an educational institution that blends rigorous academics with strong moral and ethical foundations is both timely and inspiring. I’ve witnessed firsthand his ability to nurture curiosity while instilling values like empathy, responsibility, and respect. Any student who walks through those doors will benefit from a learning environment that shapes not just bright minds, but also compassionate, principled individuals. I wholeheartedly endorse his mission and look forward to seeing this institution become a beacon of holistic education.",
  };

  const googleReviews = [
    {
      name: "Dr. Sashibhushan Reddy (Sasi Reddy)",
      tag: "EAMCET 2005 • State 8th Rank",
      role: "Orthopedic Surgeon, Sashi Ortho & Multispeciality Hospital, Piler",
      highlight: true,
      text: "Great physics lecturer DN Ranganath sir... I am Dr Sashibhushan Reddy orthopedic surgeon running Sashi Ortho and multispeciality hospital in Piler. I got 8th rank with top marks in physics in EAMCET 2005.. it's only because of DNR sir..",
    },
    {
      name: "Dr. Bhanu Prakash",
      tag: "Medical Entrance Achiever",
      role: "Dental Surgeon",
      highlight: true,
      text: "Became successful dental surgeon bcoz of ur physics sir tq very much . I can recommend any student whoever interested to be a part of this academy for bright future.",
    },
    {
      name: "Vyshnavi K",
      tag: "Competitive Exam Physics",
      role: "Competitive Exam Aspirant",
      highlight: false,
      text: "Best training for physics is given here especially for competitive exams. Concepts are explained in a very clear manner. Expertise of Sir shines through...",
    },
    {
      name: "Charan Kanduri",
      tag: "Exam Environment",
      role: "Physics Student",
      highlight: false,
      text: "DNR physics Academy offers best environment to learn physics and guides to crack competative exams with ease.",
    },
    {
      name: "Nithyasree Karanam",
      tag: "Physics Simplified",
      role: "Student Review",
      highlight: false,
      text: "A really wonderful teacher who makes physics very simplified and easy to understand.",
    },
    {
      name: "Sid Reddy",
      tag: "Conceptual Clarity",
      role: "Alumni Review",
      highlight: false,
      text: "This place redefines physics :)",
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Institutional Trust & Verified Reviews
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
            Genuine reflections from school leadership, parents, alumni doctors, and students on over 35 years of conceptual teaching.
          </p>
        </div>

        {/* 1. FEATURED: Institutional Recommendation from Rainbow School */}
        <div className="mb-12">
          <div className="bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-xl p-8 sm:p-12 border border-[var(--bg-academic-navy)] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
              <IconQuote size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-primary)] text-white text-[11px] font-mono font-bold uppercase tracking-[0.12em] rounded-sm">
                  <IconBuilding size={14} strokeWidth={1.75} />
                  <span>Institutional Endorsement</span>
                </div>
                <span className="text-xs font-mono text-[var(--accent-gold)]">
                  Association Over Two Decades
                </span>
              </div>

              <div className="space-y-4 max-w-4xl text-sm sm:text-base font-body text-[var(--text-light)]/95 leading-relaxed italic">
                {institutionalEndorsement.quote.map((p, i) => (
                  <p key={i}>
                    {i === 0 ? `“${p}` : p}
                    {i === institutionalEndorsement.quote.length - 1 ? '”' : ''}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-normal text-2xl sm:text-3xl text-white">
                    {institutionalEndorsement.name}
                  </h4>
                  <p className="text-xs font-mono text-[var(--accent-gold)] mt-0.5">
                    {institutionalEndorsement.title} • {institutionalEndorsement.institution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. FEATURED: Parent Endorsement */}
        <div className="mb-16">
          <div className="grid overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-md lg:grid-cols-12">
            
            {/* 2-Column Content Grid */}
            <div className="contents">
              
              {/* Left Column: Testimonial & Quote (7 cols) */}
              <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-[var(--bg-academic-navy)] px-7 py-8 text-[var(--text-light)] sm:px-10 sm:py-11 lg:col-span-7">
                <IconQuote size={210} strokeWidth={1} className="pointer-events-none absolute -right-10 -top-9 text-white/[0.07]" />
                <div>
                  <div className="relative inline-flex items-center gap-2 border border-[var(--accent-gold)]/40 bg-white/[0.06] px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--accent-gold)]">
                    <IconHandshake size={14} strokeWidth={1.6} />
                    <span>
                      Parent perspective
                    </span>
                  </div>

                  <p className="relative mt-8 max-w-2xl font-heading text-3xl leading-[1.08] text-white sm:text-4xl lg:text-[2.7rem]">
                    &ldquo;A learning environment that shapes bright minds and principled individuals.&rdquo;
                  </p>
                  <div className="relative mt-7 h-px w-16 bg-[var(--accent-primary)]" />
                  <p className="relative mt-7 max-w-2xl font-body text-sm leading-7 text-white/75 sm:text-[15px]">
                    {holisticMentorship.text}
                  </p>
                </div>

                <div className="relative mt-10 flex items-end justify-between gap-4 border-t border-white/15 pt-5">
                  <div>
                  <h4 className="font-heading text-2xl font-normal text-white">
                    {holisticMentorship.name}
                  </h4>
                  <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.08em] text-[var(--accent-gold)]">
                    {holisticMentorship.relation}
                  </p>
                  </div>
                </div>
              </div>

              {/* Right Column: What stands out */}
              <aside className="relative flex flex-col bg-[var(--bg-surface-elevated)] px-7 py-8 sm:px-10 sm:py-11 lg:col-span-5">
                <div className="absolute left-0 top-0 h-1 w-full bg-[var(--accent-primary)] lg:bottom-0 lg:top-auto lg:h-full lg:w-1" />
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)]">What stands out</p>
                  <h3 className="mt-3 max-w-sm font-heading text-3xl leading-none text-[var(--bg-academic-navy)] sm:text-4xl">Education with a wider purpose.</h3>
                  <p className="mt-4 max-w-md font-body text-sm leading-6 text-[var(--text-muted)]">The qualities this parent sees in a learning experience built for the long term.</p>
                </div>
                <div className="mt-8 divide-y divide-[var(--border-accent)]/70 border-y border-[var(--border-accent)]/70">
                  <div className="flex gap-4 py-5">
                    <div className="flex h-8 w-8 rounded-full bg-[var(--bg-surface)] items-center justify-center shrink-0 shadow-sm">
                      <IconAward size={16} className="text-[var(--accent-primary)]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h5 className="font-heading text-xl text-[var(--bg-academic-navy)] font-normal leading-none">
                        Academic depth
                      </h5>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-2 leading-5">
                        Rigour that helps students understand the why behind every concept.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 py-5">
                    <div className="flex h-8 w-8 rounded-full bg-[var(--bg-surface)] items-center justify-center shrink-0 shadow-sm">
                      <IconHandshake size={16} className="text-[var(--accent-primary)]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h5 className="font-heading text-xl text-[var(--bg-academic-navy)] font-normal leading-none">
                        Character matters
                      </h5>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-2 leading-5">
                        A learning culture rooted in empathy, responsibility, and respect.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 py-5">
                    <div className="flex h-8 w-8 rounded-full bg-[var(--bg-surface)] items-center justify-center shrink-0 shadow-sm">
                      <IconShield size={16} className="text-[var(--accent-primary)]" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h5 className="font-heading text-xl text-[var(--bg-academic-navy)] font-normal leading-none">
                        Guidance with care
                      </h5>
                      <p className="font-body text-xs text-[var(--text-muted)] mt-2 leading-5">
                        Mentorship designed to shape confident learners and grounded people.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  A Beacon of Holistic Education • DNR Physics
                </div>
              </aside>

            </div>
          </div>
        </div>

        {/* 3. Verified Alumni & Student Reviews */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-3 border-b border-[var(--border-subtle)]">
            <h3 className="font-heading text-3xl text-[var(--bg-academic-navy)] font-normal">
              Alumni Doctors & Student Reviews
            </h3>
            
            <div className="inline-flex items-center gap-2 bg-[var(--bg-surface)] px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)]">
              <div className="flex items-center text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={13} />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-[var(--bg-academic-navy)]">
                5.0 Google Rating
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review) => (
              <div
                key={review.name}
                className={`rounded-xl p-6 border transition-all flex flex-col justify-between ${
                  review.highlight
                    ? "bg-[var(--bg-academic-navy)] text-white border-2 border-[var(--accent-gold)]/60 shadow-md ring-1 ring-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)]"
                    : "bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/50 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} size={review.highlight ? 13 : 12} />
                      ))}
                    </div>
                    {review.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 text-[10px] font-mono font-bold uppercase tracking-[0.1em]">
                        Alumni Doctor
                      </span>
                    )}
                  </div>

                  <p className={`font-body text-sm leading-relaxed mb-6 italic ${
                    review.highlight ? "text-white/95 font-light" : "text-[var(--text-main)]"
                  }`}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className={`pt-4 border-t ${review.highlight ? "border-white/15" : "border-[var(--border-subtle)]"}`}>
                  <h4 className={`font-heading font-normal text-lg ${review.highlight ? "text-white" : "text-[var(--bg-academic-navy)]"}`}>
                    {review.name}
                  </h4>
                  <p className={`text-xs mt-0.5 ${
                    review.highlight ? "text-[var(--accent-gold)] font-mono font-bold" : "text-[var(--text-muted)] font-body"
                  }`}>
                    {review.role}
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
