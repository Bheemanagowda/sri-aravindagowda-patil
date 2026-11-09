import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">
      {/* Dynamic Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-full max-w-5xl opacity-25 blur-3xl pointer-events-none">
        <div className="h-full w-full bg-gradient-to-l from-orange-400 to-amber-200 clip-path-circle" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Image Column */}
          <div className="relative lg:col-span-5">
            {/* Ambient Lighting Behind Image Frame */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 opacity-20 blur-2xl" />

            {/* Decorative Backdrop */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-orange-200/60 bg-orange-100/40" />

            {/* Main Image Container */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl transition-all duration-500 hover:shadow-orange-500/10">
              <img
                src="/images/aravindgowda.jpg"
                alt="Shri Aravindgowda Police Patil"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800";
                }}
                className="h-[700px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay & Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block rounded-lg bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  Next MLA Candidate • Yelburga (063)
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Shri Aravindgowda Police Patil
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  Vice President, BJP Koppal • Former Taluk Panchayat Member
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                  About Us
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
                  <Sparkles className="h-3 w-3 text-orange-500" />
                  Real Help in the Hour of Need
                </span>
              </div>

              {/* Single Main Section Title */}
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Shri Aravindgowda{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Police Patil
                </span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Shri Aravindgowda Police Patil is a dedicated community leader from Yelburga Taluk, Koppal district. Having served as a former Taluk Panchayat member of Yelburga and holding prominent responsibility as Vice President of BJP Koppal, he continues to champion grassroots empowerment and regional welfare.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                Recently, he actively participated in the high-profile <strong className="text-slate-900 font-semibold">Ballari Chalo padayatra and BJP Horata (agitation)</strong>, standing at the forefront of key party movements to demand justice, development, and administrative accountability for the region.
              </p>

              <p className="text-base leading-relaxed text-slate-600">
                His community initiatives center on encouraging village youth to participate in sports, supporting government schools and students, aiding temple development projects, and organizing grassroots political and social movements across Koppal district.
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-orange-500/40 hover:scale-[1.02]"
              >
                <span>Read Full Biography & Journey</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-700 hover:text-orange-600 hover:border-orange-500 transition-all shadow-sm"
              >
                <span>Connect With Us</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
