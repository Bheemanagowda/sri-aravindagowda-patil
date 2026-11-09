import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/images/banners/banner1.png",
  "/images/banners/banner2.png",
  "/images/banners/banner3.png",
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-slate-950 sm:h-[620px] md:h-[660px] lg:h-[800px]">
      {banners.map((banner, index) => (
        <img
          key={banner}
          src={banner}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
            currentSlide === index
              ? "z-10 opacity-100"
              : "z-0 opacity-0"
          }`}
        />
      ))}

      {/* Previous button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Banner indicators */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((banner, index) => (
          <button
            key={banner}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to banner ${index + 1}`}
            aria-current={currentSlide === index ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;