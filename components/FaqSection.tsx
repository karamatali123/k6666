const faqs = [
  {
    question: "Is K666 Game real or fake in Pakistan?",
    answer:
      "K666 is a real functioning app — deposits and JazzCash/Easypaisa withdrawals work. It is not a scam clone. However, 'real' does not mean you will profit. The platform has a house edge, and most players lose money over weeks. KK666.com.pk confirmed live transactions during our June 2026 test.",
  },
  {
    question: "How do I download K666 Game APK for Android?",
    answer:
      "Enable 'Install unknown apps' in Android settings, then download the V1.2.35 APK (~52 MB) from a verified source. Open the file, tap Install, and launch. K666 is not available on Google Play Store in Pakistan. Avoid Telegram links with mismatched icons or small file sizes.",
  },
  {
    question: "What is the K666 login process?",
    answer:
      "Open the app → tap Login → enter your registered Pakistani mobile number (03XX) and password. If you forgot your password, tap Forgot and verify via SMS OTP. No email login is supported. VoIP numbers are rejected.",
  },
  {
    question: "How to withdraw K666 earnings to Easypaisa?",
    answer:
      "Go to Wallet → Withdraw → select Easypaisa → enter your wallet number and amount (min Rs 200). First withdrawals may take 2–6 hours for verification. After that, most Easypaisa cashouts arrive in 5–30 minutes. Screenshot your transaction ID if delayed.",
  },
  {
    question: "How to withdraw K666 to JazzCash?",
    answer:
      "Same process as Easypaisa: Wallet → Withdraw → JazzCash → enter amount (min Rs 200). Ensure your JazzCash account name matches your K666 registration. Daily limit is Rs 50,000 for unverified accounts. Peak hours (8–11 PM PKT) may add 10–15 minutes.",
  },
  {
    question: "What is the K666 referral bonus in 2026?",
    answer:
      "Invite friends via your unique code or WhatsApp link. Earn up to Rs 2000 when a friend registers and makes their first deposit. Ongoing commission of 5–15% applies on friend deposits for 30 days. Enter a referral code at signup to unlock matched welcome chips.",
  },
  {
    question: "What is the minimum deposit in K666?",
    answer:
      "Rs 100 via JazzCash or Easypaisa. Bank transfer minimum is Rs 5,000. New accounts get a 30% first-deposit bonus (e.g. deposit Rs 500, play with Rs 650) but wagering rules require turnover before withdrawal.",
  },
  {
    question: "Does K666 give real money instantly after winning?",
    answer:
      "Winnings credit to your in-app wallet immediately after each game round. Converting to JazzCash or Easypaisa requires a withdrawal request — typically 5–30 minutes for verified accounts. First cashout may take several hours.",
  },
  {
    question: "Which games pay the most in K666?",
    answer:
      "No game guarantees profit. Teen Patti and Rummy involve more skill; Aviator and slots are faster but higher risk. Fortune Tiger and Super Ace are trending but have high volatility. Start with Rs 10 minimum bets to learn mechanics before increasing stakes.",
  },
  {
    question: "Why is my K666 withdrawal rejected or pending?",
    answer:
      "Common reasons: bonus wagering not completed, wallet number mismatch, first-time KYC review, or daily limit exceeded. Contact WhatsApp support with your registered number, withdrawal screenshot, and JazzCash/Easypaisa transaction proof. Do not create a second account.",
  },
  {
    question: "Is K666 available on iPhone / iOS?",
    answer:
      "No official iOS version exists as of June 2026. K666 is Android APK only. Websites claiming 'K666 iOS download' are usually scams or web wrappers. iPhone users cannot install the native app without jailbreak.",
  },
  {
    question: "What is the latest K666 APK version in 2026?",
    answer:
      "V1.2.35 (June 2026 build, ~52 MB). This version adds Super Ace slot, improves Aviator latency on 4G, and fixes JazzCash deposit timeout bugs. Always update from the official source — outdated APKs may have payment errors.",
  },
] as const;

export default function FaqSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-2xl font-bold">
          K666 Game FAQs — Pakistan (2026)
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          Answers based on KK666.com.pk testing. Updated for V1.2.35.
        </p>
        <div className="mt-6 space-y-2">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="rounded-lg border border-slate-700 bg-slate-800/50"
            >
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-emerald-300 [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Q{index + 1}: </span>
                {faq.question}
              </summary>
              <p className="border-t border-slate-700 px-4 py-3 text-sm text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export { faqs };
