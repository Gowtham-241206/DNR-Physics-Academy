"use client";

import { IconMapPin, IconPhone, IconMessageSquare, IconClock, IconExternalLink } from "./CustomIcons";

export default function LocationContact() {
  return (
    <section id="location" className="py-20 md:py-28 bg-[var(--bg-canvas)] relative border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block mb-2">
            Visit Us In Person
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
            Institute Location & Contact Details
          </h2>
          <p className="mt-3 font-body text-base text-[var(--text-muted)] max-prose-copy">
            Located in the academic heart of Nellore. Parents and students are welcome to visit our counselling office during working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Address Details (5 cols) */}
          <div className="lg:col-span-5 bg-[var(--bg-academic-navy)] text-[var(--text-light)] rounded-md p-8 border border-[var(--bg-academic-navy)] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-3xl font-normal text-white mb-6">
                DNR Physics Coaching Centre
              </h3>

              <div className="space-y-6 text-sm text-[var(--text-light)]/80">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md bg-[var(--accent-primary)]/20 text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/30">
                    <IconMapPin size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-1">
                      Institute Address
                    </span>
                    <p className="font-body leading-relaxed max-prose-copy">
                      DNR Physics Coaching Centre,<br />
                      2nd Floor, Grand Trunk Road,<br />
                      Near Haranathapuram Junction,<br />
                      Nellore, Andhra Pradesh - 524003.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md bg-[var(--accent-primary)]/20 text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/30">
                    <IconPhone size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-1">
                      Direct Phone
                    </span>
                    <p className="leading-relaxed font-mono text-xs">
                      <a href="tel:+919848123456" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                        +91 98481 23456
                      </a>
                      <br />
                      <a href="tel:+918632123456" className="hover:text-[var(--accent-gold)] transition-colors cursor-pointer">
                        +91 86321 23456 (Landline)
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-md bg-[var(--accent-primary)]/20 text-[var(--accent-gold)] flex items-center justify-center shrink-0 border border-[var(--accent-gold)]/30">
                    <IconClock size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-gold)] mb-1">
                      Counselling & Office Hours
                    </span>
                    <p className="font-body leading-relaxed text-xs">
                      Monday – Saturday: 9:00 AM – 7:30 PM<br />
                      Sunday: 10:00 AM – 1:00 PM (By Prior Appointment)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Actions (Call & WhatsApp) */}
            <div className="pt-6 border-t border-white/10 mt-8 grid grid-cols-2 gap-3">
              <a
                href="tel:+919848123456"
                className="py-3 px-4 rounded-md bg-[var(--accent-primary)] text-white text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-hover)] transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconPhone size={16} strokeWidth={1.75} />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919848123456?text=Hello%20Ranganath%20Sir,%20I%20would%20like%20to%20enquire%20about%20DNR%20Physics%20coaching%20batches."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-md bg-[#25D366] text-white text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[#20bd5a] transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconMessageSquare size={16} strokeWidth={1.75} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] rounded-md p-4 border border-[var(--border-subtle)] shadow-xs flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[380px] rounded-md overflow-hidden border border-[var(--border-subtle)]">
              <iframe
                title="DNR Physics Nellore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.342194685165!2d79.9824!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2a259c25625%3A0xa6187b5a1b32d20!2sHaranathapuram%2C%20Nellore%2C%20Andhra%20Pradesh%20524003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />
            </div>

            <div className="mt-4 px-2 flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 font-body text-[var(--bg-academic-navy)]">
                <IconMapPin size={14} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
                <span>Landmark: Near Haranathapuram Junction, Trunk Road, Nellore</span>
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-primary)] hover:underline font-mono font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Open in Maps</span>
                <IconExternalLink size={14} strokeWidth={1.75} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
