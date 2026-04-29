import AnimatedSection from './AnimatedSection'

const education = [
    {
        degree: 'B.Sc. in Computer Science & Engineering',
        institution: 'University of Chittagong',
        period: '2023 - Present',
        details: [
            'Studying core CS topics: Data Structures, Algorithms, OOP, Operating Systems, Database Systems',
            'Coursework includes Embedded Systems, Computer Networks, and Software Engineering',
            'Actively building projects applying academic knowledge to real-world problems',
        ],
    },
    {
        degree: 'Higher Secondary Certificate (HSC)',
        institution: 'Government KMH College, Kotchandpur, Jhenidah',
        period: '2019 - 2021',
        details: [
            'Science group with Mathematics, Physics, and Chemistry',
            'GPA: 5.00 / 5.00',
        ],
    },
]

export default function Education() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6" id="education">
            <div className="max-w-4xl mx-auto">
                <AnimatedSection direction="up">
                    <div className="flex flex-col mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">Education</h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full"></div>
                    </div>
                </AnimatedSection>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <AnimatedSection key={index} direction="up" delay={index * 150}>
                            <div className="bg-primary p-6 sm:p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-black text-light-bg">{edu.degree}</h3>
                                        <p className="text-accent font-bold text-sm mt-1">{edu.institution}</p>
                                    </div>
                                    <span className="text-text-dim text-sm font-bold bg-secondary px-4 py-1.5 rounded-full border border-white/5 whitespace-nowrap w-fit">
                                        {edu.period}
                                    </span>
                                </div>
                                <ul className="space-y-2 mt-4">
                                    {edu.details.map((d, i) => (
                                        <li key={i} className="flex items-start gap-3 text-text-dim text-sm">
                                            <span className="material-symbols-outlined text-accent text-base shrink-0 mt-0.5">check_circle</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}