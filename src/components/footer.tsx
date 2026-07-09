"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/config";
import { Reveal, Magnetic } from "@/components/ui/motion-primitives";

export default function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer className="border-t border-border/50 px-6 py-10" dir={dir}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        
        {/* Footer Brand Logo */}
        <Reveal direction="right" delay={0.1}>
          <Magnetic range={25} strength={0.2}>
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex h-7 w-7 items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(3,116,230,0.5)]">
                <Image
                  src="/logo.svg"
                  alt="LinkScan Pro Logo"
                  width={28}
                  height={28}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-primary">
                LinkScan Pro
              </span>
            </a>
          </Magnetic>
        </Reveal>

        {/* Footer info text */}
        <Reveal direction="left" delay={0.2}>
          <p className="text-xs tracking-wide text-muted/80">
            {t.footer.text}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
