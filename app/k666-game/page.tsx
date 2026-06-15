import type { Metadata } from "next";
import BestEarningSection from "@/components/BestEarningSection";
import ConclusionSection from "@/components/ConclusionSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import DownloadGuide from "@/components/DownloadGuide";
import ExperienceSection from "@/components/ExperienceSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import GamesSection from "@/components/GamesSection";
import HeroSection from "@/components/HeroSection";
import PaymentGuide from "@/components/PaymentGuide";
import ReferralSection from "@/components/ReferralSection";
import RegistrationGuide from "@/components/RegistrationGuide";
import ReviewSection from "@/components/ReviewSection";
import SafetyTipsSection from "@/components/SafetyTipsSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TableOfContents from "@/components/TableOfContents";
import TrendSection from "@/components/TrendSection";
import UserReviews from "@/components/UserReviews";
import WhatIsK666 from "@/components/WhatIsK666";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "K666 Game Download APK 2026 – Official Pakistan Guide",
  description:
    "Download K666 Game APK for Pakistan in 2026. Complete guide with Easypaisa & JazzCash withdrawals, bonuses, login steps & honest real-or-fake review.",
  keywords: [
    "K666 Game",
    "K666",
    "K666 APK",
    "K666 Download",
    "K666 Login",
    "K666 Game Download",
    "K666 APK Download",
    "K666 Pakistan",
    "K666 Review",
    "K666 Real or Fake",
    "K666 Easypaisa Withdrawal",
    "K666 JazzCash Withdrawal",
    "K666 Bonus 2026",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/k666-game" },
  openGraph: {
    title: "K666 Game Download APK 2026 – Official Pakistan Guide",
    description:
      "Download K666 Game APK for Pakistan in 2026. Complete guide with Easypaisa & JazzCash withdrawals, bonuses, login steps & honest review.",
    url: "/k666-game",
    siteName: "K666 Game Pakistan Guide",
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
    title: "K666 Game Download APK 2026 – Official Pakistan Guide",
    description:
      "Complete K666 Game guide for Pakistan: APK download, Easypaisa withdrawal, JazzCash, bonuses & honest review.",
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

export default function K666GamePage() {
  return (
    <>
      <SchemaMarkup />
      <article>
        <HeroSection />
        <TableOfContents />
        <WhatIsK666 />
        <FeaturesSection />
        <ScreenshotsSection />
        <DownloadGuide />
        <RegistrationGuide />
        <TrendSection />
        <PaymentGuide />
        <GamesSection />
        <BestEarningSection />
        <ReferralSection />
        <SafetyTipsSection />
        <ReviewSection />
        <ExperienceSection />
        <UserReviews />
        <ConclusionSection />
        <FaqSection />
        <DisclaimerSection />
      </article>
    </>
  );
}
