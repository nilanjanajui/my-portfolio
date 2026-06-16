import AnimatedSection from './AnimatedSection'

const milestones = [
    {
        year: "2023",
        title: "CSE Begins - Fundamentals & First Code",
        desc: "Enrolled in B.Sc. CSE at the University of Chittagong with a HSC GPA of 5.00/5.00. Semester one was raw fundamentals - C++ syntax, logic building, and understanding how a computer actually executes instructions. Wrote my first algorithms, struggled with pointers, and realized this was going to be harder and far more interesting than I expected. On the side, I was already sketching app ideas on paper - the builder instinct showed up before I had the skills to match it.",
    },
    {
        year: "2023 - 2024",
        title: "Going Deep - DSA, OOP & Database Theory",
        desc: "University pushed me into the core of CS - Data Structures & Algorithms in C++, Object-Oriented Programming with classes, inheritance, and polymorphism, and database systems from the ground up. Learned Oracle SQL and MySQL hands-on - writing multi-table joins, stored procedures, designing normalized schemas, and applying functional dependency theory to reach 3NF. Alongside coursework, I was building academic projects - an Arduino-based alcohol detection and vehicle control system with GPS and GSM modules, combining hardware and software in the same project. The academic work wasn't just theory. I was using it.",
    },
    {
        year: "2024 - Early 2025",
        title: "Design Obsession - UI/UX & Visual Thinking",
        desc: "While continuing my CS coursework, I discovered I had a strong pull toward design. Photography had already trained me to see - light, framing, negative space, hierarchy. I started applying that same eye to interfaces. Learned Figma, studied design systems, analyzed how great UIs guide attention and reduce friction. Started the UI/UX journey formally - building mockups, studying user flows, and developing an aesthetic language. This wasn't a break from CS - it ran alongside it. The combination of algorithmic thinking and visual sensibility started feeling like a real advantage.",
    },
    {
        year: "Late 2025",
        title: "Design Led Me to Code - Frontend Begins",
        desc: "Designing interfaces I couldn't build myself became frustrating fast. I wanted to take a Figma file and turn it into something real - responsive, interactive, pixel-perfect, and actually deployed. That gap pushed me into frontend development. Picked up React and Tailwind CSS while still in university, and they clicked quickly because I already knew what I was building and why it should look and behave a certain way. Within weeks I was building real components, not just following tutorials. The design background meant I skipped the phase where most developers make things that work but look terrible.",
    },
    {
        year: "Late 2025 - Now",
        title: "Full-Stack - Shipping Real Systems",
        desc: "Frontend wasn't enough. I wanted to own the entire stack - from database schema to deployed UI. So while attending university lectures on algorithms and software engineering, I was also building full-stack applications outside class. Shipped DriveFleet, a complete MERN car rental platform with BetterAuth and cross-domain HTTPOnly cookie authentication. Built Database Design Studio, a Flask + React ETL app that computes candidate keys and normalizes to 3NF - directly applying what I learned in database theory class to a real tool. Deployed 7 applications total across Vercel, Render, and Netlify. Fixed production bugs that no course prepares you for - CORS failures, Tailwind v4 cascade conflicts, Mongoose collection mismatches. Academic and development, running in parallel, feeding each other.",
    },
    {
        year: "2026",
        title: "Into AI & What's Next",
        desc: "Still in university, still shipping. Integrating LLMs and voice synthesis into real applications - Jarvis, an AI voice assistant built with Groq LLaMA and ElevenLabs TTS, and DevMatch, a developer collaboration platform with advanced auth and real-time feeds. The academic foundation in algorithms and systems makes the AI integration make sense at a level beyond just calling an API. The journey is not close to done."
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