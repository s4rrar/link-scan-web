import type { Metadata } from "next";
import { Inter, Tajawal, Heebo } from "next/font/google";
import { cookies } from "next/headers";
import { I18nProvider } from "@/i18n/config";
import { ThemeInitializer } from "@/components/theme-initializer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinkScan Pro \u2014 Wireless Barcode Scanner for PC",
  description:
    "Turn your phone into a wireless barcode scanner for your PC. Scan barcodes and QR codes with your smartphone and send data directly to your computer.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "LinkScan Pro \u2014 Wireless Barcode Scanner for PC",
    description:
      "Turn your phone into a wireless barcode scanner for your PC. Scan barcodes and QR codes with your smartphone and send data directly to your computer.",
    images: [
      {
        url: "/screenshot.png",
        width: 1200,
        height: 630,
        alt: "LinkScan Pro Link Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkScan Pro \u2014 Wireless Barcode Scanner for PC",
    description:
      "Turn your phone into a wireless barcode scanner for your PC. Scan barcodes and QR codes with your smartphone and send data directly to your computer.",
    images: ["/screenshot.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;
  const initialLang = (langCookie === "ar" || langCookie === "he" || langCookie === "en") ? (langCookie as "ar" | "he" | "en") : "en";

  return (
    <html lang={initialLang} dir={initialLang === "ar" || initialLang === "he" ? "rtl" : "ltr"} className={`${inter.variable} ${tajawal.variable} ${heebo.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInitializer />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <I18nProvider initialLang={initialLang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
