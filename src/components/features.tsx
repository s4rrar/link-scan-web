"use client";

import { useI18n } from "@/i18n/config";
import { StaggerContainer, StaggerItem, TiltCard, Reveal } from "@/components/ui/motion-primitives";
import { glass } from "@/constants";

export default function Features() {
  const { t, dir } = useI18n();

  return (
    <section id="features" className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* GLOWING ORB */}
      <div className="gradient-orb" style={{ width: "400px", height: "400px", background: "rgba(8,132,239,0.04)", top: "10%", right: "-5%" }} />

      <div className="section-content mx-auto max-w-6xl">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center">
          <Reveal direction="down" delay={0.1}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.features.heading}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">
              {t.features.subheading}
            </p>
          </Reveal>
        </div>

        {/* FEATURES GRID CONTAINER WITH STAGGERED ENTRIES */}
        <StaggerContainer staggerChildren={0.06}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f) => (
              <StaggerItem key={f.title} direction="up" scale={true}>
                <TiltCard className="w-full h-full" tiltMax={10} scaleOnHover={1.025}>
                  <div className={`group h-full flex flex-col justify-between rounded-2xl ${glass.card}`}>
                    <div>
                      {/* ICON GLOW */}
                      <div className={glass.iconBox}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      
                      <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {f.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {f.desc}
                      </p>
                    </div>

                    {/* SUBTLE CARD BOTTOMLINE */}
                    <div className="mt-6 h-0.5 w-0 bg-linear-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
