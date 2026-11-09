import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Flame,
  ShieldAlert,
  Landmark,
  HeartHandshake,
  Trophy,
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";

// Crisp SVG Mask Icon for Village Drama (Nataka / Bayalata)
const DramaMaskIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10c0-4.4 3.6-8 8-8s8 3.6 8 8v2c0 4.4-3.6 8-8 8s-8-3.6-8-8v-2Z" />
    <path d="M7 9h.01" />
    <path d="M13 9h.01" />
    <path d="M7 14c1.5 1 4.5 1 6 0" />
    <path d="M14 6c3 0 6 2 7 5v2c0 3-1.8 5.7-4.5 6.7" />
  </svg>
);

const sevaInitiatives = [
  {
    id: "accident",
    category: "farmers",
    icon: ShieldAlert,
    tag: "Emergency Relief",
    title: "Financial Aid for Accident-Hit Farmers",
    kannadaTag: "ರೈತರ ಅಪಘಾತ ಪರಿಹಾರ",
    description:
      "Immediate monetary assistance and hospitalization support for farmers and farm laborers injured during agricultural work, tractor accidents, or field mishaps.",
    impactPoint: "Direct cash handover to victim families without bureaucratic delays",
    gradient: "from-rose-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  },
  {
    id: "fodder",
    category: "farmers",
    icon: Flame,
    tag: "Farmer Crisis Aid",
    title: "Compensation for Burned Fodder (Mevu)",
    kannadaTag: "ಸುಟ್ಟು ಹೋದ ಮೇವಿಗೆ ಆರ್ಥಿಕ ನೆರವು",
    description:
      "Providing immediate financial compensation to distressed farmers whose cattle fodder / haystacks ('Mevu') accidentally caught fire, ensuring their livestock don't starve.",
    impactPoint: "Cash relief provided on-site immediately after loss inspection",
    gradient: "from-orange-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  },
  {
    id: "education",
    category: "education",
    icon: GraduationCap,
    tag: "Student Welfare",
    title: "Education Scholarships for Poor Students",
    kannadaTag: "ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಶುಲ್ಕ ನೆರವು",
    description:
      "Direct financial support covering school and college tuition fees, textbooks, and hostel costs for economically underprivileged students across Yelburga.",
    impactPoint: "Supported hundreds of rural girls and boys in pursuing higher education",
    gradient: "from-blue-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  },
  {
    id: "temple",
    category: "culture",
    icon: Landmark,
    tag: "Spiritual Heritage",
    title: "Temple Construction & Deity Statue Development",
    kannadaTag: "ದೇವಸ್ಥಾನ ನಿರ್ಮಾಣ ಮತ್ತು ವಿಗ್ರಹ ಪ್ರತಿಷ್ಠಾಪನೆ",
    description:
      "Generous personal financial grants for building and renovating village Hindu temples, Gopuras, and the crafting & installation of sacred deity statues (Vigrahas).",
    impactPoint: "Over 40+ village temples supported across Yelburga & Kuknoor",
    gradient: "from-amber-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  {
    id: "fair",
    category: "culture",
    icon: Calendar,
    tag: "Village Traditions",
    title: "Village Jathre & Temple Fair Sponsorship",
    kannadaTag: "ಗ್ರಾಮದ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಮತ್ತು ಅನ್ನದಾಸೋಹ",
    description:
      "Substantial financial backing for annual village Jathra Mahothsavas, temple rathotsavas, and continuous mass feeding (Anna Dasoha) for devotees.",
    impactPoint: "Preserving sacred ancestral traditions in every gram panchayat",
    gradient: "from-yellow-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  },
  {
    id: "marriage",
    category: "farmers",
    icon: HeartHandshake,
    tag: "Social Compassion",
    title: "Marriage Support & Blessings for Needy Families",
    kannadaTag: "ಬಡ ಕುಟುಂಬಗಳ ಕಲ್ಯಾಣ / ವಿವಾಹ ಸಹಾಯ",
    description:
      "Personally attending the weddings of daughters and sons from economically weak families in Yelburga, blessing the newlyweds, and gifting financial assistance (Kalyana Sahaya).",
    impactPoint: "Easing financial burden on poor parents during marriage expenses",
    gradient: "from-pink-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  },
  {
    id: "sports",
    category: "education",
    icon: Trophy,
    tag: "Sports Promotion",
    title: "Govt School Sports & Village Cricket Tournaments",
    kannadaTag: "ಸರ್ಕಾರಿ ಶಾಲಾ ಕ್ರೀಡೆ ಮತ್ತು ಕ್ರಿಕೆಟ್ ಪಂದ್ಯಾವಳಿ",
    description:
      "Sponsoring high-grade cricket kits, athletic uniforms, and running track equipment for government schools, plus funding cash prizes and trophies for village youth sports.",
    impactPoint: "Encouraging rural sporting talent and healthy youth engagement",
    gradient: "from-emerald-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "drama",
    category: "culture",
    icon: DramaMaskIcon,
    tag: "Folk Arts Patronage",
    title: "Financial Backing for Village Drama (Nataka / Bayalata)",
    kannadaTag: "ಗ್ರಾಮೀಣ ನಾಟಕ ಮತ್ತು ಬಯಲಾಟ ಪ್ರೋತ್ಸಾಹ",
    description:
      "Preserving Karnataka's rich cultural heritage by funding traditional mythological village plays, stage setups, sound systems, and extending financial support to local folk artists.",
    impactPoint: "Keeping village folk drama and cultural harmony vibrant",
    gradient: "from-purple-500/10 via-slate-900 to-slate-950",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  },
];

const categories = [
  { id: "all", label: "All Seva Initiatives" },
  { id: "farmers", label: "Farmers & Family Relief" },
  { id: "education", label: "Education & Youth Sports" },
  { id: "culture", label: "Temples & Cultural Heritage" },
];

const DirectSevaImpact = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredInitiatives =
    activeTab === "all"
      ? sevaInitiatives
      : sevaInitiatives.filter((item) => item.category === activeTab);

  return (
    <section id="janaseva" className="relative bg-slate-950 text-white py-20 sm:py-28 overflow-hidden border-t border-slate-800">
      {/* Saffron & Amber Dynamic Backlight */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ========================================================
            HEADER
        ======================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
            <span>Namma Janaseva • Selfless Public Philanthropy</span>
          </span>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
            Real Help for Real People in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Their Hour of Need
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Beyond politics, Shri Aravindgowda Police Patil stands with every family in Yelburga. From helping accident-hit farmers and funding students to supporting village temples, marriages, and cultural dramas — his service is continuous and unconditional.
          </p>
        </div>

        {/* ========================================================
            FILTER TABS
        ======================================================== */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ========================================================
            SEVA INITIATIVES CARDS GRID
        ======================================================== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInitiatives.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 hover:border-orange-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge and Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-orange-400/90 mb-1">
                      {item.kannadaTag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 space-y-1">
                  <div className="flex items-start gap-1.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item.impactPoint}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            EMERGENCY ASSISTANCE CALLOUT BANNER
        ======================================================== */}
        <div className="mt-14 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-900 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-400">
                <PhoneCall className="h-3.5 w-3.5" />
                24/7 Citizen Seva Helpline
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Are You or a Family in Urgent Need of Assistance?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether it's a medical emergency, fodder loss due to fire, educational fee difficulty, or village temple event coordination — reach out directly to Shri Aravindgowda Police Patil's seva team.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/real-help"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>Explore Full Seva Mission</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-slate-700 bg-slate-800/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5 text-orange-400" />
                <span>Contact Camp Office</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DirectSevaImpact;
