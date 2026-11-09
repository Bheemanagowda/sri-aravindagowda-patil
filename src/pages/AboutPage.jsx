import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Footprints,
  ShieldCheck,
  Heart,
  Users,
  Landmark,
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Compass,
  MapPin,
  Flame,
  Target,
  FileText,
} from "lucide-react";

const milestones = [
  {
    year: "Early Life & Roots",
    title: "Born to the Soil of Yelburga",
    description:
      "Born into a respected agricultural family in Yelburga taluk, Koppal district. Growing up witnessing the hardships of dryland farmers, water scarcity, and youth migration shaped his lifelong dedication to grassroots public welfare.",
    icon: Heart,
    badge: "Roots & Heritage",
  },
  {
    year: "Taluk Panchayat Tenure",
    title: "Grassroots Administrative Excellence",
    description:
      "Elected as a dedicated Taluk Panchayat member of Yelburga. Championed rural road connectivity, lake rejuvenation proposals, drinking water pipelines, and government primary school upgrades across dozens of village panchayats.",
    icon: Award,
    badge: "Elected Governance",
  },
  {
    year: "District BJP Leadership",
    title: "Vice President, Koppal District BJP",
    description:
      "Elevated to the crucial role of Vice President of Bharatiya Janata Party, Koppal District. United booth workers, organized mass outreach programs, farmer sammelans, and built an energized cadre of young leaders across the region.",
    icon: ShieldCheck,
    badge: "Organizational Strength",
  },
  {
    year: "Historic Agitation",
    title: "Frontline Leader in Ballari Chalo Padayatre",
    description:
      "Marched at the forefront of the historic Ballari Chalo Padayatre and statewide BJP Horata against administrative corruption, demanding regional justice, farmer water allocations, and transparent governance for North Karnataka.",
    icon: Footprints,
    badge: "Mass Movement",
  },
  {
    year: "Present & Future",
    title: "Next MLA Candidate • Yelburga Constituency (063)",
    description:
      "Carrying a progressive vision to transform Yelburga into a modern agricultural and skill hub: 100% lake filling, IT skill academies, 100-bed super specialty hospital, and round-the-clock Seva for every citizen.",
    icon: Flame,
    badge: "Constituency Vision",
  },
];

const pillars = [
  {
    title: "Farmer Welfare & Lake Filling",
    desc: "Unwavering fight for canal irrigation water, pipeline lake-filling schemes, and immediate on-the-spot aid for farm accidents and burned fodder.",
    icon: "🚜",
  },
  {
    title: "Real Help in the Hour of Need",
    desc: "Personal emergency assistance for accident victims, medical hospitalization, poor family marriages, and needy students without bureaucratic delays.",
    icon: "🤝",
  },
  {
    title: "Youth Skills & Sports Infrastructure",
    desc: "Creating 5,000 local skill-based jobs, establishing competitive exam coaching centers, and building top-tier village sports grounds and cricket/kabaddi kits.",
    icon: "⚡",
  },
  {
    title: "Heritage & Cultural Preservation",
    desc: "Active funding for rural Hindu temple constructions, deity Vigraha installations, annual village Jathre Mahotsavas, and traditional folk drama (Nataka) troupes.",
    icon: "🛕",
  },
  {
    title: "24/7 Accessible Grassroots Leadership",
    desc: "No locked doors or distant cities. A camp office open seven days a week where every citizen is greeted with dignity and swift grievance resolution.",
    icon: "🏛️",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      
      {/* ========================================================
          HERO SECTION: LEADER PROFILE
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-24 border-b border-slate-800">
        
        {/* Ambient Backlight */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">About Leader</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glow & Backdrop border */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-orange-500/30 to-amber-500/20 blur-2xl" />
                <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border border-orange-500/40 bg-orange-500/5" />

                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                  <img
                    src="/images/aravindgowda.jpg"
                    alt="Shri Aravindgowda Police Patil"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1000";
                    }}
                    className="w-full h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay & Captions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2">
                    <span className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                      Next MLA Candidate • Yelburga (063)
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      Shri Aravindgowda Police Patil
                    </h2>
                    <p className="text-xs text-orange-300 font-semibold">
                      Vice President, Koppal District BJP • Former Taluk Panchayat Member
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT: Biography & Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Sparkles className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
                <span>Leader Profile & Public Service Journey</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                A Leader of the Soil,{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                  A Tireless Voice for Yelburga
                </span>
              </h1>

              {/* Motto Banner */}
              <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30">
                <p className="text-sm font-bold text-orange-300">
                  🌟 Core Guiding Philosophy: "Real Help for Real People in Their Hour of Need"
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  ನೈಜ ಜನರ ಕಷ್ಟಕ್ಕೆ ನೈಜ ಸ್ಪಂದನೆ — ಪ್ರತಿಯೊಂದು ಹಳ್ಳಿಯ ಕೊನೆಯ ಮನೆಯ ಸಂಕಷ್ಟಕ್ಕೂ ನಮ್ಮ ಬದ್ಧತೆ.
                </p>
              </div>

              <p className="text-base text-slate-300 leading-relaxed">
                Shri Aravindgowda Police Patil is widely recognized across Koppal district as a dynamic, compassionate, and accessible mass leader. Having served as a dedicated Taluk Panchayat member of Yelburga and holding significant organizational responsibility as Vice President of BJP Koppal District, his life has been an unbroken journey of selfless public philanthropy and grassroots advocacy.
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                At the forefront of regional movements, he led thousands of party karyakartas and local citizens in the historic <strong className="text-white font-semibold">Ballari Chalo Padayatre</strong>, challenging misgovernance and championing regional development, irrigation rights, and administrative transparency.
              </p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-slate-400">Constituency</p>
                  <p className="text-sm font-bold text-white mt-0.5">Yelburga (063)</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-slate-400">Home District</p>
                  <p className="text-sm font-bold text-white mt-0.5">Koppal, Karnataka</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <p className="text-xs text-slate-400">Current Role</p>
                  <p className="text-sm font-bold text-orange-400 mt-0.5">Vice President, BJP Koppal</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/real-help"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-105 transition-all"
                >
                  <span>Explore Janaseva Impact</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-slate-200 hover:text-white hover:border-orange-500 transition-all"
                >
                  <span>View Photo Gallery</span>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3.5 text-sm font-bold text-orange-400 hover:bg-slate-700 transition-all"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Meet at Camp Office</span>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          FIVE CORE LEADERSHIP PILLARS
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Core Ideology & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Five Pillars of People-First Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Guiding principles that define Shri Aravindgowda's social and political service in Yelburga Constituency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-slate-800 bg-slate-900/80 hover:border-orange-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* 6th Card: Vision Quote Card */}
          <div className="p-7 rounded-3xl border border-orange-500/40 bg-gradient-to-br from-orange-600/20 via-slate-900 to-amber-600/20 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                Leader's Pledge
              </span>
              <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                "Our politics is not for personal power. It is an instrument to wipe the tears of the suffering farmer, to empower the unemployed youth, and to preserve the sacred heritage of our motherland."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs font-bold text-white">— Shri Aravindgowda Police Patil</p>
              <p className="text-[11px] text-orange-400">Next MLA Candidate • Yelburga</p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================
          INTERACTIVE PUBLIC SERVICE TIMELINE
      ======================================================== */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Chronicle of Dedication
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Public Service Milestones
            </h2>
            <p className="text-slate-400 text-sm">
              Tracing the defining moments of leadership, grassroots struggles, and triumphs for the people of Yelburga.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 sm:before:left-1/2 before:w-0.5 before:bg-slate-800">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Dot */}
                  <div className="absolute left-7 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border-2 border-orange-500 text-orange-400 z-10 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${isEven ? "sm:pl-10" : "sm:pr-10"}`}>
                    <div className="p-6 rounded-3xl border border-slate-800 bg-slate-950 hover:border-orange-500/40 transition-all duration-300 shadow-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          YELBURGA CONSTITUENCY CONNECT & CAMPAIGN OFFICE
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
              Constituency Connect
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              Always Reachable for Every Citizen of Yelburga
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you are an elder needing medical advice, a farmer requiring water agitation updates, or a village delegation presenting a community development proposal — our camp office doors in Yelburga are always open.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-orange-400" />
                Main Camp Office, Near Bus Stand, Yelburga - 583236
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-orange-400" />
                Citizen Hours: 7:30 AM – 9:00 PM Daily
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-105 transition-all"
            >
              Contact Camp Office
            </Link>
            <Link
              to="/manifesto"
              className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-slate-200 hover:text-white hover:border-orange-500 transition-all"
            >
              Read 10-Point Manifesto
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
