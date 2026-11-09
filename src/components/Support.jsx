import { Link } from "react-router-dom";

const Support = () => {
  const supportItems = [
    {
      icon: "🎓",
      title: "Student Support",
      description:
        "Supporting students with opportunities, guidance, and initiatives that encourage education and personal growth.",
      link: "/support/student-support",
    },
    {
      icon: "🏏",
      title: "Sports & Youth",
      description:
        "Encouraging youth participation in sports and supporting sporting activities across villages.",
      link: "/support/sports-youth",
    },
    {
      icon: "🏫",
      title: "Government School Sports",
      description:
        "Supporting sports activities and opportunities for students in government schools.",
      link: "/support/government-school-sports",
    },
    {
      icon: "🌾",
      title: "Village Youth Support",
      description:
        "Encouraging young people in villages through community activities, sports, and development initiatives.",
      link: "/support/village-youth",
    },
    {
      icon: "🛕",
      title: "Temple Development",
      description:
        "Supporting Hindu temple development and community initiatives that help preserve local traditions.",
      link: "/support/temple-development",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description:
        "Working with local communities to support meaningful social, educational, and development activities.",
      link: "/support/community-support",
    },
  ];

  return (
    <section className="bg-slate-50 py-20" id="support">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
            Community Support
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Supporting{" "}
            <span className="text-orange-600">
              People, Youth & Communities
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Supporting students, youth, sports activities, government schools,
            villages, and temple development through community-focused
            initiatives.
          </p>
        </div>

        {/* Support Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition duration-300 group-hover:bg-orange-100">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {/* Bottom */}
              <div className="mt-auto pt-6">
                <div className="mb-5 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                {/* Read More Link */}
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 transition duration-300 hover:bg-orange-500 hover:text-white"
                >
                  Read More
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-7 py-10 shadow-xl sm:px-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Building Stronger Communities Together
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-orange-50 sm:text-base">
                Encouraging education, sports, youth participation, village
                development, and community initiatives.
              </p>
            </div>

            {/* Contact Link */}
            <Link
              to="/contact"
              className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-orange-600 shadow-md transition hover:bg-slate-100"
            >
              Connect With Us
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Support;
