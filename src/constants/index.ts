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

export const glass = {
  card: "border border-white/10 dark:border-white/5 bg-card/35 p-6 backdrop-blur-lg transition-all duration-300 hover:border-primary/40 hover:bg-card-hover/45 hover:shadow-[0_20px_50px_rgba(8,132,239,0.12)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]",
  cardSecondary: "border border-white/10 dark:border-white/5 bg-card/35 p-5 backdrop-blur-lg transition-all duration-300 hover:border-secondary/40 hover:bg-card-hover/45 hover:shadow-[0_15px_35px_rgba(16,185,129,0.08)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]",
  badge: "border border-white/10 dark:border-white/5 bg-card/45 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-md shadow-sm",
  pill: "inline-block rounded-full border border-white/10 dark:border-white/5 bg-card/30 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:text-foreground hover:shadow-[0_8px_20px_rgba(8,132,239,0.1)] shadow-sm cursor-default",
  control: "relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 dark:border-white/5 bg-card/25 text-muted transition-all duration-300 hover:border-primary/40 hover:bg-card-hover/30 hover:text-foreground cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary/30 backdrop-blur-md",
  dropdown: "absolute top-full mt-1.5 z-50 min-w-32.5 rounded-xl border border-white/15 dark:border-white/10 bg-card/75 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl",
  banner: "relative overflow-hidden rounded-3xl border border-white/15 dark:border-white/10 bg-linear-to-b from-card/45 to-card/20 p-12 text-center backdrop-blur-xl sm:p-16 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.5)]",
  navbar: "mx-auto flex w-full items-center justify-between transition-all duration-300 max-w-5xl rounded-2xl border border-white/10 dark:border-white/5 bg-card/40 px-6 py-2.5 backdrop-blur-xl shadow-2xl shadow-black/30",
  stepHover: "group relative flex flex-col gap-4 transition-all duration-300 md:flex-row md:gap-8 hover:bg-card-hover/45 p-4 rounded-2xl border border-transparent hover:border-primary/40 hover:backdrop-blur-md hover:shadow-[0_20px_50px_rgba(8,132,239,0.12)]",
  iconBox: "mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(8,132,239,0.3)]",
  
  // 3D & Phone Layout Specific
  phoneContainer: "relative z-10 flex h-75 w-45 flex-col items-center justify-between rounded-[36px] border border-white/15 dark:border-white/10 bg-card/35 p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.05)] backdrop-blur-xl lg:h-95 lg:w-55",
  phoneInnerScreen: "relative flex h-full w-full flex-col items-center overflow-hidden rounded-[26px] bg-background/40 p-3 border border-white/5 backdrop-blur-md",
  cardQR: "absolute left-2 top-[15%] z-20 flex h-22.5 w-32.5 flex-col justify-between rounded-2xl border border-secondary/20 bg-card/40 p-3 shadow-2xl backdrop-blur-lg lg:-left-8.75 lg:h-27.5 lg:w-37.5",
  cardBarcode: "absolute bottom-[10%] right-2 z-30 flex h-25 w-35 flex-col justify-between rounded-2xl border border-primary/20 bg-card/40 p-3 shadow-2xl backdrop-blur-lg lg:-right-8.75 lg:h-30 lg:w-40",

  // Mobile navigation drawer
  mobileMenu: "fixed top-20 left-4 right-4 z-40 rounded-2xl border border-white/10 dark:border-white/5 bg-card/75 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:hidden",

  // Buttons
  btnPrimary: "group relative inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-white/20 [.light_&]:border-primary/25 bg-primary/25 [.light_&]:bg-primary/15 px-8 text-sm font-bold text-white [.light_&]:text-primary backdrop-blur-md transition-all duration-300 hover:bg-primary/35 [.light_&]:hover:bg-primary/25 hover:border-white/30 [.light_&]:hover:border-primary/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_25px_rgba(8,132,239,0.25)] [.light_&]:shadow-[0_8px_20px_rgba(8,132,239,0.08)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_35px_rgba(8,132,239,0.4)] [.light_&]:hover:shadow-[0_12px_30px_rgba(8,132,239,0.18)]",
  btnSecondary: "group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white/15 dark:border-white/10 [.light_&]:border-black/10 bg-white/5 dark:bg-white/5 [.light_&]:bg-black/5 px-8 text-sm font-semibold text-white [.light_&]:text-foreground backdrop-blur-md transition-all duration-300 hover:border-white/30 [.light_&]:hover:border-black/20 hover:bg-white/15 [.light_&]:hover:bg-black/10 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] [.light_&]:hover:shadow-md shadow-sm",
  btnGradient: "flex h-11 items-center justify-center rounded-xl border border-white/20 [.light_&]:border-primary/20 bg-linear-to-r from-primary/25 to-secondary/25 [.light_&]:from-primary/15 [.light_&]:to-secondary/15 hover:from-primary/35 hover:to-secondary/35 [.light_&]:hover:from-primary/25 [.light_&]:hover:to-secondary/25 text-white [.light_&]:text-primary font-bold backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_15px_rgba(8,132,239,0.2)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_25px_rgba(8,132,239,0.35)] transition-all duration-300 active:scale-98",
  btnBadge: "rounded-lg bg-primary/20 [.light_&]:bg-primary/15 border border-white/20 [.light_&]:border-primary/25 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white [.light_&]:text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary/30 [.light_&]:hover:bg-primary/25 hover:border-white/35 [.light_&]:hover:border-primary/45 hover:shadow-[0_0_20px_rgba(8,132,239,0.25)]",
} as const;


