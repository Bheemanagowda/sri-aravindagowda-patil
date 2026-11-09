import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Eye,
  Newspaper,
  Play,
  Heart,
  Share2,
} from "lucide-react";

const galleryData = [
  {
    id: 1,
    title: "Ballari Chalo Padayatre Frontline Leadership",
    kannadaTitle: "ಬಳ್ಳಾರಿ ಚಲೋ ಪಾದಯಾತ್ರೆಯ ಮುಂಚೂಣಿ ನೇತೃತ್ವ",
    category: "rallies",
    categoryLabel: "Padayatra & Rallies",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200",
    date: "August 2024",
    location: "Ballari – Koppal Highway",
    description:
      "Shri Aravindgowda Police Patil marching hand-in-hand with thousands of grassroots workers during the historic Ballari Chalo Padayatre, demanding accountability and irrigation justice for North Karnataka.",
  },
  {
    id: 2,
    title: "Immediate Financial Relief for Haystack Fire Victim",
    kannadaTitle: "ಸುಟ್ಟು ಹೋದ ಮೇವಿಗೆ ಸ್ಥಳದಲ್ಲೇ ಆರ್ಥಿಕ ಪರಿಹಾರ",
    category: "seva",
    categoryLabel: "Janaseva & Relief Aid",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    date: "March 2024",
    location: "Hirewaddatti, Yelburga",
    description:
      "Visiting the damaged agricultural field of farmer Ningappa Poojar whose year-round fodder caught accidental fire, handing over immediate cash assistance to protect his livestock.",
  },
  {
    id: 3,
    title: "Canal Water & Lake Rejuvenation Ryot Sammelan",
    kannadaTitle: "ಕಾಲುವೆ ನೀರು ಮತ್ತು ಕೆರೆ ತುಂಬಿಸುವ ರೈತ ಸಮ್ಮೇಳನ",
    category: "farmers",
    categoryLabel: "Farmer Welfare",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    date: "November 2024",
    location: "Kuknoor APMC Yard",
    description:
      "Addressing over 3,000 progressive farmers and irrigation activists demanding pipeline connections for Yelburga's drying lakes and unconditional drought compensations.",
  },
  {
    id: 4,
    title: "Yelburga Taluk Youth Cricket Championship Trophy",
    kannadaTitle: "ಯಲಬುರ್ಗಾ ಯುವ ಕ್ರಿಕೆಟ್ ಟ್ರೋಫಿ ವಿತರಣೆ",
    category: "youth",
    categoryLabel: "Youth & Sports",
    image: "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&q=80&w=1200",
    date: "January 2025",
    location: "Yelburga Taluk Stadium",
    description:
      "Sponsoring high-quality sports kits and distributing awards to 32 rural village youth cricket teams, encouraging fitness, discipline, and healthy sportsmanship.",
  },
  {
    id: 5,
    title: "Village Jathra Mahothsava & Continuous Anna Dasoha",
    kannadaTitle: "ಗ್ರಾಮದ ಜಾತ್ರಾ ಮಹೋತ್ಸವ ಮತ್ತು ಮಹಾ ಅನ್ನದಾಸೋಹ",
    category: "culture",
    categoryLabel: "Temple & Cultural",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200",
    date: "February 2025",
    location: "Mudhol, Yelburga Taluk",
    description:
      "Participating in the traditional temple Rathotsava and personally serving food during the massive Anna Dasoha arranged for thousands of visiting rural devotees.",
  },
  {
    id: 6,
    title: "Education Scholarships & College Fee Handovers",
    kannadaTitle: "ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಾಲೇಜು ಶುಲ್ಕ ನೆರವು",
    category: "seva",
    categoryLabel: "Janaseva & Relief Aid",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    date: "July 2024",
    location: "Camp Office, Yelburga",
    description:
      "Handing over fee scholarship checks and competitive exam books to 85 underprivileged rural students, enabling them to pursue degrees without financial constraints.",
  },
  {
    id: 7,
    title: "Mass BJP Workers Convention & Booth Sankalpa",
    kannadaTitle: "ಬಿಜೆಪಿ ಬೂತ್ ಸಂಕಲ್ಪ ಸಮಾವೇಶ",
    category: "rallies",
    categoryLabel: "Padayatra & Rallies",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200",
    date: "December 2024",
    location: "Yelburga Town Hall",
    description:
      "Energizing booth-level karyakartas, youth leaders, and senior elders, building an unbreakable organizational foundation for the upcoming assembly elections.",
  },
  {
    id: 8,
    title: "Rural Temple Vigraha Pratishtapana Ceremony",
    kannadaTitle: "ದೇವಸ್ಥಾನ ವಿಗ್ರಹ ಪ್ರತಿಷ್ಠಾಪನಾ ಮಹೋತ್ಸವ",
    category: "culture",
    categoryLabel: "Temple & Cultural",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1200",
    date: "May 2024",
    location: "Koppal Rural Border",
    description:
      "Sponsoring stone carving and consecration of the sacred deity statue with religious rituals and prayers for village prosperity, timely rains, and peace.",
  },
  {
    id: 9,
    title: "Folk Drama (Bayalata / Nataka) Artist Felicitation",
    kannadaTitle: "ಬಯಲಾಟ ಮತ್ತು ರಂಗಭೂಮಿ ಕಲಾವಿದರಿಗೆ ಸನ್ಮಾನ",
    category: "culture",
    categoryLabel: "Temple & Cultural",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    date: "April 2024",
    location: "Hirewaddatti Stage",
    description:
      "Sponsoring complete stage sets, lighting, and sound for a 3-night Pouranika Nataka performance, and honoring senior rural folk artists who keep folklore alive.",
  },
  {
    id: 10,
    title: "Tractor & Farm Accident Hospitalization Relief",
    kannadaTitle: "ಕೃಷಿ ಅಪಘಾತದಲ್ಲಿ ಗಾಯಗೊಂಡ ರೈತನಿಗೆ ತುರ್ತು ನೆರವು",
    category: "seva",
    categoryLabel: "Janaseva & Relief Aid",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    date: "October 2024",
    location: "Koppal District Hospital",
    description:
      "Visiting farmer Hanumantappa hospitalized after a tractor rollover accident in the fields, bearing medical expenses and handing over direct family maintenance funds.",
  },
  {
    id: 11,
    title: "Kabaddi Tournament & Fitness Arena Inauguration",
    kannadaTitle: "ಗ್ರಾಮೀಣ ಕಬಡ್ಡಿ ಪಂದ್ಯಾವಳಿ ಉದ್ಘಾಟನೆ",
    category: "youth",
    categoryLabel: "Youth & Sports",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=1200",
    date: "November 2024",
    location: "Kuknoor Sports Ground",
    description:
      "Inaugurating mat-based Kabaddi facilities and motivating hundreds of village athletes to train for district and state-level sports championships.",
  },
  {
    id: 12,
    title: "Door-to-Door Janaspandana & Public Grievance Sabha",
    kannadaTitle: "ಮನೆ ಮನೆ ಜನಸ್ಪಂದನ ಮತ್ತು ಕುಂದುಕೊರತೆ ಸಭೆ",
    category: "farmers",
    categoryLabel: "Farmer Welfare",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    date: "January 2025",
    location: "Taluk Rural Hamlets",
    description:
      "Listening patiently to elderly mothers and small farmers regarding ration cards, drinking water taps, and pension issues, ensuring immediate bureaucratic follow-up.",
  },
];

const categories = [
  { id: "all", label: "All Moments (12)" },
  { id: "seva", label: "Janaseva & Crisis Relief" },
  { id: "rallies", label: "Padayatra & Rallies" },
  { id: "farmers", label: "Farmer Welfare" },
  { id: "youth", label: "Youth & Sports" },
  { id: "culture", label: "Temple & Cultural" },
];

const pressClippings = [
  {
    paper: "Vijayavani",
    date: "14 August 2024",
    headline: "ಅರವಿಂದಗೌಡ ಪಾಟೀಲ ನೇತೃತ್ವದಲ್ಲಿ ಬಳ್ಳಾರಿ ಚಲೋ ಪಾದಯಾತ್ರೆಗೆ ಭರ್ಜರಿ ಜನಬೆಂಬಲ",
    desc: "Hundreds of youth and farmers join the padayatra under Shri Aravindgowda Police Patil's leadership demanding regional rights.",
  },
  {
    paper: "Prajavani",
    date: "28 March 2024",
    headline: "ಮೇವು ಸುಟ್ಟ ರೈತನಿಗೆ ಸ್ಥಳದಲ್ಲೇ ₹50,000 ಆರ್ಥಿಕ ನೆರವು ನೀಡಿದ ಮುಖಂಡ ಅರವಿಂದಗೌಡ",
    desc: "Setting a humane example, BJP leader Aravindgowda Patil visited the disaster site and handed over immediate compensation.",
  },
  {
    paper: "Kannada Prabha",
    date: "19 November 2024",
    headline: "ಯಲಬುರ್ಗಾ ಕೆರೆಗಳಿಗೆ ಕಾಲುವೆ ನೀರು ತುಂಬಿಸಲು ಅರವಿಂದಗೌಡ ಪಾಟೀಲ ಆಗ್ರಹ",
    desc: "Addressing a massive farmers rally, Patil warned of statewide agitation if lake filling pipeline work is delayed.",
  },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      
      {/* ========================================================
          HERO BANNER
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-20 border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">Gallery</span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
              <Camera className="h-3.5 w-3.5 text-orange-400" />
              <span>Visual Chronicle • Yelburga (063)</span>
            </span>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
              Moments of Service,{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                People & Progress
              </span>
            </h1>

            {/* User Motto Banner */}
            <p className="text-sm sm:text-base font-semibold text-orange-300">
              🌟 Real Help for Real People in Their Hour of Need • Grassroots Photo Highlights
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              A vivid photographic chronicle capturing Shri Aravindgowda Police Patil’s continuous presence on the ground — from emergency farmer relief and youth sports to historic padayatras and sacred village celebrations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30 scale-105"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          PHOTO GRID
      ======================================================== */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl cursor-pointer hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 border border-orange-500/40 text-orange-300 px-3 py-1 rounded-full backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* View Icon Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-600/40">
                    <Eye className="h-4 w-4" />
                    <span>View Story</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-orange-400" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-slate-300">
                    <MapPin className="h-3 w-3 text-orange-400" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-[11px] font-bold text-orange-300/90 line-clamp-1">
                  {item.kannadaTitle}
                </p>

                <p className="text-xs text-slate-400 line-clamp-2 pt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ========================================================
          PRESS & MEDIA COVERAGE
      ======================================================== */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center justify-center gap-2">
              <Newspaper className="h-4 w-4" />
              Media Headlines
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Regional Press Coverage
            </h2>
            <p className="text-slate-400 text-sm">
              Headlines highlighting Shri Aravindgowda Police Patil’s people-first public work in leading regional newspapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pressClippings.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-800 bg-slate-950 hover:border-orange-500/40 transition shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-3 py-0.5 rounded-full border border-orange-500/30">
                    {item.paper}
                  </span>
                  <span className="text-[11px] text-slate-500">{item.date}</span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {item.headline}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL
      ======================================================== */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-orange-600 transition border border-slate-700 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Section */}
            <div className="relative h-80 sm:h-[420px] w-full bg-black overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-orange-600 transition border border-slate-700 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-orange-600 transition border border-slate-700 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Story Details Section */}
            <div className="p-6 sm:p-8 space-y-3 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                  {selectedPhoto.categoryLabel}
                </span>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-orange-400" />
                    {selectedPhoto.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-orange-400" />
                    {selectedPhoto.location}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white">
                {selectedPhoto.title}
              </h3>

              <p className="text-sm font-bold text-orange-300">
                {selectedPhoto.kannadaTitle}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {selectedPhoto.description}
              </p>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Shri Aravindgowda Police Patil • Yelburga (063)</span>
                <span className="text-orange-400 font-semibold">Real Help for Real People in Their Hour of Need</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
