"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyParentsTrust from "@/components/WhyParentsTrust";
import MeetEducator from "@/components/MeetEducator";
import Philosophy from "@/components/Philosophy";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById("contact") || document.getElementById("location");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-canvas)]">
      {/* Navigation */}
      <Navbar onOpenCounselling={scrollToContact} />

      {/* SECTION 1: Hero Header & Trust Stats */}
      <Hero onOpenCounselling={scrollToContact} />

      {/* SECTION 2: Why Parents Trust DNR Physics (4 Distinct Pillars) */}
      <WhyParentsTrust />

      {/* SECTION 3: Meet The Educator & Authored Textbooks */}
      <MeetEducator />

      {/* SECTION 4: Teaching Philosophy (5-Stage Ascent & Intuition Matrix) */}
      <Philosophy />

      {/* SECTION 5: Specialized Courses (IIT-JEE, NEET, BITSAT, Foundation) */}
      <Courses onOpenCounselling={scrollToContact} />

      {/* SECTION 6: Testimonials & Verified Student Achievements */}
      <Testimonials />

      {/* SECTION 7: Tutor Direct Contact, Office Hours & Interactive Map */}
      <LocationContact />

      {/* SECTION 8: Footer */}
      <Footer />

      {/* Sticky Scroll To Top Button */}
      <ScrollToTop />
    </main>
  );
}
