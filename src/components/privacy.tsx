"use client";

import { useI18n } from "@/i18n/config";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";
import { glass } from "@/constants";

export default function Privacy() {
  const { t, dir } = useI18n();

  return (
    <section id="privacy" className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Background Soft Glow */}
      <div className="gradient-orb" style={{ width: "450px", height: "450px", background: "rgba(16,185,129,0.03)", bottom: "5%", right: "5%" }} />

      <div className="section-content mx-auto max-w-4xl">
        
        {/* HEADING REVEALS */}
        <div className="mb-16 text-center">
          <Reveal direction="down" delay={0.1}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.privacy.heading}</h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">{t.privacy.subheading}</p>
          </Reveal>
        </div>

        {/* SECURITY AND PRIVACY STATS GRID */}
        <StaggerContainer staggerChildren={0.06}>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.privacy.items.map((item) => (
              <StaggerItem key={item} direction="up" scale={true}>
                <div className={`group flex items-start gap-4 rounded-2xl ${glass.cardSecondary}`}>
                  
                  {/* Bouncy animated green checkmark */}
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-background"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>

                  <span className="text-sm font-semibold leading-relaxed text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* SECURITY FOOTNOTE DECAL */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-12 flex justify-center">
            <div className={`inline-flex items-center gap-3 rounded-2xl ${glass.badge} px-5 py-3`}>
              <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span>{t.privacy.footnote}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
