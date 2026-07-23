import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'

const ALL_TAGS = ['All', ...new Set(projects.map(p => p.tag))]

export default function ProjectsGrid({ limit, showViewMore, title = 'Other Work' }) {
  const navigate = useNavigate()
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tag === activeTag)

  const displayedProjects = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection direction="up">
          <div className="flex flex-col mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-light-bg">{title}</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-wrap gap-3 mb-10 sm:mb-14">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${activeTag === tag
                    ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20'
                    : 'bg-white/5 backdrop-blur-md text-text-dim border-white/8 hover:border-accent/50 hover:text-light-bg hover:bg-white/10'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {displayedProjects.map((project, index) => (
            <AnimatedSection key={project.title} direction="up" delay={index * 150}>
              <div className="group flex flex-col bg-primary/30 backdrop-blur-md rounded-xl border border-white/8 overflow-hidden hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 h-full relative">

                {/* Top shine line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent z-10 pointer-events-none" />

                {/* Image or placeholder */}
                <div className="h-44 sm:h-52 lg:h-56 w-full bg-secondary/30 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-primary/40">
                      <span className="material-symbols-outlined text-accent/40 text-5xl">code_blocks</span>
                      <span className="text-text-dim/40 text-xs font-bold tracking-widest uppercase">In Development</span>
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />

                  {/* Top-right badges */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col items-end gap-2">
                    <span className="bg-accent/80 backdrop-blur-md text-white text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-md uppercase tracking-wider border border-white/10 shadow-lg">
                      {project.tag}
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col items-end gap-2">
                    {project.status === 'In Progress' && (
                      <span className="inline-flex items-center gap-1.5 bg-yellow-500/15 backdrop-blur-md text-yellow-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-yellow-500/25 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-light-bg">{project.title}</h3>
                  <p className="text-text-dim font-medium text-sm mb-4 sm:mb-6 line-clamp-2">{project.description}</p>

                  {/* Tech stack chips on hover */}
                  <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {project.techStack?.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] font-bold bg-accent/20 backdrop-blur-sm text-accent px-2 py-0.5 rounded-full border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 sm:pt-6 border-t border-white/8 gap-3">
                    <button
                      onClick={() => navigate(`/projects/${project.id}`)}
                      className="bg-accent hover:bg-accent-hover text-white text-sm font-bold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 shadow-md shadow-accent/20"
                    >
                      View Details
                    </button>
                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer"
                          className="text-text-dim hover:text-accent transition-colors text-sm font-bold flex items-center gap-1">
                          Demo
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                      )}
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

        {showViewMore && (
          <AnimatedSection direction="up" delay={200}>
            <div className="mt-12 sm:mt-16 flex justify-center">
              <button
                onClick={() => navigate('/all-projects')}
                className="
                  inline-flex items-center gap-2
                  bg-accent hover:bg-accent-hover text-white
                  px-8 py-4 rounded-xl font-bold
                  transition-all shadow-lg shadow-accent/20
                  transform hover:-translate-y-1
                "
              >
                View More Projects
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </AnimatedSection>
        )}

      </div>
    </section>
  )
}