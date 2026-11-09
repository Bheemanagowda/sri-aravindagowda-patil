import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Building,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "How fast does the emergency relief team respond for farm fire or accident cases?",
    a: "Under the 'Real Help for Real People in Their Hour of Need' protocol, urgent crisis alerts such as fodder fires, tractor accidents, or hospital emergencies are verified and addressed within 2 to 4 hours with on-the-ground support.",
  },
  {
    q: "When can citizens meet Shri Aravindgowda Police Patil personally?",
    a: "Shri Aravindgowda conducts open public meetings at his Yelburga Main Camp Office every morning between 7:30 AM and 11:30 AM. No prior appointment is required for ordinary citizens and farmers.",
  },
  {
    q: "Can our village youth group request sports kits or library study materials?",
    a: "Yes! Any registered youth club, cricket team, or student forum from Yelburga or Kuknoor taluks can submit an inquiry through this portal or visit the camp office to receive sports kits and competitive exam books.",
  },
  {
    q: "How can I track the status of my submitted grievance?",
    a: "Once you submit a grievance or relief request, you receive a unique token number. You can quote this token number to our 24/7 helpline at +91 94480 12345 or WhatsApp desk for real-time status updates.",
  },
];

const ContactPage = () => {
  const [activeFormTab, setActiveFormTab] = useState("grievance");
  const [openFaq, setOpenFaq] = useState(null);

  // Grievance Form State
  const [grievanceData, setGrievanceData] = useState({
    name: "",
    phone: "",
    village: "",
    category: "Farmer Emergency & Mevu Fire",
    details: "",
    priority: "High Priority",
  });
  const [isSubmittingGrievance, setIsSubmittingGrievance] = useState(false);
  const [grievanceSubmitted, setGrievanceSubmitted] = useState(false);

  // Appointment Form State
  const [apptData, setApptData] = useState({
    name: "",
    phone: "",
    village: "",
    date: "",
    timeSlot: "Morning (8:00 AM – 11:00 AM)",
    purpose: "Village Community Delegation",
    notes: "",
  });
  const [isSubmittingAppt, setIsSubmittingAppt] = useState(false);
  const [apptSubmitted, setApptSubmitted] = useState(false);

  // Volunteer Form State
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    phone: "",
    village: "",
    age: "",
    interest: "Youth & Sports Wing",
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handleGrievanceSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingGrievance(true);
    setTimeout(() => {
      setIsSubmittingGrievance(false);
      setGrievanceSubmitted(true);
      setGrievanceData({
        name: "",
        phone: "",
        village: "",
        category: "Farmer Emergency & Mevu Fire",
        details: "",
        priority: "High Priority",
      });
    }, 700);
  };

  const handleApptSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingAppt(true);
    setTimeout(() => {
      setIsSubmittingAppt(false);
      setApptSubmitted(true);
      setApptData({
        name: "",
        phone: "",
        village: "",
        date: "",
        timeSlot: "Morning (8:00 AM – 11:00 AM)",
        purpose: "Village Community Delegation",
        notes: "",
      });
    }, 700);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500 selection:text-white">
      
      {/* ========================================================
          HERO BANNER
      ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-16 pb-20 border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">Contact Us</span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-orange-400 animate-pulse" />
              <span>24/7 Citizen Outreach • Yelburga Camp Office</span>
            </span>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
              Connect with Shri Aravindgowda{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Police Patil
              </span>
            </h1>

            {/* User Motto Banner */}
            <p className="text-sm sm:text-base font-semibold text-orange-300">
              🌟 Real Help for Real People in Their Hour of Need • Always Within Your Reach
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Have an urgent village grievance, farmer crisis, student scholarship request, or want to schedule a personal meeting with the leader? Reach out below.
            </p>
          </div>

          {/* Quick Contact Cards Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1 */}
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Main Camp Office</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Near Old Bus Stand, Main Road, Yelburga – 583236, Koppal District.
                </p>
              </div>
              <p className="text-[11px] font-bold text-orange-400 border-t border-slate-800/80 pt-3">
                Open Daily: 7:30 AM – 9:00 PM
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  <Building className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">Kuknoor Kendra</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Market Road, Near Mahamaya Temple Circle, Kuknoor – 583232.
                </p>
              </div>
              <p className="text-[11px] font-bold text-blue-400 border-t border-slate-800/80 pt-3">
                Coordinators Available Mon – Sat
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">24/7 Helpline</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Call directly for urgent crisis, tractor accidents, or hospital relief.
                </p>
              </div>
              <a
                href="tel:+919448012345"
                className="text-xs font-bold text-emerald-400 border-t border-slate-800/80 pt-3 hover:underline"
              >
                +91 94480 12345
              </a>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-3 w-fit rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">WhatsApp Seva Desk</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Send photo of damaged fodder, village issue, or hospital slips.
                </p>
              </div>
              <a
                href="https://wa.me/919448012345?text=Namaste%20Aravindgowda%20Patil%20Office"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 border-t border-slate-800/80 pt-3 hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          MULTI-TAB CITIZEN ACTION PORTAL
      ======================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Form Selector Tabs */}
        <div className="max-w-2xl mx-auto flex items-center justify-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 gap-2 mb-12">
          <button
            onClick={() => setActiveFormTab("grievance")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeFormTab === "grievance"
                ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Public Grievance / Relief
          </button>

          <button
            onClick={() => setActiveFormTab("appointment")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeFormTab === "appointment"
                ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Book Appointment
          </button>

          <button
            onClick={() => setActiveFormTab("volunteer")}
            className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeFormTab === "volunteer"
                ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md shadow-orange-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Join as Volunteer
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Active Form Area */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              {/* TAB 1: GRIEVANCE / RELIEF */}
              {activeFormTab === "grievance" && (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Direct Citizen Redressal
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Register Public Grievance or Relief Need
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Reviewed directly by Shri Aravindgowda Police Patil’s coordination team.
                    </p>
                  </div>

                  {grievanceSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                      <div className="h-14 w-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Grievance Registered Successfully</h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Your tracking token is <strong className="text-orange-400 font-mono">#YEL-GRV-{Math.floor(1000 + Math.random() * 9000)}</strong>. A designated officer will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setGrievanceSubmitted(false)}
                        className="px-6 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-700"
                      >
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleGrievanceSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={grievanceData.name}
                            onChange={(e) => setGrievanceData({ ...grievanceData, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Contact Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={grievanceData.phone}
                            onChange={(e) => setGrievanceData({ ...grievanceData, phone: e.target.value })}
                            placeholder="10-digit mobile number"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Village / Ward *
                          </label>
                          <input
                            type="text"
                            required
                            value={grievanceData.village}
                            onChange={(e) => setGrievanceData({ ...grievanceData, village: e.target.value })}
                            placeholder="e.g. Hirewaddatti / Yelburga"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Category *
                          </label>
                          <select
                            value={grievanceData.category}
                            onChange={(e) => setGrievanceData({ ...grievanceData, category: e.target.value })}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          >
                            <option>Farmer Emergency & Mevu Fire</option>
                            <option>Drinking Water & Lake Rejuvenation</option>
                            <option>Roads & Rural Infrastructure</option>
                            <option>Student College Fee Support</option>
                            <option>Hospital & Medical Aid</option>
                            <option>Temple / Jathra Proposal</option>
                            <option>General Public Grievance</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Priority
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {["Emergency (Within 4h)", "High Priority", "Normal Follow-up"].map((p) => (
                            <button
                              type="button"
                              key={p}
                              onClick={() => setGrievanceData({ ...grievanceData, priority: p })}
                              className={`py-2 px-3 rounded-lg text-xs font-bold border transition ${
                                grievanceData.priority === p
                                  ? "bg-orange-500/20 border-orange-500 text-orange-300"
                                  : "bg-slate-950 border-slate-800 text-slate-400"
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Detailed Description of Grievance *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={grievanceData.details}
                          onChange={(e) => setGrievanceData({ ...grievanceData, details: e.target.value })}
                          placeholder="Please provide full details of the issue, exact street or farm location..."
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingGrievance}
                        className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                      >
                        <Send className="h-4 w-4" />
                        <span>Register Public Grievance</span>
                      </button>
                    </form>
                  )}
                </>
              )}

              {/* TAB 2: APPOINTMENT */}
              {activeFormTab === "appointment" && (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Camp Office Meeting
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Schedule Appointment with Leader
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Meet Shri Aravindgowda Police Patil to discuss community matters or delegations.
                    </p>
                  </div>

                  {apptSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                      <div className="h-14 w-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Meeting Request Received</h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Our camp secretary will confirm the appointment slot via phone call.
                      </p>
                      <button
                        onClick={() => setApptSubmitted(false)}
                        className="px-6 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-200"
                      >
                        Book Another Slot
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApptSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Delegation Head / Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={apptData.name}
                            onChange={(e) => setApptData({ ...apptData, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={apptData.phone}
                            onChange={(e) => setApptData({ ...apptData, phone: e.target.value })}
                            placeholder="10-digit number"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={apptData.date}
                            onChange={(e) => setApptData({ ...apptData, date: e.target.value })}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Time Window *
                          </label>
                          <select
                            value={apptData.timeSlot}
                            onChange={(e) => setApptData({ ...apptData, timeSlot: e.target.value })}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          >
                            <option>Morning (8:00 AM – 11:00 AM)</option>
                            <option>Afternoon (2:00 PM – 4:00 PM)</option>
                            <option>Evening (6:00 PM – 8:30 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Purpose of Meeting *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={apptData.notes}
                          onChange={(e) => setApptData({ ...apptData, notes: e.target.value })}
                          placeholder="Please state topic to be discussed (e.g. Village Temple invitation, Farmer water issue)..."
                          className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingAppt}
                        className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Calendar className="h-4 w-4" />
                        <span>Confirm Appointment Request</span>
                      </button>
                    </form>
                  )}
                </>
              )}

              {/* TAB 3: VOLUNTEER */}
              {activeFormTab === "volunteer" && (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      Join the Movement
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Volunteer for Yelburga's Future
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Join thousands of passionate youths and karyakartas across Yelburga & Kuknoor.
                    </p>
                  </div>

                  {volunteerSubmitted ? (
                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                      <div className="h-14 w-14 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="h-7 w-7" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Welcome to the Team!</h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Thank you for stepping forward! Our Youth Wing coordinator will reach out to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={volunteerData.name}
                            onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                            placeholder="Full name"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={volunteerData.phone}
                            onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                            placeholder="10-digit number"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Village / Town *
                          </label>
                          <input
                            type="text"
                            required
                            value={volunteerData.village}
                            onChange={(e) => setVolunteerData({ ...volunteerData, village: e.target.value })}
                            placeholder="Village name"
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                            Area of Interest *
                          </label>
                          <select
                            value={volunteerData.interest}
                            onChange={(e) => setVolunteerData({ ...volunteerData, interest: e.target.value })}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none"
                          >
                            <option>Youth & Sports Wing</option>
                            <option>Janaseva & Emergency Relief Team</option>
                            <option>Social Media & Digital Outreach</option>
                            <option>Booth-Level Voter Mobilization</option>
                            <option>Farmers Agitation & Rallies Wing</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-orange-600/30 hover:scale-[1.01] transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Users className="h-4 w-4" />
                        <span>Sign Up as Yelburga Volunteer</span>
                      </button>
                    </form>
                  )}
                </>
              )}

            </div>
          </div>

          {/* RIGHT: Camp Office Hours & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visiting Hours Card */}
            <div className="p-7 rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <Clock className="h-5 w-5" />
                <h4 className="text-base font-bold text-white">Camp Office Daily Schedule</h4>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white">Morning Citizen Darbar</span>
                  <span className="text-orange-400 font-bold">7:30 AM – 11:30 AM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white">Official Work & Delegations</span>
                  <span className="text-slate-300">11:30 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white">Village Tours & Grama Sabhas</span>
                  <span className="text-orange-400 font-bold">4:30 PM – 9:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-white">Emergency Seva Hotline</span>
                  <span className="text-emerald-400 font-bold">24 Hours / 7 Days</span>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="rounded-3xl border border-slate-800 overflow-hidden shadow-xl bg-slate-900">
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  Yelburga Central Camp Office
                </span>
                <span className="text-[11px] text-orange-400 font-semibold">Koppal District</span>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Yelburga Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61536.88371302821!2d75.98920147910156!3d15.619075700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7e5c54c30c94b%3A0xe6bf446cce677935!2sYelburga%2C%20Karnataka%20583236!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================
          CONSTITUENT FAQS
      ======================================================== */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Citizen Assistance Desk
            </h2>
            <p className="text-slate-400 text-sm">
              Common questions on office visits, disaster compensation, and student support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-orange-400 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-orange-400 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
