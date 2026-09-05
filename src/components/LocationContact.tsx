"use client";

import {
  IconMapPin,
  IconPhone,
  IconWhatsApp,
  IconClock,
  IconExternalLink,
  IconMail,
  IconAward,
  IconShield,
} from "./CustomIcons";

export default function LocationContact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)]">
      {/* Anchor for location links */}
      <div id="location" className="scroll-mt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Contact & Center Location
          </h2>
          <p className="mt-3 font-body text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-prose-copy">
            Reach <strong className="text-[var(--bg-academic-navy)]">Ranganath Dharmavaram</strong> directly for admissions, counselling, or centre visits in Nellore.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Tutor Details & Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-xl p-8 border border-[var(--bg-academic-navy)] shadow-xs flex flex-col justify-between">
            <div>
              {/* Tutor Header Card */}
              <div className="pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[var(--accent-gold)] font-bold">
                    Direct Faculty Contact
                  </span>
                  <span className="px-2.5 py-0.5 bg-[var(--accent-primary)] text-white text-[10px] font-mono font-bold uppercase tracking-[0.1em] rounded-sm">
                    Teaching Since 1989
                  </span>
                </div>
                <h3 className="font-heading text-3xl font-normal text-white leading-tight">
                  Ranganath Dharmavaram
                </h3>
                <p className="text-xs text-[var(--text-light)]/70 font-mono mt-1">
                  Senior Physics Educator & Author
                </p>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-5 text-sm text-[var(--text-light)]/85 font-body">
                
                {/* Direct Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/50 mt-0.5">
                    <IconPhone size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-0.5">
                      Direct Mobile / WhatsApp
                    </span>
                    <p className="font-mono text-sm">
                      <a href="tel:+919848123456" className="hover:text-[var(--accent-gold)] text-white font-bold transition-colors">
                        +91 98481 23456
                      </a>
                    </p>
                    <p className="font-mono text-xs text-[var(--text-light)]/60 mt-0.5">
                      Landline: <a href="tel:+918632123456" className="hover:text-[var(--accent-gold)] transition-colors">+91 86321 23456</a>
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/50 mt-0.5">
                    <IconMail size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-0.5">
                      Academic Email
                    </span>
                    <p className="font-mono text-xs text-white">
                      <a href="mailto:dnrphysicsnellore@gmail.com" className="hover:text-[var(--accent-gold)] transition-colors">
                        dnrphysicsnellore@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Center Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/50 mt-0.5">
                    <IconMapPin size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-0.5">
                      Coaching Center Address
                    </span>
                    <p className="text-xs leading-relaxed text-[var(--text-light)]/90">
                      DNR Physics Academy,<br />
                      king's court avenue, 23-4-120, fifth cross, near Anil Gardens, Srihari Nagar, Magunta Layout, Nellore, Andhra Pradesh 524003
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/50 mt-0.5">
                    <IconClock size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-0.5">
                      Counselling & Visiting Hours
                    </span>
                    <p className="text-xs leading-relaxed text-[var(--text-light)]/80 font-mono">
                      Monday – Saturday: 9:00 AM – 7:30 PM<br />
                      Sunday: 10:00 AM – 1:00 PM (Prior appointment)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action Dial / WhatsApp CTAs */}
            <div className="pt-6 border-t border-white/10 mt-8 grid grid-cols-2 gap-2.5 sm:gap-3">
              <a
                href="tel:+919848123456"
                className="py-3 px-2 sm:px-4 rounded-md bg-[var(--accent-primary)] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.06em] sm:tracking-[0.12em] hover:bg-[var(--accent-hover)] transition-colors text-center flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
              >
                <IconPhone size={15} className="shrink-0" strokeWidth={1.75} />
                <span>Call Tutor</span>
              </a>

              <a
                href="https://wa.me/919848123456?text=Hello%20Ranganath%20Sir,%20I%20would%20like%20to%20enquire%20about%20DNR%20Physics%20coaching%20batches."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-2 sm:px-4 rounded-md bg-[#25D366] text-white text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.06em] sm:tracking-[0.12em] hover:bg-[#20bd5a] transition-colors text-center flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
              >
                <IconWhatsApp size={15} className="shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] rounded-md p-4 border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[420px] rounded-md overflow-hidden border border-[var(--border-subtle)]">
              <iframe
                title="DNR Physics Nellore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.342194685165!2d79.9824!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2a259c25625%3A0xa6187b5a1b32d20!2sHaranathapuram%2C%20Nellore%2C%20Andhra%20Pradesh%20524003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[420px]"
              />
            </div>

            <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 font-body text-[var(--bg-academic-navy)]">
                <IconMapPin size={14} className="text-[var(--accent-primary)] shrink-0" strokeWidth={1.75} />
                <span>Landmark: Near Haranathapuram Junction, Trunk Road, Nellore</span>
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-primary)] hover:underline font-mono font-bold flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <IconExternalLink size={14} strokeWidth={1.75} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
