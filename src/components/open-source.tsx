"use client";

import { useI18n } from "@/i18n/config";
import { Reveal, Magnetic } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";
import { LINKS } from "@/constants";

export default function OpenSource() {
  const { t, dir } = useI18n();

  return (
    <section className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Background Soft Glow */}
      <div className="gradient-orb" style={{ width: "500px", height: "500px", background: "rgba(8,132,239,0.03)", top: "10%", left: "10%" }} />

      <div className="section-content mx-auto max-w-4xl text-center">
        
        {/* SMALL FLOATING BADGE */}
        <div className="flex justify-center mb-6">
          <Reveal direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted backdrop-blur-sm">
              <svg className="h-4 w-4 text-foreground hover:scale-115 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>{t.openSource.badge}</span>
            </div>
          </Reveal>
        </div>

        {/* HEADLINE */}
        <Reveal direction="up" delay={0.2}>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.openSource.heading}
          </h2>
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal direction="up" delay={0.3}>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.openSource.description}
          </p>
        </Reveal>

        {/* GITHUB CTA (MAGNETIC & SPRING ANIMATED) */}
        <Reveal direction="up" delay={0.4}>
          <div className="flex justify-center">
            <Magnetic range={30} strength={0.3}>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-card/60 px-8 text-sm font-semibold text-foreground/90 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card-hover hover:text-foreground hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]"
              >
                <motion.svg 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-5 w-5 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </motion.svg>
                {t.openSource.cta}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
