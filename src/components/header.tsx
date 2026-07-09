"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/config";
import { Magnetic } from "@/components/ui/motion-primitives";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/language-switcher";
import ThemeToggle from "@/components/theme-toggle";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/40 bg-background/80 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6" dir={dir}>
          
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
                href="#download"
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
            {/* Quick Language Dropdown on Mobile */}
            <LanguageSwitcher />

            {/* Theme Toggle on Mobile */}
            <ThemeToggle />

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-foreground rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-5 bg-foreground rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-foreground rounded-full"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl sm:hidden"
          >
            <nav className="flex flex-col gap-5 text-center">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-base font-semibold text-muted transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-border/60 my-2" />
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-background shadow-lg"
              >
                {t.nav.download}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
