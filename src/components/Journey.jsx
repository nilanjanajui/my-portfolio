import AnimatedSection from './AnimatedSection'

const milestones = [
    {
        year: "2023",
        title: "CSE Begins - Fundamentals & First Code",
        desc: "Enrolled in B.Sc. CSE at University of Chittagong with HSC GPA 5.00/5.00. Mastered C++ fundamentals, wrote initial algorithms, and began sketching application ideas on paper.",
    },
    {
        year: "2023 - 2024",
        title: "Going Deep - DSA, OOP & Database Theory",
        desc: "Studied DSA in C++, OOP, and relational databases with Oracle SQL and MySQL to 3NF. Built an Arduino alcohol detection vehicle control system with GPS and GSM modules.",
    },
    {
        year: "2024 - Early 2025",
        title: "Design Obsession - UI/UX & Visual Thinking",
        desc: "Photography trained my eye for visual hierarchy. Learned Figma, studied design systems, built mockups, and analyzed user flows, uniting algorithmic thinking with visual sensibility alongside CS coursework.",
    },
    {
        year: "Late 2025",
        title: "Design Led Me to Code - Frontend Begins",
        desc: "Turned Figma designs into responsive, deployed interfaces. Learned React and Tailwind CSS in university, moving quickly from tutorials to building polished, interactive components with strong visual design.",
    },
    {
        year: "Late 2025 - Now",
        title: "Full-Stack - Shipping Real Systems",
        desc: "Shipped DriveFleet with BetterAuth cookie authentication and Database Design Studio for 3NF normalization. Deployed full-stack applications across Vercel, Render, and Netlify while balancing university coursework.",
    },
    {
        year: "2026",
        title: "Into AI & What's Next",
        desc: "Integrating LLMs and voice synthesis into applications: Jarvis voice assistant with Groq LLaMA and ElevenLabs TTS, and DevMatch collaboration platform, backed by strong algorithmic foundations."
    },
]

const building = [
    {
        name: "Jarvis",
        tagline: "AI Voice Assistant",
        desc: "Speak a prompt, hear an intelligent response. Built with Groq LLaMA for inference, ElevenLabs for natural TTS, Next.js for the frontend, and Flask for the backend pipeline.",
        stack: ["Next.js", "Groq LLaMA", "ElevenLabs TTS", "Flask", "Python"],
        status: "In Development",
        icon: "mic",
        github: "https://github.com/nilanjanajui/jarvis",
    },
    {
        name: "DevMatch",
        tagline: "Developer Collaboration Platform",
        desc: "A platform for developers to find collaborators, post project ideas, and build together. Full authentication, paginated feeds, and real-time updates.",
        stack: ["Next.js", "Express", "MongoDB", "Better Auth", "React Query", "Tailwind v4"],
        status: "In Development",
        icon: "group",
        github: "https://github.com/nilanjanajui/devmatch-client",
    },
]

export default function Journey() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6" id="journey">
            <div className="max-w-4xl mx-auto">

                {/* ── Section heading ── */}
                <AnimatedSection direction="up">
                    <div className="flex flex-col mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">
                            The Journey
                        </h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full mb-4" />
                        <p className="text-text-dim text-base sm:text-lg font-medium max-w-xl">
                            How a curious student became a developer who ships.
                        </p>
                    </div>
                </AnimatedSection>

                {/* ── Timeline ── */}
                <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-10 sm:space-y-12 mb-20 sm:mb-28">
                    {milestones.map((m, index) => (
                        <AnimatedSection key={index} direction="up" delay={index * 100}>
                            <div className="relative">

                                {/* Dot */}
                                <div className="absolute -left-8.75 sm:-left-12.75 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-xl bg-accent border-4 border-primary shadow-lg shadow-accent/30" />

                                <div className="flex flex-col gap-2">
                                    <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs tracking-widest uppercase">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {m.year}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-black text-light-bg">
                                        {m.title}
                                    </h3>
                                    <p className="text-text-dim text-base leading-relaxed font-medium">
                                        {m.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* ── Currently Building ── */}
                <AnimatedSection direction="up">
                    <div className="flex flex-col mb-10 sm:mb-14">
                        <h3 className="text-2xl sm:text-3xl font-black text-light-bg mb-4">
                            Currently Building
                        </h3>
                        <div className="h-1 w-16 bg-accent rounded-full mb-4" />
                        <p className="text-text-dim text-base font-medium max-w-xl">
                            Two projects in active development - not on a tutorial, not on a course.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {building.map((project, index) => (
                        <AnimatedSection key={index} direction="up" delay={index * 150}>
                            <div className="
                relative flex flex-col gap-4 p-6 sm:p-8 rounded-2xl overflow-hidden h-full
                bg-secondary/40 backdrop-blur-md
                border border-white/8
                shadow-lg shadow-black/20
                hover:border-accent/25 hover:bg-secondary/60
                transition-all duration-300 group
              ">
                                {/* Top shine */}
                                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

                                {/* Header row */}
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-accent text-xl">
                                                {project.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-black text-light-bg leading-tight">
                                                {project.name}
                                            </h4>
                                            <p className="text-text-dim text-xs font-bold tracking-wide uppercase">
                                                {project.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Status badge */}
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-bold text-xs shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                                        {project.status}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-text-dim text-sm sm:text-base leading-relaxed font-medium">
                                    {project.desc}
                                </p>

                                {/* Stack pills */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-text-dim text-xs font-bold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* GitHub link */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:underline underline-offset-4 mt-1 w-fit"
                                >
                                    <span className="material-symbols-outlined text-base">code</span>
                                    View on GitHub
                                </a>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    )
}