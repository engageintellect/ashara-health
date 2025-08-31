"use client";

import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import Conditions from "@/components/sections/Conditions";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Memberships from "@/components/sections/Memberships";
import Faq from "@/components/sections/Faq";
import Clinic from "@/components/sections/Clinic";
import Contact from "@/components/sections/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header id="home" role="banner" />
      <main id="main" className="relative bg-white dark:bg-stone-900">
        <Hero />
        <Vision />
        <Conditions />
        <Approach />
        <Services />
        <Testimonials />
        <Memberships />
        <Faq />
        <Clinic />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
