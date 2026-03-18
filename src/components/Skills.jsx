const skills = [
  {
    icon: 'code_blocks',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    icon: 'architecture',
    title: 'Core Concepts',
    tags: ['RESTful APIs', 'State Management', 'Responsive Design', 'Unit Testing'],
  },
  {
    icon: 'construction',
    title: 'Tools',
    tags: ['Git & GitHub', 'Docker', 'VS Code', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-primary" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-light-bg">Technical Toolkit</h2>
          <div className="h-1.5 w-24 bg-accent rounded-full mb-8"></div>
          <p className="text-text-dim max-w-2xl text-lg">
            Curated selection of languages, frameworks, and tools I use to build professional-grade applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-secondary p-10 rounded-xl border border-white/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="rounded-2xl bg-primary text-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-black/20 w-20 h-20">
                  <span className="material-symbols-outlined text-5xl">{skill.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-light-bg tracking-tight">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skill.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/40 rounded-lg text-sm font-semibold border border-white/5 text-light-bg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}