import Image from "next/image";
import { K666_IMAGES } from "@/lib/k666-images";

function ScreenshotSlide({
  shot,
  index,
}: {
  shot: (typeof K666_IMAGES.screenshots)[number];
  index: number;
}) {
  return (
    <li
      className="screenshot-slide flex w-[160px] shrink-0 flex-col sm:w-[180px]"
      aria-hidden={index >= K666_IMAGES.screenshots.length ? true : undefined}
    >
      <figure className="w-full">
        <div className="overflow-hidden rounded-2xl border-4 border-slate-800 bg-slate-800 shadow-lg">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            className="h-auto w-full object-cover object-top"
            sizes="180px"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2 text-center text-xs font-medium text-slate-600">
          {shot.caption}
        </figcaption>
      </figure>
    </li>
  );
}

export default function ScreenshotsSection() {
  const slides = [...K666_IMAGES.screenshots, ...K666_IMAGES.screenshots];

  return (
    <section
      id="k666-app-screenshots"
      aria-labelledby="screenshots-heading"
      className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="screenshots-heading" className="text-2xl font-bold text-slate-900">
          K666 App Screenshots
        </h2>

        <div
          className="screenshots-slider relative mt-6"
          role="region"
          aria-label="K666 Game app screenshots carousel"
        >
          <ul className="screenshots-track flex gap-5 py-2">
            {slides.map((shot, index) => (
              <ScreenshotSlide
                key={`${shot.src}-${index}`}
                shot={shot}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
