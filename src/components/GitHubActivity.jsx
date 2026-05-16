import { GitHubCalendar } from 'react-github-calendar'
import AnimatedSection from './AnimatedSection'

export default function GitHubActivity() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-primary">
            <div className="max-w-7xl mx-auto">

                <AnimatedSection direction="up">
                    <div className="flex flex-col mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">GitHub Activity</h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full"></div>
                    </div>
                </AnimatedSection>

                {/* Calendar card */}
                <AnimatedSection direction="up" delay={150}>
                    <div className="relative bg-secondary/20 backdrop-blur-md border border-white/8 rounded-2xl p-6 sm:p-10 overflow-x-auto">
                        {/* Top shine line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                        <GitHubCalendar
                            username="nilanjanajui"
                            colorScheme="dark"
                            theme={{
                                dark: ['#2d2d35', '#715A5A', '#8a6f6f', '#a38484', '#c4a0a0'],
                            }}
                            fontSize={13}
                            blockSize={14}
                            blockMargin={5}
                        />
                    </div>
                </AnimatedSection>

                {/* Stats Cards */}
                <AnimatedSection direction="up" delay={200}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6">
                        {[
                            {
                                label: 'GitHub Profile',
                                href: 'https://github.com/nilanjanajui',
                                stat: 'View All Repos',
                                icon: 'code',
                            },
                            {
                                label: 'Total Projects',
                                href: 'https://github.com/nilanjanajui?tab=repositories',
                                stat: '40+ Repositories',
                                icon: 'folder_open',
                            },
                            {
                                label: 'Active Since',
                                href: 'https://github.com/nilanjanajui',
                                stat: '2023 - Present',
                                icon: 'calendar_today',
                            },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="relative bg-primary/30 backdrop-blur-md border border-white/8 hover:border-accent/40 rounded-xl p-5 sm:p-6 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 group overflow-hidden"
                            >
                                {/* Top shine line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
                                <span className="material-symbols-outlined text-accent text-2xl group-hover:scale-110 transition-transform shrink-0">
                                    {item.icon}
                                </span>
                                <div>
                                    <p className="text-text-dim text-xs font-bold uppercase tracking-widest">{item.label}</p>
                                    <p className="text-light-bg font-black text-sm sm:text-base">{item.stat}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>

            </div>
        </section>
    )
}