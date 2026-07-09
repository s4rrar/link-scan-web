"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/config";
import { Magnetic } from "@/components/ui/motion-primitives";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggle from "@/components/theme-toggle";
import { LINKS } from "@/constants";

export default function Header() {
  const { t, dir } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to trigger floating bar styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#features", label: t.nav.features },
    { href: "#privacy", label: t.nav.privacy },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-3 px-4" : "py-5 px-6"
        }`}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between transition-all duration-300 ${
            scrolled
              ? "max-w-5xl rounded-2xl border border-border/50 bg-background/80 px-6 py-2.5 backdrop-blur-xl shadow-2xl shadow-black/40"
              : "max-w-6xl bg-transparent border border-transparent py-0"
          }`}
          dir={dir}
        >
          
          {/* LOGO */}
          <Magnetic range={30} strength={0.2}>
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex h-9 w-9 items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(3,116,230,0.6)]">
                <Image
                  src="/logo.svg"
                  alt="LinkScan Pro Logo"
                  width={36}
                  height={36}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                LinkScan Pro
              </span>
            </a>
          </Magnetic>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 text-sm text-muted sm:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 transition-colors duration-300 hover:text-foreground group text-xs font-semibold uppercase tracking-wider"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* DOWNLOAD CTA */}
            <Magnetic range={25} strength={0.2}>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-background hover:shadow-[0_0_20px_rgba(8,132,239,0.3)]"
              >
                {t.nav.download}
              </a>
            </Magnetic>

            {/* LANGUAGE CHANGER */}
            <LanguageSwitcher />

            {/* THEME TOGGLE */}
            <ThemeToggle />
          </nav>

          {/* MOBILE NAVIGATION BUTTON */}
          <div className="flex items-center gap-3 sm:hidden">
            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none text-foreground"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-current rounded-full"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl border border-border bg-background/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:hidden"
          >
            <nav className="flex flex-col gap-4 text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="py-2 text-base font-semibold text-muted transition-colors duration-300 hover:text-primary active:text-primary"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.25 }}
                className="border-border/60 my-1"
              />
              
              {/* Language & Theme Controls inside Mobile Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-6 py-1"
              >
                <LanguageSwitcher />
                <ThemeToggle />
              </motion.div>

              <motion.hr
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.35 }}
                className="border-border/60 my-1"
              />
              
              <motion.a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex h-11 items-center justify-center rounded-xl bg-linear-to-r from-primary to-secondary text-sm font-semibold text-background shadow-[0_4px_15px_rgba(8,132,239,0.35)] transition-all duration-300 hover:brightness-110 active:scale-98"
              >
                <svg className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0-4-4m4 4 4-4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                </svg>
                {t.nav.download}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
