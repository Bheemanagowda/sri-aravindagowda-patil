import { useState } from "react";
import {
  Droplets,
  Laptop,
  HeartPulse,
  Route,
  Wheat,
  GraduationCap,
  Trophy,
  Users,
  Factory,
  CheckCircle2,
  FileText,
  Vote,
} from "lucide-react";

const guarantees = [
  {
    number: "01",
    icon: Droplets,
    title: "100% Lake Filling & Irrigation",
    desc: "Permanent pipeline connections to fill lakes across Yelburga taluk, supporting groundwater and farm irrigation.",
    tag: "Farmer Lifeline",
    cardBg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    numberColor: "text-blue-500",
  },
  {
    number: "02",
    icon: Laptop,
    title: "Yelburga IT & Skill Hub",
    desc: "Establishing a modern skill academy and rural BPO/technology hub to support employment opportunities for graduates.",
    tag: "Youth Jobs",
    cardBg: "bg-amber-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    numberColor: "text-amber-500",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "100-Bed Super Specialty Hospital",
    desc: "Upgraded healthcare facilities with emergency care, ICU, dialysis services and maternal healthcare support.",
    tag: "Healthcare",
    cardBg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    numberColor: "text-rose-500",
  },
  {
    number: "04",
    icon: Route,
    title: "All-Weather Roads to Every Hamlet",
    desc: "Improved road connectivity connecting villages, thandas and agricultural areas with reliable all-weather roads.",
    tag: "Infrastructure",
    cardBg: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    numberColor: "text-orange-500",
  },
  {
    number: "05",
    icon: Wheat,
    title: "Farmer Redressal & Crop Insurance",
    desc: "Dedicated support for crop-loss compensation, agricultural schemes and timely access to seeds and fertilizers.",
    tag: "Agriculture",
    cardBg: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    numberColor: "text-emerald-500",
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Free Coaching & Smart Classrooms",
    desc: "Modern digital classrooms and competitive examination coaching opportunities for rural students and youth.",
    tag: "Education",
    cardBg: "bg-indigo-50",
    border: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    numberColor: "text-indigo-500",
  },
  {
    number: "07",
    icon: Trophy,
    title: "World-Class Sports Complex",
    desc: "Development of sports infrastructure including athletics facilities, cricket grounds and village sports programs.",
    tag: "Youth Sports",
    cardBg: "bg-yellow-50",
    border: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    numberColor: "text-yellow-500",
  },
  {
    number: "08",
    icon: Users,
    title: "Stree Shakti Women Revolving Fund",
    desc: "Support for women self-help groups through skill development, small enterprise opportunities and financial assistance.",
    tag: "Women Empowerment",
    cardBg: "bg-pink-50",
    border: "border-pink-200",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    numberColor: "text-pink-500",
  },
  {
    number: "09",
    icon: Factory,
    title: "Agro & Textile Processing Cluster",
    desc: "Encouraging local agro-processing and textile-related businesses to create opportunities and strengthen local markets.",
    tag: "Local Industry",
    cardBg: "bg-cyan-50",
    border: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    numberColor: "text-cyan-500",
  },
];

const Manifesto = () => {
  const [pledged, setPledged] = useState(false);

  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-t border-slate-100 bg-white py-20 sm:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700">
            <FileText className="h-4 w-4 text-orange-600" />
            <span>Sankalpa Patra • Election Manifesto 2028</span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Development{" "}
            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent">
              Commitments for Yelburga
            </span>
          </h2>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            A vision focused on infrastructure, agriculture, education,
            healthcare, employment, youth development and community welfare.
          </p>

        </div>

        {/* =========================
            GUARANTEE CARDS
        ========================== */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {guarantees.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${item.border} ${item.cardBg} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >

                {/* Top Number + Tag */}
                <div className="flex items-center justify-between">

                  <span
                    className={`text-3xl font-black opacity-70 ${item.numberColor}`}
                  >
                    #{item.number}
                  </span>

                  <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                    {item.tag}
                  </span>

                </div>

                {/* Icon + Content */}
                <div className="mt-6">

                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor} shadow-sm transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                </div>

                {/* Bottom */}
                <div className="mt-6 border-t border-slate-200/80 pt-4">

                  <span className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <CheckCircle2
                      className={`h-4 w-4 ${item.iconColor}`}
                    />
                    Development Commitment
                  </span>

                </div>

              </div>
            );
          })}

        </div>

        {/* =========================
            BOTTOM SUPPORT BANNER
        ========================== */}
        <div className="mt-14 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-amber-50 p-7 shadow-sm sm:p-8">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div className="text-center lg:text-left">

              <h4 className="text-xl font-black text-slate-900 sm:text-2xl">
                Share Your Ideas for Yelburga
              </h4>

              <p className="mt-1 text-sm text-slate-600">
                Community suggestions can help shape development priorities.
              </p>

            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => setPledged(true)}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold shadow-md transition-all duration-300 ${
                  pledged
                    ? "bg-emerald-600 text-white"
                    : "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-orange-500/20 hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-400"
                }`}
              >
                {pledged ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Thank You!</span>
                  </>
                ) : (
                  <>
                    <Vote className="h-4 w-4" />
                    <span>Share Your Support</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-300 hover:text-orange-600"
              >
                Suggest Ideas
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;