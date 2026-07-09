import type { Metadata } from "next";
import { Inter, Tajawal, Heebo } from "next/font/google";
import { I18nProvider } from "@/i18n/config";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${tajawal.variable} ${heebo.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
