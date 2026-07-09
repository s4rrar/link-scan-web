"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/i18n/config";
import { motion, AnimatePresence } from "framer-motion";
import { glass } from "@/constants";

export default function LanguageSwitcher() {
  const { lang, dir, setLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", name: "English", display: "EN" },
    { code: "ar", name: "العربية", display: "ع" },
    { code: "he", name: "עברית", display: "עب" },
  ] as const;

  const currentLanguage = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${glass.control} px-3 py-1.5 text-xs text-foreground/80 w-auto h-auto flex items-center gap-1.5 shadow-sm`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-bold tracking-wider">{currentLanguage.display}</span>
        <svg
          className={`h-3 w-3 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`${glass.dropdown} ${
              dir === "rtl" ? "left-0 origin-top-left" : "right-0 origin-top-right"
            }`}
          >
            <div className="flex flex-col gap-0.5">
              {languages.map((item) => {
                const isSelected = item.code === lang;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-muted hover:bg-card-hover hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.name}</span>
                    </div>
                    {isSelected && (
                      <svg
                        className="h-3.5 w-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
