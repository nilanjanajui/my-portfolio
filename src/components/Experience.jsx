import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    period: "2023 – Present",
    role: "Independent Full-Stack Developer",
    description:
      "Self-directed developer with 7 deployed applications spanning React, Next.js, Flask, and MongoDB. Focused on building production-ready systems with real auth, real databases, and real deployment challenges — not just tutorials.",
    highlights: [
      "Built DriveFleet — MERN car rental platform with BetterAuth & cross-domain cookies",
      "Built Database Design Studio — Flask + React ETL app with 3NF normalization engine",
      "Built SunCart — Next.js eCommerce app with MongoDB Atlas & Google OAuth",
      "Deployed all projects on Vercel & Netlify with CI/CD pipelines",
      "Resolved production bugs: CORS, auth persistence, Tailwind v4 cascade conflicts",
      "Currently building Jarvis — AI voice assistant with Groq LLaMA + ElevenLabs TTS",
    ],
  },
  {
    period: "2023 – Present",
    role: "B.Sc. CSE · University of Chittagong",
    description:
      "Studying Computer Science & Engineering with strong academic foundations applied directly in real projects — from database normalization algorithms to OS process scheduling and embedded systems.",
    highlights: [
      "Data Structures & Algorithms in C++",
      "Database systems — normalization to 3NF, ER modeling",
      "Operating Systems — scheduling, deadlocks, memory management",
      "Software Engineering — UML, design patterns, SDLC",
      "HSC: GPA 5.00 / 5.00 (Science)",
      "Expected graduation: 2027",
    ],
  },
]

export default function Experience() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6"
      id="experience"
    >
      <div className="max-w-4xl mx-auto">

        <AnimatedSection direction="up">
          <div className="flex flex-col mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">
              The Journey
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12 sm:space-y-16">

          {experiences.map((exp, index) => (
            <AnimatedSection key={index} direction="up" delay={index * 150}>
              <div className="relative">

                {/* Timeline dot */}
                <div className="absolute -left-8.75 sm:-left-12.75 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-xl bg-accent border-4 border-primary shadow-lg shadow-accent/30" />

                <div className="flex flex-col gap-2 sm:gap-3">

                  {/* Period badge */}
                  <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {exp.period}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-light-bg">
                    {exp.role}
                  </h3>

                  <p className="text-text-dim text-base sm:text-lg leading-relaxed mt-1 sm:mt-2">
                    {exp.description}
                  </p>

                  <ul className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {exp.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-text-dim font-medium text-sm sm:text-base bg-secondary/20 border border-white/5 rounded-xl px-4 py-3 hover:border-accent/20 hover:bg-secondary/30 transition-all duration-200"
                      >
                        <span className="material-symbols-outlined text-accent text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>
      </div>
    </section>
  )
}