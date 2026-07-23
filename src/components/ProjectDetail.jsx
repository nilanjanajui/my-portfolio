import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-6">
                <p className="text-text-dim text-xl">Project not found.</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-accent text-white px-6 py-3 rounded-xl font-bold"
                >
                    Go Home
                </button>
            </div>
        )
    }

    return (
        <main className="min-h-screen px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="
                      inline-flex items-center gap-2 mb-10
                      bg-white/5 backdrop-blur-md
                      border border-white/12
                      text-light-bg px-5 py-2.5 rounded-xl
                      font-bold text-sm
                      hover:bg-white/10 hover:border-white/20 hover:-translate-x-1
                      shadow-lg shadow-black/20
                      transition-all duration-300
                      w-fit
                    "
                >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to Portfolio
                </button>

                {/* Header */}
                <div className="mb-10">
                    <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
                        {project.tag}
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-light-bg mb-6">
                        {project.title}
                    </h1>
                    <p className="text-text-dim text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Video (featured project) */}
                {project.video && (
                    <div className="rounded-2xl overflow-hidden mb-12 border border-white/5 bg-secondary">
                        <video
                            src={project.video}
                            className="w-full object-cover"
                            controls
                            muted
                            playsInline
                            preload="metadata"
                        />
                    </div>
                )}

                {/* Image (other projects) */}
                {project.image && !project.video && (
                    <div className="rounded-2xl overflow-hidden mb-12 border border-white/5">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-cover"
                        />
                    </div>
                )}

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 mb-14">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                    >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-light-bg px-6 py-3 rounded-xl font-bold transition-all hover:-translate-y-0.5"
                    >
                        <span className="material-symbols-outlined text-base">code</span>
                        GitHub Repo
                    </a>
                </div>

                {/* Tech Stack */}
                <section className="mb-14">
                    <h2 className="text-2xl font-black text-light-bg mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map(tech => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-secondary rounded-full text-sm font-bold text-light-bg border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Features */}
                <section className="mb-14">
                    <h2 className="text-2xl font-black text-light-bg mb-6">Features</h2>
                    <ul className="space-y-3">
                        {project.features.map((f, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 bg-secondary p-5 rounded-xl border border-white/5"
                            >
                                <span className="material-symbols-outlined text-accent mt-0.5 shrink-0">
                                    check_circle
                                </span>
                                <p className="text-text-dim leading-relaxed">{f}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Challenges */}
                <section className="mb-14">
                    <h2 className="text-2xl font-black text-light-bg mb-6">Challenges</h2>
                    <ul className="space-y-3">
                        {project.challenges.map((c, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 bg-secondary p-5 rounded-xl border border-white/5"
                            >
                                <span className="material-symbols-outlined text-accent mt-0.5 shrink-0">
                                    bolt
                                </span>
                                <p className="text-text-dim leading-relaxed">{c}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Future Improvements */}
                <section className="mb-14">
                    <h2 className="text-2xl font-black text-light-bg mb-6">Future Improvements</h2>
                    <ul className="space-y-3">
                        {project.improvements.map((imp, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 bg-secondary p-5 rounded-xl border border-white/5"
                            >
                                <span className="material-symbols-outlined text-accent mt-0.5 shrink-0">
                                    rocket_launch
                                </span>
                                <p className="text-text-dim leading-relaxed">{imp}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Contributors (featured project only) */}
                {
                    project.contributors && (
                        <section className="mb-14">
                            <h2 className="text-2xl font-black text-light-bg mb-6">Contributors</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.contributors.map((name, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 bg-secondary px-5 py-3 rounded-xl border border-white/5"
                                    >
                                        <span className="material-symbols-outlined text-accent text-base">person</span>
                                        <span className="text-light-bg font-bold text-sm">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )
                }

            </div >
        </main >
    )
}