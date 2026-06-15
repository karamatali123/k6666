import Image from "next/image";
import { K666_IMAGES } from "@/lib/k666-images";

const steps = [
  "Go to Settings → Security → enable Install Unknown Apps",
  "Download K666 APK V1.2.35 from official source",
  "Open the file → tap Install → launch app",
  "Register and make your first deposit to start playing",
] as const;

export default function DownloadGuide() {
  return (
    <section
      id="download-install-guide"
      aria-labelledby="download-heading"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="download-heading" className="text-2xl font-bold text-slate-900">
          K666 Game Download &amp; Install – Easy &amp; Updated Guide 2026
        </h2>

        <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <Image
            src={K666_IMAGES.promoBanner.src}
            alt={K666_IMAGES.promoBanner.alt}
            width={K666_IMAGES.promoBanner.width}
            height={K666_IMAGES.promoBanner.height}
            className="rounded-xl shadow-md"
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-sm text-amber-700">
          Download only from trusted sources. Never share your OTP.
        </p>
      </div>
    </section>
  );
}
