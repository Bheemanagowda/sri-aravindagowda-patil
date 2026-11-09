import { useState } from "react";
import { Link } from "react-router-dom";
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
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";
import Manifesto from "../components/Manifesto";

const ManifestoPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-12 border-b border-slate-800">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">10-Point Manifesto</span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
              <span>Sankalpa Patra • Yelburga Constituency (063)</span>
            </span>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
              A 10-Point Roadmap for{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Yelburga’s Golden Era
              </span>
            </h1>

            <p className="text-sm sm:text-base font-semibold text-orange-300">
              🌟 Real Help for Real People in Their Hour of Need • Clear, Actionable Guarantees
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Shri Aravindgowda Police Patil’s comprehensive covenant with the citizens of Yelburga and Kuknoor — addressing irrigation, healthcare, IT jobs, education, and village infrastructure.
            </p>
          </div>

        </div>
      </section>

      {/* Main Manifesto Guarantees Grid (Using our full component) */}
      <div className="bg-white text-slate-900">
        <Manifesto />
      </div>

      {/* Pledge Bottom Banner */}
      <section className="py-16 bg-slate-950 border-t border-slate-800 text-center text-white">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h3 className="text-2xl font-bold">Support Shri Aravindgowda Police Patil</h3>
          <p className="text-sm text-slate-400">
            Join thousands of citizens across Yelburga Constituency in building a self-reliant, prosperous future.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-105 transition"
            >
              <Vote className="h-4 w-4" />
              <span>Join Campaign / Reach Out</span>
            </Link>
            <Link
              to="/real-help"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-bold text-slate-200 hover:text-white transition"
            >
              <span>Explore Janaseva Seva</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManifestoPage;
