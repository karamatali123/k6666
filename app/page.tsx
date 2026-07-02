import type { Metadata } from "next";
import BonusesPromotionsSection from "@/components/BonusesPromotionsSection";
import ConclusionSection from "@/components/ConclusionSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DownloadGuide from "@/components/DownloadGuide";
import ExperienceReviewsSection from "@/components/ExperienceReviewsSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import GamesSection from "@/components/GamesSection";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import PaymentGuide from "@/components/PaymentGuide";
import ReferralSection from "@/components/ReferralSection";
import RegistrationGuide from "@/components/RegistrationGuide";
import ReviewSection from "@/components/ReviewSection";
import SafetyLegalSection from "@/components/SafetyLegalSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import TableOfContents from "@/components/TableOfContents";
import WhatIsK666 from "@/components/WhatIsK666";
import WhyChooseSection from "@/components/WhyChooseSection";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title:
    "K666 Game Download APK Pakistan 2026 | KK666 Login, Bonus & Withdrawal",
  description:
    "KK666.com.pk tested K666 Game APK V1.2.35 for Pakistan. Download link, JazzCash & Easypaisa withdrawal steps, Rs 2000 referral bonus, login guide & real-or-fake review.",
  keywords: [
    "K666 Game",
    "K666 Game Download",
    "K666 APK Download",
    "K666 Download Pakistan",
    "K666 Login",
    "K666 Game Pakistan",
    "K666 Real or Fake",
    "K666 Easypaisa Withdrawal",
    "K666 JazzCash Withdrawal",
    "K666 Bonus 2026",
    "K666 Referral Code",
    "new earning app",
    "real money app",
    "earning app in Pakistan",
    "earn money online",
    "kk666.com.pk",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "K666 Game Download APK Pakistan 2026 | KK666 Login, Bonus & Withdrawal",
    description:
      "Independent K666 guide from KK666.com.pk: APK download, JazzCash & Easypaisa cash-out, referral bonus & honest 2026 review for Pakistan players.",
    url: "/",
    siteName: "KK666.com.pk",
    locale: "en_PK",
    type: "article",
    images: [
      {
        url: "/k666images/k6662.jpeg",
        width: 275,
        height: 183,
        alt: "K666 Game promotional banner for Pakistan APK download 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "K666 Game Download APK Pakistan 2026 | KK666 Login, Bonus & Withdrawal",
    description:
      "KK666.com.pk guide: K666 APK download, JazzCash & Easypaisa withdrawal, Rs 2000 referral & real-or-fake verdict for Pakistan.",
    images: ["/k666images/k6662.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Gaming",
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <article>
        <HeroSection />
        <TableOfContents />
        <OverviewSection />
        <WhyChooseSection />
        <WhatIsK666 />
        <FeaturesSection />
        <GamesSection />
        <GetStartedSection />
        <RegistrationGuide />
        <DownloadGuide />
        <BonusesPromotionsSection />
        <ReferralSection />
        <PaymentGuide />
        <SafetyLegalSection />
        <ReviewSection />
        <ExperienceReviewsSection />
        <ConclusionSection />
        <FaqSection />
        <DisclaimerSection />
      </article>
    </>
  );
}
