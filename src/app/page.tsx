"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyParentsTrust from "@/components/WhyParentsTrust";
import MeetEducator from "@/components/MeetEducator";
import Philosophy from "@/components/Philosophy";
import Courses from "@/components/Courses";
import StudentJourney from "@/components/StudentJourney";
import Textbooks from "@/components/Textbooks";
import ClassroomGallery from "@/components/ClassroomGallery";
import Testimonials from "@/components/Testimonials";
import AdmissionsForm from "@/components/AdmissionsForm";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const scrollToCounselling = () => {
    const el = document.getElementById("admissions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[var(--bg-canvas)]">
      {/* Navigation */}
      <Navbar onOpenCounselling={scrollToCounselling} />

      {/* SECTION 1: Hero */}
      <Hero onOpenCounselling={scrollToCounselling} />

      {/* SECTION 2: Why Parents Trust DNR Physics */}
      <WhyParentsTrust />

      {/* SECTION 3: Meet The Educator (Ranganath Dharmavaram) */}
      <MeetEducator />

      {/* SECTION 4: Teaching Philosophy */}
      <Philosophy />

      {/* SECTION 5: Courses (IIT-JEE, NEET, BITSAT, Foundation) */}
      <Courses onOpenCounselling={scrollToCounselling} />

      {/* SECTION 6: Student Journey */}
      <StudentJourney />

      {/* SECTION 7: Authored Physics Books */}
      <Textbooks />

      {/* SECTION 8: Inside The Classroom Gallery */}
      <ClassroomGallery />

      {/* SECTION 9: Testimonials (Parents first, Students second) */}
      <Testimonials />

      {/* SECTION 10: Admissions & Counselling Form */}
      <AdmissionsForm id="admissions" />

      {/* SECTION 11: Location, Office Hours & Google Maps */}
      <LocationContact />

      {/* SECTION 12: Footer */}
      <Footer />

      {/* Sticky Scroll To Top Button */}
      <ScrollToTop />
    </main>
  );
}

