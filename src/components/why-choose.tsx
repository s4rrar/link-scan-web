"use client";

import { useI18n } from "@/i18n/config";
import { StaggerContainer, StaggerItem, TiltCard, Reveal } from "@/components/ui/motion-primitives";

export default function WhyChoose() {
  const { t, dir } = useI18n();

  return (
    <section className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Background soft glowing orb */}
      <div className="gradient-orb" style={{ width: "450px", height: "450px", background: "rgba(8,132,239,0.03)", top: "15%", right: "-10%" }} />

      <div className="section-content mx-auto max-w-6xl">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <Reveal direction="down" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t.whyChoose.heading}</h2>
          </Reveal>
        </div>

        {/* WHY CHOOSE CARDS GRID */}
        <StaggerContainer staggerChildren={0.06}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyChoose.items.map((item) => (
              <StaggerItem key={item.title} direction="up" scale={true}>
                <TiltCard className="w-full h-full" tiltMax={10} scaleOnHover={1.025}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card/65 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card-hover/90 hover:shadow-[0_20px_50px_rgba(8,132,239,0.06)]">
                    <div>
                      {/* HIGH-TECH ICON CONTAINER WITH GLOW */}
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(8,132,239,0.3)]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                      </div>
                      
                      <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>

                    {/* CARD FOOTLINE ACCENT */}
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
