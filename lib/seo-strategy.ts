/** Image SEO recommendations for K666 Game landing page */
export const IMAGE_SEO_RECOMMENDATIONS = [
  {
    file: "/public/images/k666-game-og.png",
    alt: "K666 Game Download APK for Pakistan 2026",
    dimensions: "1200x630",
    purpose: "Open Graph and Twitter card",
  },
  {
    file: "/public/images/k666-game-logo.png",
    alt: "K666 Game official logo",
    dimensions: "512x512",
    purpose: "Organization schema logo",
  },
  {
    file: "/public/images/k666-apk-screenshot.webp",
    alt: "K666 Game app home screen showing Teen Patti and slot games",
    dimensions: "1080x1920",
    purpose: "Hero or download section screenshot",
  },
  {
    file: "/public/images/k666-easypaisa-deposit.webp",
    alt: "K666 Game Easypaisa deposit screen for Pakistan users",
    dimensions: "800x600",
    purpose: "Deposit section illustration",
  },
  {
    file: "/public/images/k666-jazzcash-withdrawal.webp",
    alt: "K666 Game JazzCash withdrawal interface",
    dimensions: "800x600",
    purpose: "Withdrawal section illustration",
  },
] as const;

/** Internal linking strategy for programmatic SEO */
export const INTERNAL_LINKING_STRATEGY = {
  hubPage: "/",
  spokePages: [
    "/teen-patti-game",
    "/fortune-tiger-game",
    "/dragon-tiger-game",
    "/rummy-game-pakistan",
    "/z777-game",
    "/aviator-game-pakistan",
    "/winrupees-game",
    "/euro-roulette-game",
  ],
  rules: [
    "Link from K666 hub to all related game pages via RelatedGames component",
    "Use descriptive anchor text with target keywords (e.g. Teen Patti Game Pakistan)",
    "Each spoke page should link back to / with anchor K666 Game Download",
    "Include contextual in-content links within What Is and Games sections on spoke pages",
    "Maintain max 8–12 internal links per page to avoid dilution",
    "Use absolute paths for sitemap; relative paths in components",
  ],
} as const;
