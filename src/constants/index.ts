export const theme = {
  colors: {
    primary: "#0884ef",
    primaryDark: "#0670cc",
    secondary: "#10b981",
    background: "#08090a",
    foreground: "#f8fafc",
    muted: "#8892a4",
    card: "#101218",
    border: "#1e2230",
    cardHover: "#161a26",
  },
  animation: {
    duration: { fast: "150ms", normal: "300ms", slow: "600ms", slower: "1000ms" },
    easing: { default: "cubic-bezier(0.4, 0, 0.2, 1)", spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" },
  },
  layout: {
    maxWidth: "80rem",
    sectionPadding: "py-28",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
  },
} as const;

export const scrollAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
};

export const stagger = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] },
  }),
};

export const LINKS = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.linkscan.org",
  github: "https://github.com/s4rrar/link-scan",
} as const;

