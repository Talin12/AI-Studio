/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingBag, Menu, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { LogoCloud } from "@/src/components/ui/logo-cloud-3";
import { Hero } from "@/src/components/hero";
import { Navbar } from "@/src/components/navbar";
import { AboutUs } from "@/src/components/about-us";
import { Features } from "@/src/components/features";
import { UseCases } from "@/src/components/use-cases";
import { HowItWorks } from "@/src/components/how-it-works";
import { Comparison } from "@/src/components/comparison";
import { Testimonials } from "@/src/components/testimonials";
import { Pricing } from "@/src/components/pricing";
import { FAQ } from "@/src/components/faq";
import { Footer } from "@/src/components/footer";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub Logo" },
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude AI Logo" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk Logo" },
];

export default function App() {
  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Hero>
        <Navbar />
      </Hero>

      {/* Logos Section - on white background */}
      <section className="relative mx-auto max-w-3xl pt-8 pb-16 md:pt-12 md:pb-24 z-10 bg-white">
        <h2 className="mb-5 text-center font-medium text-black text-xl tracking-tight md:text-3xl">
          <span className="text-black/60">Trusted by experts.</span>
          <br />
          <span className="font-semibold text-black">Used by the leaders.</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} className="brightness-0 opacity-60" />

        <div className="mt-5 h-px bg-black/10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>

      <AboutUs />
      <Features />
      <UseCases />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}


