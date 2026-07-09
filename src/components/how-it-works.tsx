"use client";

import { useI18n } from "@/i18n/config";
import { Reveal, StaggerContainer, StaggerItem, TiltCard } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";
import { glass } from "@/constants";

function Step({ 
  num, 
  title, 
  desc
}: { 
  num: string; 
  title: string; 
  desc: string;
}) {
  return (
    <StaggerItem direction="up" scale={true}>
      <TiltCard className="w-full" tiltMax={10} scaleOnHover={1.025}>
        <div className={glass.stepHover}>
          
          {/* Step Number Circle */}
          <div className="flex md:w-24 md:justify-center">
            <div className="flex h-16 w-16 items-center justify-center text-center tabular-nums leading-none rounded-2xl border border-primary/20 bg-primary/5 text-2xl font-black text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(8,132,239,0.3)]">
              {num}
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 pb-4">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {desc}
            </p>
          </div>
        </div>
      </TiltCard>
    </StaggerItem>
  );
}

export default function HowItWorks() {
  const { t, dir } = useI18n();

  return (
    <section id="how-it-works" className="relative border-t border-border/50 px-6 py-28" dir={dir}>
      {/* Background radial soft light */}
      <div className="gradient-orb" style={{ width: "500px", height: "500px", background: "rgba(8,132,239,0.03)", top: "20%", left: "-15%" }} />

      <div className="section-content mx-auto max-w-4xl">
        
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <Reveal direction="down" delay={0.1}>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.howItWorks.heading}</h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto max-w-2xl text-base text-muted sm:text-lg">{t.howItWorks.subheading}</p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Animated Connecting Timeline Line */}
          <div className={`absolute top-4 bottom-4 hidden w-0.5 bg-border/40 md:block ${dir === "rtl" ? "right-6" : "left-6"}`}>
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-linear-to-b from-primary via-secondary to-transparent"
            />
          </div>

          {/* Staggered Timeline Steps */}
          <StaggerContainer staggerChildren={0.12}>
            <div className={`space-y-6 ${dir === "rtl" ? "md:pr-12" : "md:pl-12"}`}>
              {t.howItWorks.steps.map((step) => (
                <Step 
                  key={step.num} 
                  num={step.num}
                  title={step.title}
                  desc={step.desc}
                />
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
