import { useEffect, useState } from "react";

function SlideVisual({ slide }) {
  if (slide.image) {
    return (
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className={[
        "absolute inset-0 bg-gradient-to-br opacity-90",
        slide.accent,
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-rose/20 blur-3xl" />
    </div>
  );
}

export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-cocoa text-white shadow-soft">
      <div className="relative min-h-[440px]">
        <SlideVisual slide={activeSlide} />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(47,36,31,0.82),rgba(47,36,31,0.2))]" />

        <div className="relative z-10 flex min-h-[440px] flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              {activeSlide.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {activeSlide.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              {activeSlide.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`切換到第 ${index + 1} 張輪播`}
                  className={[
                    "h-3 rounded-full transition-all duration-200",
                    index === activeIndex ? "w-10 bg-white" : "w-3 bg-white/45",
                  ].join(" ")}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl"
                onClick={goToPrevious}
                aria-label="上一張"
              >
                ←
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl"
                onClick={goToNext}
                aria-label="下一張"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
