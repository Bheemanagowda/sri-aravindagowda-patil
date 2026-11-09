import { useState, useEffect } from "react";
import {
  Quote,
  Star,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const endorsements = [
  {
    id: 1,
    name: "Shri Ningappa Gowda",
    role: "Progressive Farmer & Water Agitation Activist",
    village: "Hirewaddatti, Yelburga Taluk",
    quote:
      "During the severe drought, when others made empty promises, Shri Aravindgowda personally stood with us at the irrigation office and arranged emergency water tankers. He understands the pain of the farming community.",
    rating: 5,
    tag: "Farmer Voice",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  {
    id: 2,
    name: "Anand Kulkarni",
    role: "Youth Sports Captain & KPSC Aspirant",
    village: "Yelburga Town",
    quote:
      "He funded quality sports kits for our village youth and set up free study materials for government exam preparation. For the young generation of Yelburga, he is our mentor and elder brother.",
    rating: 5,
    tag: "Youth Voice",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  {
    id: 3,
    name: "Shrimati Shanta Bai",
    role: "Stree Shakti SHG President",
    village: "Kuknoor Area",
    quote:
      "When our government school lacked desks and drinking water, Aravindgowda Patil resolved it within 48 hours. He respects mothers and sisters, and always treats every citizen like his own family.",
    rating: 5,
    tag: "Women SHG Voice",
    badgeColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  },
  {
    id: 4,
    name: "Basavaraj Patil",
    role: "Retired Headmaster & Senior Citizen",
    village: "Mudhol, Yelburga",
    quote:
      "In my 70 years, I haven't seen a young leader with this level of humility and tireless dedication. He doesn't sit in big cities — he is always accessible in our villages. Yelburga’s future is bright with him as MLA.",
    rating: 5,
    tag: "Senior Citizen Voice",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  {
    id: 5,
    name: "Mallappa Madar",
    role: "Gram Panchayat Member & Social Worker",
    village: "Tadakal, Yelburga",
    quote:
      "Whenever our community faced difficulties or wedding expenses for poor families, Aravindgowda Patil was the first to arrive with financial aid and blessings. He treats all communities with equality and love.",
    rating: 5,
    tag: "Community Voice",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  },
  {
    id: 6,
    name: "Ramesh Pujar",
    role: "Temple Committee Member & Farmer",
    village: "Bandi Village, Yelburga",
    quote:
      "He donated generously from his own funds for the construction of our village temple and the sacred deity idol installation. During our annual Jathre, he ensured massive Anna Dasoha feeding for everyone.",
    rating: 5,
    tag: "Cultural Voice",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
];

const VoterEndorsements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = endorsements.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const activeEndorsement = endorsements[currentSlide];

  return (
    <section id="endorsements" className="relative bg-slate-900 text-white py-20 sm:py-28 overflow-hidden border-t border-slate-800">
      {/* Background Subtle Gradient */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
            <Quote className="h-3.5 w-3.5 text-orange-500" />
            <span>Voice of the People • Ground Reality</span>
          </span>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
            Why Yelburga Stands Firm With{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Aravindgowda Patil
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real stories and unvarnished words from the farmers, youth captains, women leaders, and elders living across the 85+ villages of our constituency.
          </p>
        </div>

        {/* ========================================================
            TESTIMONIAL SLIDER CAROUSEL
        ======================================================== */}
        <div
          className="mt-14 relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card Container with Transition */}
          <div className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-8 sm:p-12 shadow-2xl backdrop-blur-md overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Top Row: Stars + Tag + Slide Counter */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(activeEndorsement.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-400">5.0 Verified Citizen Voice</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${activeEndorsement.badgeColor}`}>
                    {activeEndorsement.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Large Quote */}
              <div className="relative">
                <Quote className="h-10 w-10 text-orange-500/20 absolute -top-4 -left-3 -z-10" />
                <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
                  "{activeEndorsement.quote}"
                </p>
              </div>
            </div>

            {/* Author Details Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center font-black text-white text-lg shadow-md shrink-0">
                  {activeEndorsement.name.charAt(activeEndorsement.name.startsWith("Shri") ? 5 : 0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>{activeEndorsement.name}</span>
                    <Sparkles className="h-4 w-4 text-orange-400 inline" />
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">{activeEndorsement.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-orange-400 font-medium bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>{activeEndorsement.village}</span>
              </div>
            </div>
          </div>

          {/* Slider Controls: Previous & Next Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-slate-900/95 border border-slate-700 text-white flex items-center justify-center shadow-xl hover:bg-orange-600 hover:border-orange-500 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-slate-900/95 border border-slate-700 text-white flex items-center justify-center shadow-xl hover:bg-orange-600 hover:border-orange-500 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {endorsements.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? "w-8 bg-gradient-to-r from-orange-500 to-amber-400 shadow-md shadow-orange-500/50"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            SUMMARY CONFIDENCE STRIP
        ======================================================== */}
        <div className="mt-14 py-5 px-6 rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-wrap items-center justify-around gap-6 text-center text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-white font-semibold">100% Unblemished Public Record</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-white font-semibold">Over 85+ Villages Reached</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-white font-semibold">24/7 Direct Public Availability</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VoterEndorsements;
