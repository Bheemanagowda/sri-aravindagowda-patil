import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ChevronRight,
  QrCode,
  Sparkles,
  Code2,
} from "lucide-react";

// Crisp SVG Brand Icons
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 9v6l5.194-3Z" clipRule="evenodd" />
  </svg>
);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Leader", href: "/about" },
  { name: "Real Help (Janaseva)", href: "/real-help" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "10-Point Manifesto", href: "/manifesto" },
  { name: "Grievance / Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://facebook.com",
    hoverColor: "hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/50",
  },
  {
    name: "Twitter / X",
    icon: TwitterIcon,
    href: "https://twitter.com",
    hoverColor: "hover:bg-slate-700/40 hover:text-white hover:border-slate-500",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com",
    hoverColor: "hover:bg-[#E4405F]/20 hover:text-[#E4405F] hover:border-[#E4405F]/50",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://linkedin.com",
    hoverColor: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/50",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "https://youtube.com",
    hoverColor: "hover:bg-[#FF0000]/20 hover:text-[#FF0000] hover:border-[#FF0000]/50",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative Gradient Glows matching theme */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          
          {/* COLUMN 1: Brand, About & Social Media */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                  Community Leadership
                </span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">
                Shri Aravindgowda{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Police Patil
                </span>
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 pr-2">
              Dedicated to public welfare, rural empowerment, and progressive development
              across Yelburga and Koppal District. Striving tirelessly to bring positive change
              to our community through transparent and accessible governance.
            </p>

            {/* Social Media Links */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Follow & Connect
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`h-9 w-9 rounded-lg border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 shadow-sm ${social.hoverColor}`}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="group inline-flex items-center text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orange-400 mr-1.5" />
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="group inline-flex items-center text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orange-400 mr-1.5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: QR Code Section */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <QrCode className="h-4 w-4 text-orange-400" />
              Digital Connect
            </h4>
            
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm max-w-[240px] shadow-xl group hover:border-orange-500/40 transition-colors duration-300">
              <div className="relative bg-white p-3 rounded-xl flex items-center justify-center overflow-hidden shadow-inner">
                <svg
                  className="w-36 h-36"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="#0f172a" />
                  <rect x="9" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                  <rect x="13" y="13" width="12" height="12" rx="1.5" fill="#ea580c" />

                  <rect x="67" y="5" width="28" height="28" rx="4" fill="#0f172a" />
                  <rect x="71" y="9" width="20" height="20" rx="2" fill="#ffffff" />
                  <rect x="75" y="13" width="12" height="12" rx="1.5" fill="#ea580c" />

                  <rect x="5" y="67" width="28" height="28" rx="4" fill="#0f172a" />
                  <rect x="9" y="71" width="20" height="20" rx="2" fill="#ffffff" />
                  <rect x="13" y="75" width="12" height="12" rx="1.5" fill="#ea580c" />

                  <rect x="37" y="7" width="5" height="5" fill="#0f172a" />
                  <rect x="47" y="7" width="5" height="9" fill="#0f172a" />
                  <rect x="57" y="11" width="5" height="5" fill="#0f172a" />
                  <rect x="37" y="17" width="9" height="5" fill="#0f172a" />
                  <rect x="51" y="17" width="5" height="5" fill="#0f172a" />
                  <rect x="41" y="27" width="5" height="5" fill="#ea580c" />
                  <rect x="51" y="27" width="9" height="5" fill="#0f172a" />

                  <rect x="7" y="37" width="5" height="5" fill="#0f172a" />
                  <rect x="17" y="37" width="5" height="9" fill="#0f172a" />
                  <rect x="27" y="37" width="5" height="5" fill="#0f172a" />
                  <rect x="37" y="37" width="5" height="5" fill="#0f172a" />
                  <rect x="47" y="37" width="7" height="7" fill="#ea580c" />
                  <rect x="59" y="37" width="5" height="5" fill="#0f172a" />
                  <rect x="69" y="37" width="9" height="5" fill="#0f172a" />
                  <rect x="83" y="37" width="9" height="5" fill="#0f172a" />

                  <rect x="7" y="51" width="5" height="9" fill="#0f172a" />
                  <rect x="17" y="51" width="9" height="5" fill="#0f172a" />
                  <rect x="37" y="47" width="5" height="9" fill="#0f172a" />
                  <rect x="47" y="49" width="9" height="5" fill="#0f172a" />
                  <rect x="61" y="47" width="5" height="9" fill="#ea580c" />
                  <rect x="71" y="47" width="5" height="5" fill="#0f172a" />
                  <rect x="81" y="47" width="11" height="5" fill="#0f172a" />

                  <rect x="37" y="67" width="9" height="5" fill="#0f172a" />
                  <rect x="51" y="67" width="5" height="9" fill="#0f172a" />
                  <rect x="61" y="67" width="9" height="5" fill="#0f172a" />
                  <rect x="75" y="67" width="5" height="5" fill="#0f172a" />
                  <rect x="85" y="67" width="7" height="7" fill="#0f172a" />

                  <rect x="37" y="77" width="5" height="5" fill="#0f172a" />
                  <rect x="47" y="81" width="9" height="5" fill="#0f172a" />
                  <rect x="61" y="77" width="5" height="9" fill="#0f172a" />
                  <rect x="71" y="81" width="5" height="5" fill="#ea580c" />
                  <rect x="81" y="79" width="9" height="5" fill="#0f172a" />

                  <rect x="37" y="87" width="9" height="5" fill="#0f172a" />
                  <rect x="51" y="91" width="5" height="5" fill="#0f172a" />
                  <rect x="61" y="89" width="9" height="5" fill="#0f172a" />
                  <rect x="77" y="89" width="15" height="5" fill="#0f172a" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-orange-500 text-white rounded-md p-1 shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs font-semibold text-white">Scan to Connect</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Quick WhatsApp & Grievance Cell</p>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Contact Details */}
          <div id="footer-contact" className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Contact Details
            </h4>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-md bg-slate-900 border border-slate-800 text-orange-400 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-300">
                    Phone / Helpline
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="hover:text-orange-400 transition-colors"
                  >
                    +91 98765 43210 / +91 8534 220112
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-md bg-slate-900 border border-slate-800 text-orange-400 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-300">
                    Email Address
                  </span>
                  <a
                    href="mailto:contact@aravindgowdapatil.in"
                    className="hover:text-orange-400 transition-colors break-all"
                  >
                    contact@aravindgowdapatil.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-md bg-slate-900 border border-slate-800 text-orange-400 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-300">
                    Office Address
                  </span>
                  <p className="leading-snug">
                    Main Road, Yelburga Constituency Office,
                    <br />
                    Koppal District, Karnataka - 583236
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <div className="mt-0.5 p-1.5 rounded-md bg-slate-900 border border-slate-800 text-orange-400 shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase text-slate-300">
                    Working Hours
                  </span>
                  <p className="leading-snug">
                    Mon – Sat: 9:00 AM – 6:00 PM
                    <br />
                    <span className="text-orange-400/90 text-xs">
                      Sunday: Citizen Field & Village Visits
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================
            BOTTOM BAR (Sub-Footer + Developer Credits)
        ======================================================== */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          {/* Copyright Info */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Shri Aravindgowda Police Patil. All rights reserved.
          </p>

          {/* Developer Credit Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-400 shadow-sm">
            <Code2 className="h-3.5 w-3.5 text-orange-400" />
            <span>
              Designed &amp; Developed by{" "}
              <span className="font-semibold text-slate-200 hover:text-orange-400 transition-colors">
                Bheemanagowda Police Patil
              </span>{" "}
              <span className="text-orange-400/80">(Vanajabhavi)</span>
            </span>
          </div>

          {/* Actions & Scroll to top */}
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Terms of Service
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-400 hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
