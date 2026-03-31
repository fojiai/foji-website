"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTASection, Footer } from "@/components/cta-footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
