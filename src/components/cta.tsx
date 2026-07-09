"use client";

import { useI18n } from "@/i18n/config";
import { Reveal, Magnetic, TiltCard } from "@/components/ui/motion-primitives";
import { LINKS } from "@/constants";

export default function CTA() {
  const { t, dir } = useI18n();

  return (
    <section id="download" className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Dynamic colorful radial glow background */}
      <div className="gradient-orb" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(8,132,239,0.06) 0%, rgba(16,185,129,0.04) 50%, transparent 100%)", top: "20%", left: "20%" }} />

      <div className="section-content mx-auto max-w-4xl">
        <Reveal direction="none" scale={true} delay={0.1}>
          
          {/* Entire CTA Banner block wrapped in a 3D Tilt Card */}
          <TiltCard className="w-full" tiltMax={4} scaleOnHover={1.01}>
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-linear-to-b from-card/80 to-background/90 p-12 text-center backdrop-blur-md sm:p-16 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7)]">
              
              {/* Abstract futuristic background decorations */}
              <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[24px_24px]" />
              
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                {t.cta.heading}
              </h2>
              
              <p className="mx-auto mb-10 max-w-xl text-base text-muted sm:text-lg leading-relaxed">
                {t.cta.description}
              </p>

              {/* ACTION LINKS WITH MAGNETIC PHYSICS */}
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                
                {/* Download Companion Button (Magnetic) */}
                <Magnetic range={35} strength={0.25}>
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-8 text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary-dark shadow-[0_4px_15px_rgba(8,132,239,0.25)] hover:shadow-[0_0_30px_rgba(8,132,239,0.4)]"
                  >
                    <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0-4-4m4 4 4-4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>
                    {t.cta.primary}
                  </a>
                </Magnetic>

                <span className="text-xs font-bold uppercase tracking-wider text-muted">{t.cta.or}</span>

                {/* Mobile App Button (Magnetic) */}
                <Magnetic range={35} strength={0.25}>
                  <a
                    href={LINKS.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-border bg-card/40 px-8 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card-hover"
                  >
                    {t.cta.secondary}
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </Magnetic>

              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
