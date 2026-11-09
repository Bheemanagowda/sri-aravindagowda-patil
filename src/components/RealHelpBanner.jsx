import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ShieldAlert,
  GraduationCap,
  Landmark,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const RealHelpBanner = ({ hideCta = false }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-t border-slate-800">
      {/* Radiant Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl border border-orange-500/30 bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-orange-500">
            <HeartHandshake className="w-80 h-80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
              <span>Namma Janaseva • Dedicated Public Philanthropy</span>
            </div>

            {/* Core Title requested by user */}
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
              Real Help for Real People in{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Their Hour of Need
              </span>
            </h2>

            {/* Kannada & English Subtitles */}
            <p className="text-sm sm:text-base font-semibold text-orange-300/90">
              ನೈಜ ಜನರ ಕಷ್ಟಕ್ಕೆ ನೈಜ ಸ್ಪಂದನೆ • ಯಾರೂ ಅನಾಥರಲ್ಲ, ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ನಮ್ಮ ಬೆಂಬಲ
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Whenever tragedy strikes in Yelburga Constituency — be it a farmer losing crops or fodder to fire, an accident in the fields, a student unable to pay fees, or a rural temple requiring construction — <strong className="text-white font-semibold">Shri Aravindgowda Police Patil</strong> stands in the front line providing immediate personal assistance and financial relief.
            </p>

            {/* 4 Feature Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Farmer Crisis</p>
                  <p className="text-[11px] text-slate-400">Accident & Fodder Aid</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Student Welfare</p>
                  <p className="text-[11px] text-slate-400">Direct Fee Aid</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                  <Landmark className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Temple & Heritage</p>
                  <p className="text-[11px] text-slate-400">Vigraha & Fair Dasoha</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <HeartHandshake className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Social Support</p>
                  <p className="text-[11px] text-slate-400">Kalyan & Medical</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            {!hideCta && (
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/real-help"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-amber-400 transition-all duration-300 hover:scale-105"
                >
                  <span>Explore All Janaseva Initiatives</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/90 px-6 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-white hover:border-orange-500/40 transition-all duration-300"
                >
                  <PhoneCall className="h-4 w-4 text-orange-400" />
                  <span>Request Emergency Relief / Grievance</span>
                </Link>

                <a
                  href="https://wa.me/919448012345?text=Namaste%20Shri%20Aravindgowda%20Police%20Patil%20Office,%20I%20need%20emergency%20assistance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 px-5 py-3.5 text-sm font-bold text-emerald-300 hover:bg-emerald-600/30 transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Seva Helpline</span>
                </a>
              </div>
            )}

            {/* Live Helpline Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <strong className="text-slate-300">24/7 Citizen Helpline:</strong> +91 94480 12345
              </span>
              <span>•</span>
              <span>
                <strong className="text-slate-300">Taluk Camp Office:</strong> Open Every Day 7:30 AM – 9:00 PM
              </span>
              <span>•</span>
              <span className="text-orange-400 font-medium">
                100% Direct Cash/Aid Handover — No Middlemen
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RealHelpBanner;
