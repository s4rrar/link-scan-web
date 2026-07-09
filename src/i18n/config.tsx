"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import en from "./en";
import ar from "./ar";
import he from "./he";
import type { Translations } from "./en";

type Lang = "en" | "ar" | "he";

interface I18nContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Translations;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang") as Lang | null;
  if (stored === "ar" || stored === "en" || stored === "he") return stored;
  return "en";
}

const translations: Record<Lang, Translations> = { en, ar, he };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem("lang", next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ar" : lang === "ar" ? "he" : "en");
  }, [lang, setLang]);

  const dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";
  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, dir, t, setLang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
