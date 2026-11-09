import React from "react";

const youthPrograms = [
  {
    id: 1,
    icon: "⚽",
    title: "Sports & Fitness",
    description:
      "Encouraging young people to participate in sports, physical activities and fitness programs to build teamwork, discipline and confidence.",
  },
  {
    id: 2,
    icon: "📚",
    title: "Education & Knowledge",
    description:
      "Supporting educational activities, learning opportunities and knowledge-sharing programs that help students and young people develop their skills.",
  },
  {
    id: 3,
    icon: "👩‍💼",
    title: "Youth & Women Empowerment",
    description:
      "Creating opportunities for youth and women through skill development, awareness programs and activities that encourage participation in the community.",
  },
  {
    id: 4,
    icon: "🎨",
    title: "Arts & Culture",
    description:
      "Promoting local arts, cultural activities and community programs that provide young people with opportunities to express their creativity and talents.",
  },
  {
    id: 5,
    icon: "💻",
    title: "Digital & Technology Skills",
    description:
      "Encouraging digital awareness and technology-based learning so that students and young people can build practical skills for today's digital environment.",
  },
];

const YouthDevelopment = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Youth Development
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Opportunities for the Next Generation
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A focus on education, sports, skills, culture and digital
            awareness can help young people participate actively in their
            communities and build practical skills for the future.
          </p>
        </div>

        {/* Five Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {youthPrograms.map((program) => (
            <div
              key={program.id}
              className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-6 text-center shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400"
            >
              {/* Gradient Accent Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Icon Container */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50/80 text-3xl ring-1 ring-blue-100 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {program.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 rounded-2xl bg-blue-900 px-6 py-8 text-center text-white">
          <h3 className="text-2xl font-bold">
            Building Skills, Participation and Opportunities
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-blue-100">
            Youth-focused activities can bring together students, families,
            community groups and local talent through education, sports,
            culture and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouthDevelopment;
