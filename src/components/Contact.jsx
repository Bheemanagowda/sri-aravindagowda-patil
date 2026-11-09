import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    village: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        village: "",
        details: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-100 bg-white py-20 sm:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute right-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            CENTERED SECTION HEADER
        ========================== */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            Get in Touch
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Connect with Shri Aravindgowda{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Police Patil
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Have a grievance, community proposal, or inquiry? Submit your
            details below to reach our public coordination team.
          </p>
        </div>

        {/* =========================
            MAP + CONTACT FORM
        ========================== */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

          {/* LEFT - MAP */}
          <div className="lg:col-span-5">

            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-md">

              <div className="relative h-[340px] w-full sm:h-[430px]">

                <iframe
                  title="Yelburga Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61537.199395982845!2d75.96879893441617!3d15.627694982631587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb800aa649646b1%3A0xe54d3e8e2fa5160b!2sYelburga%2C%20Karnataka%20583236!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

              {/* Map Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 bg-white p-4">

                <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  Yelburga, Koppal
                </span>

                <a
                  href="https://maps.google.com/?q=Yelburga,Karnataka,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline"
                >
                  Open in Google Maps →
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="lg:col-span-7">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-100 sm:p-9">

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Send a Message
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Fill in your details below and our team will connect with you.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                  <div>
                    <h5 className="text-sm font-bold">
                      Message Received Successfully!
                    </h5>

                    <p className="mt-0.5 text-xs text-emerald-700">
                      Thank you for contacting Shri Aravindgowda Police Patil's
                      office. Our team will review your message and reach out
                      shortly.
                    </p>
                  </div>

                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Your Full Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">

                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Suresh Patil"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/30"
                      />

                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Phone Number{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">

                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/30"
                      />

                    </div>
                  </div>

                </div>

                {/* Email + Village */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">

                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/30"
                      />

                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-village"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Village / Town{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">

                      <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        id="contact-village"
                        name="village"
                        required
                        value={formData.village}
                        onChange={handleChange}
                        placeholder="e.g. Yelburga, Kuknoor"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/30"
                      />

                    </div>
                  </div>

                </div>

                {/* Message */}
                <div>

                  <label
                    htmlFor="contact-details"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Details / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">

                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />

                    <textarea
                      id="contact-details"
                      name="details"
                      required
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Please provide details about your query, grievance, or village development matter..."
                      className="min-h-[130px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/30"
                    />

                  </div>

                </div>

                {/* Submit */}
                <div className="pt-2">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-3.5 font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-orange-500 hover:to-amber-400 hover:shadow-orange-500/30 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;