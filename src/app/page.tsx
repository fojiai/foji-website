"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { WhatsAppSection } from "@/components/whatsapp-section";
import { UseCases } from "@/components/use-cases";
import { TrustSecurity } from "@/components/trust-security";
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
      <SocialProof />
      <HowItWorks />
      <Features />
      <WhatsAppSection />
      <UseCases />
      <TrustSecurity />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
