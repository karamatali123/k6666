export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kk666.com.pk";

export const K666_INFO = {
  appName: "K666 Game",
  version: "V1.2.35",
  platform: "Android 5.0+",
  category: "Casino & Card Games",
  minDeposit: "PKR 100",
  minWithdrawal: "PKR 200",
  withdrawalTime: "5–30 minutes (varies)",
  welcomeBonus: "Up to PKR 500 (promotional)",
  referralBonus: "Commission on friend deposits",
  officialWebsite: "k666game.pk",
  paymentMethods: ["Easypaisa", "JazzCash", "Bank Transfer"],
} as const;

export const REF_URL = "https://www.k666.ai/?id=167681000";

export const DOWNLOAD_URL = REF_URL;
export const LOGIN_URL = REF_URL;
export const REGISTER_URL = REF_URL;

export const EXTERNAL_LINK_ATTRS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
