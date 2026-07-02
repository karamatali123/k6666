import Image from "next/image";
import {
  DOWNLOAD_URL,
  EXTERNAL_LINK_ATTRS,
} from "@/lib/constants";
import { K666_IMAGES } from "@/lib/k666-images";

const downloadSteps = [
  "Tap the official download button on KK666.com.pk or the verified partner link.",
  "Wait for the APK file (~52 MB) to finish saving in your Downloads folder.",
  "Check the icon matches the green K666 logo before you open the file.",
  "If the size looks too small, delete it — modified files are common on Telegram.",
] as const;

const installSteps = [
  "Open Android Settings → Security → Install unknown apps.",
  "Enable permission for Chrome or your file manager app.",
  "Tap the downloaded APK and select Install on the prompt.",
  "Launch K666, allow storage access if asked, and proceed to register or login.",
] as const;

export default function DownloadGuide() {
  return (
    <section
      id="download-install"
      aria-labelledby="download-heading"
      className="border-t border-slate-100 bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl prose-section">
        <h2 id="download-heading" className="text-2xl font-bold text-slate-900">
          How to Download and Install K666 APK?
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          K666 is not listed on Google Play in Pakistan, so you sideload the
          APK like many other earning apps. The process is safe when you use a
          trusted source and double-check the file. We walk through download and
          install separately so nothing gets skipped on older Android phones.
        </p>

        <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold text-emerald-800">
              Downloading Steps
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Save the correct APK file before you change any phone settings.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {downloadSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold text-emerald-800">
              Installation Steps
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Enable installs, then open the file you just downloaded.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {installSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
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

        <a
          href={DOWNLOAD_URL}
          {...EXTERNAL_LINK_ATTRS}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
        >
          Download K666 APK
        </a>
      </div>
    </section>
  );
}
