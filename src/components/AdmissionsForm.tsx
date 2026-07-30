"use client";

import { useState } from "react";
import {
  IconPhone,
  IconCheckCircle,
  IconUser,
  IconShield,
  IconLock,
  IconMapPin,
  IconArrowRight,
} from "./CustomIcons";

interface AdmissionsFormProps {
  id?: string;
}

export default function AdmissionsForm({ id = "admissions" }: AdmissionsFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    studentClass: "Class 11",
    targetExam: "IIT-JEE Advanced",
    mode: "Offline (Nellore Centre)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Access Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--accent-primary)] block">
              Direct Access to Educator
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--bg-academic-navy)] leading-none tracking-tight">
              Book a Free Personal Physics Counselling Session
            </h2>

            <p className="font-body text-base text-[var(--text-muted)] leading-relaxed max-prose-copy">
              We do not employ sales callers or telemarketers. Every counselling request is personally reviewed by <strong className="text-[var(--bg-academic-navy)]">Ranganath Dharmavaram</strong> to assess the student’s learning needs and recommend the exact batch fit.
            </p>

            <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
              <div className="flex items-start gap-3">
                <IconShield size={20} className="text-[var(--accent-primary)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h4 className="font-heading font-normal text-2xl text-[var(--bg-academic-navy)]">
                    Strict Batch Limits (30–40 Students)
                  </h4>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed max-prose-copy">
                    Admissions are strictly on a first-cum-evaluation basis to preserve our small batch individual attention model.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconPhone size={20} className="text-[var(--accent-primary)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h4 className="font-heading font-normal text-2xl text-[var(--bg-academic-navy)]">
                    Direct Phone Line
                  </h4>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5 font-mono">
                    Parents can call the institute office directly at <a href="tel:+919848123456" className="text-[var(--bg-academic-navy)] font-bold underline">+91 98481 23456</a> during office hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
              <span className="font-mono font-bold text-[var(--bg-academic-navy)] uppercase tracking-[0.1em] flex items-center gap-1.5 mb-1">
                <IconMapPin size={14} className="text-[var(--accent-primary)]" strokeWidth={1.75} />
                <span>Institute Address</span>
              </span>
              DNR Physics Coaching Centre, Trunk Road, Near Haranathapuram Junction, Nellore, Andhra Pradesh - 524003.
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[var(--bg-canvas)] rounded-md p-6 sm:p-10 border border-[var(--border-subtle)] shadow-xs w-full max-w-2xl mx-auto lg:max-w-none">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-academic-navy)] text-[var(--accent-gold)] flex items-center justify-center mx-auto shadow-xs">
                    <IconCheckCircle size={40} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-3xl font-normal text-[var(--bg-academic-navy)]">
                    Counselling Request Received
                  </h3>
                  <p className="font-body text-sm text-[var(--text-muted)] max-prose-copy mx-auto leading-relaxed">
                    Thank you, <strong className="text-[var(--bg-academic-navy)]">{formData.name}</strong>. Ranganath Dharmavaram or our senior office administrator will contact you at <strong className="text-[var(--bg-academic-navy)]">{formData.phone}</strong> within 24 hours to confirm your counselling slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 px-6 py-2.5 rounded-sm bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] cursor-pointer hover:bg-[var(--accent-primary)] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading text-3xl font-normal text-[var(--bg-academic-navy)] mb-1">
                      Admissions & Counselling Form
                    </h3>
                    <p className="font-body text-xs text-[var(--text-muted)]">
                      Fill out the details below. We will confirm your preferred timing slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                        Student / Parent Name *
                      </label>
                      <div className="relative">
                        <IconUser size={16} className="text-[var(--text-muted)] absolute left-3.5 top-3.5" strokeWidth={1.75} />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-sm text-[var(--bg-academic-navy)] font-body focus:outline-none focus:border-[var(--bg-academic-navy)] focus:ring-1 focus:ring-[var(--bg-academic-navy)] transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <IconPhone size={16} className="text-[var(--text-muted)] absolute left-3.5 top-3.5" strokeWidth={1.75} />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98480 00000"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-sm text-[var(--bg-academic-navy)] font-mono focus:outline-none focus:border-[var(--bg-academic-navy)] focus:ring-1 focus:ring-[var(--bg-academic-navy)] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {/* Class */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                        Current Class
                      </label>
                      <select
                        value={formData.studentClass}
                        onChange={e => setFormData({ ...formData, studentClass: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-body text-[var(--bg-academic-navy)] focus:outline-none focus:border-[var(--bg-academic-navy)] cursor-pointer"
                      >
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="Repeater / Dropper">Repeater / Dropper</option>
                        <option value="Class 10 (Foundation)">Class 10 (Foundation)</option>
                      </select>
                    </div>

                    {/* Exam Target */}
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                        Target Exam
                      </label>
                      <select
                        value={formData.targetExam}
                        onChange={e => setFormData({ ...formData, targetExam: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-body text-[var(--bg-academic-navy)] focus:outline-none focus:border-[var(--bg-academic-navy)] cursor-pointer"
                      >
                        <option value="IIT-JEE Advanced">IIT-JEE Advanced</option>
                        <option value="IIT-JEE Main">IIT-JEE Main</option>
                        <option value="NEET Medical">NEET Medical</option>
                        <option value="BITSAT">BITSAT</option>
                        <option value="State Competitive">State Competitive</option>
                      </select>
                    </div>

                    {/* Learning Mode */}
                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                        Preferred Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={e => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-body text-[var(--bg-academic-navy)] focus:outline-none focus:border-[var(--bg-academic-navy)] cursor-pointer"
                      >
                        <option value="Offline (Nellore Centre)">Offline (Nellore)</option>
                        <option value="Online Live Interactive">Online Live</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-[var(--bg-academic-navy)] mb-2">
                      Specific Physics Doubt / Note (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific physics topics, test scores, or questions you have..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-body text-[var(--bg-academic-navy)] focus:outline-none focus:border-[var(--bg-academic-navy)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-md bg-[var(--bg-academic-navy)] text-[var(--text-light)] text-xs font-mono font-bold uppercase tracking-[0.12em] hover:bg-[var(--accent-primary)] transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
                  >
                    <span>Book Free Counselling Session</span>
                    <IconArrowRight size={14} className="text-[var(--accent-gold)] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
                  </button>

                  <p className="text-[11px] font-body text-[var(--text-muted)] text-center flex items-center justify-center gap-1.5">
                    <IconLock size={14} className="text-[var(--text-muted)]" strokeWidth={1.5} />
                    <span>We respect your privacy. No marketing calls or spam.</span>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
