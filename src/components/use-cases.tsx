"use client";

import { useI18n } from "@/i18n/config";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";

export default function UseCases() {
  const { t, dir } = useI18n();

  return (
    <section className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Background Soft Blue Light */}
      <div className="gradient-orb" style={{ width: "400px", height: "400px", background: "rgba(8,132,239,0.03)", bottom: "10%", left: "5%" }} />

      <div className="section-content mx-auto max-w-5xl">
        
        {/* HEADING DETAILS */}
        <div className="mb-16 text-center">
          <Reveal direction="down" delay={0.1}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.useCases.heading}</h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">{t.useCases.subheading}</p>
          </Reveal>
        </div>

        {/* CLOUD OF USE CASE TAGS WITH SPRINGS */}
        <StaggerContainer staggerChildren={0.03}>
          <div className="flex flex-wrap justify-center gap-3.5">
            {t.useCases.items.map((item) => (
              <StaggerItem key={item} direction="up" scale={true}>
                <motion.span
                  whileHover={{ 
                    scale: 1.06, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(8, 132, 239, 0.15)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="inline-block rounded-full border border-border/70 bg-card/50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground cursor-default"
                >
                  {item}
                </motion.span>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
