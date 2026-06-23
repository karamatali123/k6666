import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EXTERNAL_LINK_ATTRS, LOGIN_URL, REF_URL, SITE_URL } from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KK666.com.pk — K666 Game Pakistan Guide",
    template: "%s",
  },
  description:
    "Independent K666 Game guide for Pakistan. APK download, JazzCash & Easypaisa withdrawal steps, bonuses, referral code & honest 2026 review.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: K666_IMAGES.icon.src,
    apple: K666_IMAGES.icon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PK"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
            aria-label="Main navigation"
          >
            <a
              href="/k666-game"
              className="flex items-center gap-2.5 text-lg font-bold text-emerald-700"
            >
              <Image
                src={K666_IMAGES.icon.src}
                alt={K666_IMAGES.icon.alt}
                width={K666_IMAGES.icon.width}
                height={K666_IMAGES.icon.height}
                className="h-9 w-9 rounded-lg"
                priority
              />
              <span>KK666 Game Guide</span>
            </a>
            <div className="flex gap-4 text-sm font-medium">
              <a
                href={REF_URL}
                {...EXTERNAL_LINK_ATTRS}
                className="text-slate-600 hover:text-emerald-700"
              >
                Download
              </a>
              <a
                href={LOGIN_URL}
                {...EXTERNAL_LINK_ATTRS}
                className="text-slate-600 hover:text-emerald-700"
              >
                Login
              </a>
              <a
                href="/k666-game#faqs"
                className="hidden text-slate-600 hover:text-emerald-700 sm:inline"
              >
                FAQ
              </a>
            </div>
          </nav>
        </header>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} KK666.com.pk — K666 Game Pakistan
            Guide. For informational purposes only.
          </p>
        </footer>
      </body>
    </html>
  );
}
