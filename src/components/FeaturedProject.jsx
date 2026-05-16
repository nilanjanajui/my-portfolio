import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'

export default function FeaturedProject() {
  const videoRef = useRef(null)
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    videoRef.current?.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6" id="projects-spotlight">
      <AnimatedSection direction="up" delay={100}>
        <div className="max-w-7xl mx-auto">

          {/* Main card — glass */}
          <div className="
            relative overflow-hidden
            rounded-2xl lg:rounded-4xl
            bg-secondary/20 backdrop-blur-xl
            border border-white/8
            shadow-2xl shadow-black/40
            flex flex-col lg:flex-row
          ">
            {/* Top shine line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent z-10" />
            {/* Left accent glow */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/15 blur-[80px] rounded-full pointer-events-none" />

            {/* Video panel — original width/sizing preserved */}
            <div
              className="w-full lg:w-3/5 p-3 sm:p-4 lg:p-8 relative group/video cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                ref={videoRef}
                src="/videos/demo1.mp4"
                className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-xl"
                muted
                playsInline
                loop
                preload="metadata"
              />
              {/* Play hint overlay */}
              <div className="
                absolute inset-3 sm:inset-4 lg:inset-8 rounded-xl
                flex items-center justify-center
                bg-primary/40 backdrop-blur-sm
                group-hover/video:opacity-0
                transition-opacity duration-300 pointer-events-none
              ">
                <div className="
                  w-14 h-14 rounded-full flex items-center justify-center
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  shadow-lg shadow-black/30
                ">
                  <span className="material-symbols-outlined text-light-bg text-3xl">play_arrow</span>
                </div>
              </div>
            </div>

            {/* Info panel */}
            <div className="
              relative w-full lg:w-2/5 p-6 sm:p-8 lg:p-12
              flex flex-col justify-center
              lg:border-l border-white/8
            ">
              {/* Subtle vertical divider glow */}
              <div className="hidden lg:block absolute left-0 top-1/4 bottom-1/4 w-px bg-linear-to-b from-transparent via-accent/20 to-transparent" />

              <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                Case Study Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4 sm:mb-6">
                Database Design Studio
              </h2>
              <p className="text-text-dim text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                A full-stack web application built with <span className="text-light-bg font-bold">Flask</span> and{' '}
                <span className="text-light-bg font-bold">React.js</span> that automates the entire database
                design workflow - from raw data upload to fully normalized schemas. Upload any CSV or Excel
                file, and the system automatically detects functional dependencies, computes candidate keys,
                and decomposes tables through <span className="text-light-bg font-bold">1NF → 2NF → 3NF</span>{' '}
                with lossless join and dependency preservation checks. Visualize your schema as an interactive{' '}
                <span className="text-light-bg font-bold">ER diagram</span> with PK/FK detection, and explore
                each normalization step through a <span className="text-light-bg font-bold">drag-and-drop
                workflow UI</span> with live backend code and execution logs.
              </p>

              {/* Tech tags — glass pills */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-10">
                {['React', 'Flask', 'Python', 'Graphviz', 'Pandas'].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 sm:px-4 py-1 sm:py-1.5 rounded-full
                      text-xs font-bold text-light-bg
                      bg-white/8 backdrop-blur-sm
                      border border-white/12
                      hover:border-accent/40 hover:bg-accent/10
                      transition-all duration-200
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://database-design-studio.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-accent hover:bg-accent-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all shadow-lg shadow-accent/20 text-sm sm:text-base"
                >
                  Live Demo
                  <span className="material-symbols-outlined text-base sm:text-lg">open_in_new</span>
                </a>

                <button
                  onClick={() => navigate('/projects/database-design-studio')}
                  className="
                    inline-flex items-center gap-2
                    bg-white/5 backdrop-blur-md
                    border border-white/12
                    text-light-bg px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                    font-bold text-sm sm:text-base
                    hover:bg-white/10 hover:border-white/20
                    transition-all duration-300
                  "
                >
                  <span className="material-symbols-outlined text-base sm:text-lg">info</span>
                  View Details
                </button>

                <a
                  href="https://github.com/nilanjanajui/Project--DataBase-Design-Studio"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 sm:gap-3
                    bg-white/5 backdrop-blur-md
                    border border-white/12
                    text-light-bg px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                    font-bold text-sm sm:text-base
                    hover:bg-white/10 hover:border-white/20
                    transition-all duration-300
                  "
                >
                  <span className="material-symbols-outlined text-base sm:text-lg">code</span>
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}