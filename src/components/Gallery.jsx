
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=85",
    title: "Ballari Chalo Padayatre",
    tag: "Mass Movement",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85",
    title: "Farmer Mevu Fire Relief",
    tag: "Real Help Seva",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=85",
    title: "Canal Water Agitation",
    tag: "Farmer Welfare",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    title: "Student Fee Scholarships",
    tag: "Youth Support",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1531415074868-036b107e775a?auto=format&fit=crop&w=1200&q=85",
    title: "Rural Sports Tournaments",
    tag: "Sports Development",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
    title: "Village Jathra & Dasoha",
    tag: "Cultural Heritage",
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/30">
            <Camera className="h-3.5 w-3.5" />
            Visual Chronicle
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Moments of Service & Community
          </h2>

          <p className="mt-2 max-w-2xl mx-auto text-sm text-slate-300">
            A snapshot of grassroots public philanthropy, farmer agitations,
            youth sports tournaments, and temple festivals across Yelburga Constituency.
          </p>
        </div>

        {/* Horizontal Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((item) => (
            <Link
              to="/gallery"
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl hover:border-orange-500/50 transition-all duration-300 block"
            >
              {/* 16:9 Horizontal Image */}
              <div className="relative w-full aspect-video overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition" />

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-orange-400 px-2.5 py-1 rounded-full border border-orange-500/30 backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Image Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-bold group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View full story</span>
                    <ArrowRight className="h-3 w-3 text-orange-400" />
                  </p>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Explore Gallery Button */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-orange-600/30 transition-all hover:scale-105 text-sm"
          >
            <span>Explore Complete Gallery & Lightbox</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
