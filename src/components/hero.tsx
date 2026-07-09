"use client";

import { useI18n } from "@/i18n/config";
import Hero3D from "@/components/hero-3d";
import { Reveal, Magnetic } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";
import { LINKS } from "@/constants";

export default function Hero() {
  const { t, dir } = useI18n();

  return (
    <section 
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-24 pb-16 lg:pt-32" 
      dir={dir}
    >
      {/* GLOWING GRADIENT ORBS */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,132,239,0.12)_0%,transparent_60%)]" />
      <div 
        className="gradient-orb" 
        style={{ width: "600px", height: "600px", background: "rgba(8,132,239,0.08)", top: "-10%", right: "-10%", animationDelay: "0s" }} 
      />
      <div 
        className="gradient-orb" 
        style={{ width: "400px", height: "400px", background: "rgba(16,185,129,0.06)", bottom: "-5%", left: "-5%", animationDelay: "-3s" }} 
      />

      <div className="section-content mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT SIDE: PREMIUM COPY AND CTAS */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-start">
            
            {/* BADGE ANIMATION */}
            <Reveal direction="down" delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                {t.hero.badge}
              </div>
            </Reveal>

            {/* TITLE HERO */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                {t.hero.title}{" "}
                <span className="relative inline-block px-1 pb-6 bg-linear-to-r from-primary via-[#3b9ff5] to-secondary bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                  <motion.span 
                    className="absolute bottom-0 left-1 right-1 h-1 bg-linear-to-r from-primary/50 to-secondary/30 rounded-full"
                    style={{ originX: dir === "rtl" ? 1 : 0 }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                  />
                </span>
              </h1>
            </Reveal>

            {/* SUBTITLE */}
            <Reveal direction="up" delay={0.3}>
              <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
                {t.hero.subtitle}
              </p>
            </Reveal>

            {/* CTAS SECTION */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto">
                {/* PRIMARY MAGNETIC CTA */}
                <Magnetic range={40} strength={0.3}>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-8 text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary-dark shadow-[0_4px_20px_rgba(8,132,239,0.3)] hover:shadow-[0_0_30px_rgba(8,132,239,0.5)]"
                  >
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0-4-4m4 4 4-4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>
                    {t.hero.ctaPrimary}
                  </a>
                </Magnetic>

                {/* SECONDARY MAGNETIC CTA */}
                <Magnetic range={30} strength={0.2}>
                  <a
                    href="#how-it-works"
                    className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-border bg-card/40 px-8 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card-hover"
                  >
                    {t.hero.ctaSecondary}
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE: INTERACTIVE 3D COMPONENT */}
          <div className="flex items-center justify-center lg:col-span-5">
            <Reveal direction="none" delay={0.4} scale={true}>
              <Hero3D />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
