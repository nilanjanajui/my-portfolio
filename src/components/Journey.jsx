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
        desc: "Integrating LLMs and voice synthesis into applications with Jarvis, combining Groq-hosted GPT-OSS and ElevenLabs TTS with strong algorithmic foundations."
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
                <div className="relative border-l-2 border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-10 sm:space-y-12 mb-0">
                    {milestones.map((m, index) => (
                        <AnimatedSection key={index} direction="up" delay={index * 100}>
                            <div className="relative">

                                {/* Dot */}
                                <div className="absolute -left-8.75 sm:-left-12.75 top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-xl bg-accent border-4 border-primary shadow-lg shadow-accent/30" />

                                <div className="flex flex-col gap-2">
                                    <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-text font-bold text-xs tracking-widest uppercase">
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

            </div>
        </section>
    )
}