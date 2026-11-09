import { useState, useEffect } from "react";
import {
  Award,
  Footprints,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Heart,
} from "lucide-react";

const politicalMilestones = [
  {
    icon: Award,
    title: "Proven Administrative Excellence",
    subtitle: "Taluk & Zilla Panchayat President",
    description:
      "Demonstrated leadership in public administration and rural development through service in local governance.",
  },
  {
    icon: ShieldCheck,
    title: "BJP District Leadership",
    subtitle: "Vice President, Koppal District BJP",
    description:
      "Participated in organizational activities and public engagement across Koppal district.",
  },
  {
    icon: Footprints,
    title: "Ballari Chalo Padayatre",
    subtitle: "Participation & Public Engagement",
    description:
      "Participated in the Ballari Chalo Padayatre and engaged with party workers and supporters.",
  },
  {
    icon: Heart,
    title: "Grassroots Connection",
    subtitle: "Yelburga Community",
    description:
      "Maintains a strong connection with local communities, families, farmers and youth in Yelburga.",
  },
];

const sliderPhotos = [
  {
    id: 1,
    imageUrl:
      "/images/slider-images/community-help.jpg",
    caption: "Public Leadership & Community Engagement",
    location: "Koppal District",
  },
  {
    id: 2,
    imageUrl:
      "/images/slider-images/ballari-challo.jpg",
    caption: "Participation in Ballari Chalo Padayatre",
    location: "Ballari",
  },
  {
    id: 3,
    imageUrl:
      "/images/slider-images/crop-fire.jpg",
    caption: "Grassroots Community Engagement",
    location: "Yelburga",
  },
  {
    id: 4,
    imageUrl:
      "/images/slider-images/fair-support.jpg",
    caption: "District Leadership Meeting",
    location: "Koppal",
  },
];

const LeadershipShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderPhotos.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderPhotos.length);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">

      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF9933]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#138808]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            CENTERED MAIN TITLE
        ========================== */}
        <div className="mx-auto mb-14 max-w-4xl text-center">

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Dedicated Service to{" "}
            <span className="bg-gradient-to-r from-[#FF9933] via-amber-400 to-[#138808] bg-clip-text text-transparent">
              People & Community
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            From public administration and grassroots engagement to
            community development initiatives, Sri Aravindgowda Police Patil
            has remained connected with the people of Yelburga and Koppal.
          </p>

        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">

          {/* =========================
              LEFT SIDE
          ========================== */}
          <div className="flex flex-col lg:col-span-7">

            <div className="space-y-4">

              {politicalMilestones.map((item, idx) => {
                const IconComponent = item.icon;

                return (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#FF9933]/50 hover:bg-slate-900 sm:p-5"
                  >

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF9933] to-[#e68524] text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#FF9933] sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-[#138808]">
                        {item.subtitle}
                      </p>

                      <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                        {item.description}
                      </p>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-800 pt-5">

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center">
                <p className="text-xl font-black text-[#FF9933] sm:text-2xl">
                  Yelburga
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Grassroots Connection
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center">
                <p className="text-xl font-black text-[#138808] sm:text-2xl">
                  BJP
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  District Leadership
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-center">
                <p className="text-xl font-black text-amber-400 sm:text-2xl">
                  Public
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Community Service
                </p>
              </div>

            </div>
          </div>

          {/* =========================
              RIGHT SIDE IMAGE
          ========================== */}
          <div className="flex lg:col-span-5">

            <div className="relative flex w-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl backdrop-blur-xl">

              {/* Image Slider */}
              <div className="relative min-h-[520px] flex-1 overflow-hidden rounded-2xl bg-slate-950 sm:min-h-[600px] lg:min-h-0">

                {sliderPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0"
                    }`}
                  >

                    <img
                      src={photo.imageUrl}
                      alt={photo.caption}
                      className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Top Label */}
                    <div className="absolute left-4 top-4 z-20 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                      Community Leadership
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-5 left-5 right-5 z-20">

                      <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-[#FF9933]">
                        <MapPin className="h-3.5 w-3.5" />
                        {photo.location}
                      </div>

                      <h3 className="text-lg font-bold text-white sm:text-xl">
                        {photo.caption}
                      </h3>

                    </div>
                  </div>
                ))}

                {/* Previous */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-white backdrop-blur-md transition-all hover:border-[#FF9933] hover:bg-[#FF9933]"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Next */}
                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-white backdrop-blur-md transition-all hover:border-[#FF9933] hover:bg-[#FF9933]"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

              </div>

              {/* Slider Navigation */}
              <div className="flex items-center justify-between px-2 pt-4">

                <div className="flex items-center gap-2">
                  {sliderPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? "w-8 bg-[#FF9933]"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="font-mono text-xs text-slate-400">
                  <strong className="text-[#FF9933]">
                    0{currentSlide + 1}
                  </strong>{" "}
                  / 0{sliderPhotos.length}
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipShowcase;