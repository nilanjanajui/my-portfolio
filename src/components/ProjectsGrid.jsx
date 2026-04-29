import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'

export default function ProjectsGrid() {
  const navigate = useNavigate()

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection direction="up">
          <div className="flex flex-col mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-light-bg">Other Work</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} direction="up" delay={index * 200}>
              <div className="group flex flex-col bg-primary rounded-xl border border-white/5 overflow-hidden hover:shadow-2xl hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 h-full">

                <div className="h-44 sm:h-52 lg:h-56 w-full bg-secondary/50 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="bg-accent text-white text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-light-bg">{project.title}</h3>
                  <p className="text-text-dim font-medium text-sm mb-4 sm:mb-6 line-clamp-2">{project.description}</p>

                  <div className="mt-auto flex items-center justify-between pt-4 sm:pt-6 border-t border-white/5 gap-3">
                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="bg-accent hover:bg-accent-hover text-white text-sm font-bold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5"
                    >
                      View Details
                    </button>
                    <div className="flex items-center gap-3">
                      <a href={project.link} target="_blank" rel="noreferrer"
                        className="text-text-dim hover:text-accent transition-colors text-sm font-bold flex items-center gap-1">
                        Demo
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="text-text-dim hover:text-accent transition-colors">
                        <span className="material-symbols-outlined">code</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}