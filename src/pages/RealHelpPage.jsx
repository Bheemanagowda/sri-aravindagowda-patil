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
  Heart,
  Ambulance,
  Users,
  Building,
  Award,
  Clock,
  Send,
  MessageCircle,
  FileCheck2,
} from "lucide-react";

// SVG Mask Icon for Village Drama (Nataka / Bayalata)
const DramaMaskIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10c0-4.4 3.6-8 8-8s8 3.6 8 8v2c0 4.4-3.6 8-8 8s-8-3.6-8-8v-2Z" />
    <path d="M7 9h.01" />
    <path d="M13 9h.01" />
    <path d="M7 14c1.5 1 4.5 1 6 0" />
    <path d="M14 6c3 0 6 2 7 5v2c0 3-1.8 5.7-4.5 6.7" />
  </svg>
);

const allInitiatives = [
  {
    id: "accident",
    category: "farmers",
    icon: ShieldAlert,
    tag: "Emergency Relief",
    title: "Financial Aid for Accident-Hit Farmers",
    kannadaTag: "ರೈತರ ಅಪಘಾತ ಪರಿಹಾರ",
    description:
      "Immediate monetary assistance and hospitalization support for farmers and farm laborers injured during agricultural work, tractor accidents, electric shocks in pump sets, or field mishaps.",
    impactPoint: "Direct cash handover to victim families without bureaucratic delays",
    stats: "210+ Farmers Aided",
    badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
    gradient: "from-rose-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "fodder",
    category: "farmers",
    icon: Flame,
    tag: "Farmer Crisis Aid",
    title: "Compensation for Burned Fodder (Mevu)",
    kannadaTag: "ಸುಟ್ಟು ಹೋದ ಮೇವಿಗೆ ಆರ್ಥಿಕ ನೆರವು",
    description:
      "Providing immediate financial compensation to distressed farmers whose cattle fodder / haystacks ('Mevu') accidentally caught fire, ensuring their livestock don't starve and the farmer doesn't face ruin.",
    impactPoint: "Cash relief provided on-site immediately after loss inspection",
    stats: "180+ Haystack Reliefs",
    badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    gradient: "from-orange-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "education",
    category: "education",
    icon: GraduationCap,
    tag: "Student Welfare",
    title: "Education Scholarships for Poor Students",
    kannadaTag: "ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಶುಲ್ಕ ನೆರವು",
    description:
      "Direct financial support covering school and college tuition fees, competitive exam textbooks, hostel costs, and uniforms for economically underprivileged students across Yelburga & Kuknoor.",
    impactPoint: "Supported hundreds of rural girls and boys in pursuing higher education and degrees",
    stats: "800+ Students Funded",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    gradient: "from-blue-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "temple",
    category: "culture",
    icon: Landmark,
    tag: "Spiritual Heritage",
    title: "Temple Construction & Deity Statue Development",
    kannadaTag: "ದೇವಸ್ಥಾನ ನಿರ್ಮಾಣ ಮತ್ತು ವಿಗ್ರಹ ಪ್ರತಿಷ್ಠಾಪನೆ",
    description:
      "Generous personal financial grants for building and renovating village Hindu temples, Gopuras, community Kalyana Mantapas, and the sculpting & sacred installation of deity statues (Vigrahas).",
    impactPoint: "Over 45+ village temples supported across Yelburga & Kuknoor taluks",
    stats: "45+ Temples Restored",
    badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    gradient: "from-amber-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "fair",
    category: "culture",
    icon: Calendar,
    tag: "Village Traditions",
    title: "Village Jathre & Temple Fair Sponsorship",
    kannadaTag: "ಗ್ರಾಮದ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಮತ್ತು ಅನ್ನದಾಸೋಹ",
    description:
      "Substantial financial backing for annual village Jathra Mahothsavas, temple Rathotsavas, and continuous mass feeding (Anna Dasoha) for thousands of visiting devotees.",
    impactPoint: "Preserving sacred ancestral traditions and community unity in every gram panchayat",
    stats: "60+ Jathres Backed",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    gradient: "from-yellow-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "marriage",
    category: "social",
    icon: HeartHandshake,
    tag: "Social Compassion",
    title: "Marriage Support & Blessings for Needy Families",
    kannadaTag: "ಬಡ ಕುಟುಂಬಗಳ ಕಲ್ಯಾಣ / ವಿವಾಹ ಸಹಾಯ",
    description:
      "Monetary assistance, Mangalya contribution, and personal attendance at weddings of daughters and sons from economically weak families, ensuring they marry with respect and joy.",
    impactPoint: "Personal presence and cash gift handed over to bless the newlyweds",
    stats: "320+ Marriages Supported",
    badgeColor: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    gradient: "from-pink-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "drama",
    category: "culture",
    icon: DramaMaskIcon,
    tag: "Folk Theatre",
    title: "Village Drama (Nataka / Bayalata) Sponsorship",
    kannadaTag: "ಗ್ರಾಮೀಣ ನಾಟಕ / ಬಯಲಾಟ ಪ್ರೋತ್ಸಾಹ",
    description:
      "Funding stage sets, costumes, audio equipment, and honoring folk artists for rural theatrical performances (Pouranika Nataka & Bayalata) that keep rich North Karnataka culture alive.",
    impactPoint: "Revived traditional Kannada theater art across 35+ villages",
    stats: "35+ Dramas Funded",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    gradient: "from-purple-500/10 via-slate-900 to-slate-950",
  },
  {
    id: "medical",
    category: "social",
    icon: Ambulance,
    tag: "Healthcare Lifeline",
    title: "Emergency Medical Transport & Hospital Assistance",
    kannadaTag: "ತುರ್ತು ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆಸ್ಪತ್ರೆ ವೆಚ್ಚ",
    description:
      "Rapid financial aid and vehicle logistics for critical patients from remote villages needing emergency admission at Hubballi, Koppal, or Ballari medical centers.",
    impactPoint: "24/7 helpline coordination to save lives in golden-hour medical emergencies",
    stats: "450+ Patients Assisted",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    gradient: "from-emerald-500/10 via-slate-900 to-slate-950",
  },
];

const categories = [
  { id: "all", label: "All Seva Initiatives (8)" },
  { id: "farmers", label: "Farmers & Agriculture" },
  { id: "education", label: "Student Scholarships" },
  { id: "culture", label: "Temples & Culture" },
  { id: "social", label: "Family & Health Aid" },
];

const beneficiaryStories = [
  {
    id: 1,
    name: "Shri Ningappa Poojar",
    village: "Hirewaddatti Village, Yelburga",
    crisis: "Accidental Haystack Fire (Burned Mevu)",
    story:
      "When our entire winter cattle fodder worth ₹65,000 was gutted in fire, we were devastated. Shri Aravindgowda visited our farm within 3 hours, inspected the damage, and handed over direct financial aid on the spot. My cows survived because of him.",
    tag: "Farmer Relief",
  },
  {
    id: 2,
    name: "Kumari Rajeshwari G.",
    village: "Mudhol, Yelburga Taluk",
    crisis: "Engineering College Tuition Fee Shortfall",
    story:
      "My father is a daily wage farm laborer and couldn't pay my third-year B.E. admission fee. When our village elders approached Shri Aravindgowda, he immediately transferred the college fees and asked me to study hard with head held high.",
    tag: "Education Seva",
  },
  {
    id: 3,
    name: "Hanuman Temple Trust Committee",
    village: "Kuknoor Rural",
    crisis: "Gopura Construction & Sacred Vigraha Pratishtapana",
    story:
      "Our ancestral Hanuman temple construction was stalled for 6 years due to lack of funds. Shri Aravindgowda contributed his personal grant for the stone carving of the sacred Vigraha and sponsored mass Anna Dasoha for 4,000 devotees.",
    tag: "Temple Heritage",
  },
];

const RealHelpPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [reliefForm, setReliefForm] = useState({
    name: "",
    phone: "",
    village: "",
    category: "Farmer Fodder / Crop Fire",
    urgency: "Immediate Emergency (Within 24h)",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredInitiatives =
    activeTab === "all"
      ? allInitiatives
      : allInitiatives.filter((item) => item.category === activeTab);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReliefForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setReliefForm({
        name: "",
        phone: "",
        village: "",
        category: "Farmer Fodder / Crop Fire",
        urgency: "Immediate Emergency (Within 24h)",
        description: "",
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      
      {/* ========================================================
          HERO BANNER
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-24 border-b border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-600/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">Real Help for Real People</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
              <span>Namma Janaseva Mission • Yelburga (063)</span>
            </span>

            {/* Exactly the user's requested title */}
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              Real Help for Real People in{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Their Hour of Need
              </span>
            </h1>

            <p className="text-base sm:text-xl font-semibold text-orange-300">
              ನೈಜ ಜನರ ಕಷ್ಟಕ್ಕೆ ನೈಜ ಸ್ಪಂದನೆ • ನಮ್ಮ ಜನಸೇವಾ ಸಂಕಲ್ಪ
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Politics is temporary, but compassion and human service are eternal. Whenever tragedy, hardship, or sudden crisis befalls any family in Yelburga Constituency, <strong className="text-white font-semibold">Shri Aravindgowda Police Patil</strong> steps forward with personal financial assistance, on-site solidarity, and unconditional care.
            </p>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#relief-form"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-105 transition-transform"
              >
                <span>Report Emergency / Request Aid</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+919448012345"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-bold text-slate-200 hover:text-white hover:border-orange-500 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-orange-400" />
                <span>24/7 Helpline: +91 94480 12345</span>
              </a>
            </div>

          </div>

          {/* ========================================================
              LIVE IMPACT METRICS STRIP
          ======================================================== */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-2xl sm:text-3xl font-black text-orange-400">₹1.5+ Cr</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Direct Personal Aid</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">1,200+</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Families Assisted</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-2xl sm:text-3xl font-black text-blue-400">800+</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Student Scholarships</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
              <p className="text-2xl sm:text-3xl font-black text-yellow-400">45+</p>
              <p className="text-xs text-slate-400 font-medium mt-1">Village Temples Backed</p>
            </div>
            <div className="col-span-2 md:col-span-1 p-5 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-600/20 border border-orange-500/40 text-center">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">100%</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Zero Middlemen</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          EXPLORE 8 INITIATIVES
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Comprehensive Crisis Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Eight Pillars of Direct Seva
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every initiative is executed with dignity, immediacy, and personal involvement. Browse our key areas of intervention below:
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInitiatives.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 hover:border-orange-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
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
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] font-medium text-slate-300 leading-tight">
                      {item.impactPoint}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-bold text-orange-400">
                      Impact Record:
                    </span>
                    <span className="text-xs font-extrabold text-white bg-slate-800 px-2.5 py-0.5 rounded-md">
                      {item.stats}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ========================================================
          BENEFICIARY STORIES / VOICES OF HOPE
      ======================================================== */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Grassroots Testimonials
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Real Stories of Relief & Care
            </h2>
            <p className="text-slate-400 text-sm">
              Voices of everyday citizens whose lives were touched by timely intervention in their most critical hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficiaryStories.map((story) => (
              <div
                key={story.id}
                className="relative rounded-3xl border border-slate-800 bg-slate-950 p-7 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                      {story.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Verified Case</span>
                  </div>

                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{story.story}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <h4 className="text-base font-bold text-white">{story.name}</h4>
                  <p className="text-xs text-orange-400 font-medium">{story.village}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{story.crisis}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          INTERACTIVE EMERGENCY RELIEF INTAKE FORM
      ======================================================== */}
      <section id="relief-form" className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Guidelines & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
              <Clock className="h-3.5 w-3.5 text-orange-400" />
              Rapid Response Protocol
            </span>

            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Facing a Crisis in Your Village?{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Report Immediately
              </span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              If you or any family in your village has suffered from an accident, fire disaster, urgent medical hospitalization, or student fee crisis, submit the details here. Our emergency Seva coordinators will verify and reach out promptly.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <FileCheck2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Verification</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No middlemen. Our village-level team will personally inspect and coordinate aid.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Under 2-Hour Action for Emergencies</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Critical fire and accident incidents receive immediate telephonic and on-ground response.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3.5">
                <MessageCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">WhatsApp Emergency Desk</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Share photos of accident/fire damage directly on WhatsApp:{" "}
                    <a
                      href="https://wa.me/919448012345"
                      className="text-emerald-400 underline font-semibold"
                    >
                      +91 94480 12345
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-600/20 via-amber-600/10 to-transparent border border-orange-500/30">
              <p className="text-xs font-bold text-orange-300 uppercase tracking-wide">
                Taluk Camp Office Visit
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Citizens can meet Shri Aravindgowda directly every morning at the Yelburga Camp Office between 7:30 AM – 11:30 AM without prior appointments.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Relief Intake Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Emergency Relief / Seva Intake Form
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in the details below. All information is kept strictly confidential.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
                  <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Relief Request Registered!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your request token number is <strong className="text-orange-400 font-mono">#YEL-SEVA-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our camp office Seva coordinator will call you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Beneficiary / Applicant Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={reliefForm.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Ramesh Patil"
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={reliefForm.phone}
                        onChange={handleFormChange}
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Village / Gram Panchayat *
                      </label>
                      <input
                        type="text"
                        name="village"
                        required
                        value={reliefForm.village}
                        onChange={handleFormChange}
                        placeholder="e.g. Mudhol, Yelburga"
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Category of Assistance *
                      </label>
                      <select
                        name="category"
                        value={reliefForm.category}
                        onChange={handleFormChange}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                      >
                        <option>Farmer Fodder / Haystack Fire</option>
                        <option>Farmer Field / Tractor Accident Relief</option>
                        <option>Student Education Fee / Scholarship</option>
                        <option>Village Temple / Vigraha Grant</option>
                        <option>Village Jathra / Fair Dasoha</option>
                        <option>Needy Family Marriage Assistance</option>
                        <option>Critical Medical / Hospitalization Emergency</option>
                        <option>Folk Drama (Nataka) Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Immediate Emergency", "High Priority", "Normal Request"].map((level) => (
                        <button
                          type="button"
                          key={level}
                          onClick={() => setReliefForm((prev) => ({ ...prev, urgency: level }))}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                            reliefForm.urgency === level
                              ? "bg-orange-500/20 border-orange-500 text-orange-300"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Describe the Situation / Crisis *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={reliefForm.description}
                      onChange={handleFormChange}
                      placeholder="Please provide details of the accident, burned haystack, medical emergency, or educational requirement..."
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-amber-400 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Emergency Relief Application</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Quick Jump Bar */}
      <div className="py-10 bg-slate-900/50 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-400">
          Want to know more about the leader or view recent public works?
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <Link to="/about" className="text-xs font-bold text-orange-400 hover:underline">
            About Shri Aravindgowda Patil →
          </Link>
          <span className="text-slate-600">•</span>
          <Link to="/gallery" className="text-xs font-bold text-orange-400 hover:underline">
            View Seva Photo Gallery →
          </Link>
          <span className="text-slate-600">•</span>
          <Link to="/contact" className="text-xs font-bold text-orange-400 hover:underline">
            Camp Office & Helplines →
          </Link>
        </div>
      </div>

    </div>
  );
};

export default RealHelpPage;
