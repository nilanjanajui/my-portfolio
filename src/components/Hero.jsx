import profileImg from '../assets/profile.webp'
import AnimatedSection from './AnimatedSection'
import { TypeAnimation } from 'react-type-animation'
import resumePDF from '../assets/resume.pdf'

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 hero-gradient overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Profile Image */}
        <AnimatedSection direction="left" delay={100}>
          <div className="relative flex flex-col items-center lg:items-start order-2 lg:order-1 animate-fade-up gap-4">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-112.5 lg:h-112.5">

              {/* Ambient glow behind the image */}
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />

              {/* Profile ring — glass */}
              <div className="
                relative w-full h-full rounded-full p-2 overflow-hidden
                bg-secondary/20 backdrop-blur-md
                border-2 border-accent/60
                shadow-2xl shadow-black/40
                hover:shadow-[0_0_40px_rgba(113,90,90,0.5)]
                hover:border-accent
                transition-all duration-500
              ">
                <img
                  src={profileImg}
                  alt="Nilanjana"
                  loading="eager"
                  className="w-full h-full object-cover transition-all duration-700 rounded-full hover:scale-105"
                />
              </div>

              {/* Status Badge — glass */}
              <div className="
                absolute -bottom-4 -right-2 sm:-right-4 lg:bottom-10 lg:-right-6
                px-3 sm:px-6 py-2 sm:py-3 rounded-2xl
                bg-primary/40 backdrop-blur-xl
                border border-white/12
                shadow-xl shadow-black/30
                overflow-hidden
              ">
                {/* Top shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-light-bg uppercase tracking-widest whitespace-nowrap">
                    Open to Internships
                  </span>
                </div>
              </div>
            </div>

            {/* Name under profile pic */}
            <AnimatedSection direction="up" delay={300}>
              <div className="text-center lg:text-left mt-6">
                <span className="text-lg sm:text-xl font-bold text-light-bg">Hi, I'm</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-light-bg">
                  <span className="text-accent">Nilanjana</span> Das <span className="text-accent">Jui</span>
                </h1>
              </div>
            </AnimatedSection>

          </div>
        </AnimatedSection>

        {/* Text Content */}
        <AnimatedSection direction="right" delay={200}>
          <div
            className="flex flex-col gap-6 sm:gap-8 lg:gap-10 order-1 lg:order-2 animate-fade-up text-center lg:text-left"
            style={{ animationDelay: '0.2s' }}
          >

            {/* Role badge — glass pill */}
            <div className="
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0
              bg-accent/15 backdrop-blur-md
              border border-accent/30
              text-light-bg text-xs font-bold uppercase tracking-widest
              shadow-lg shadow-accent/10
            ">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              MERN Stack Developer · CSE Student
            </div>

            {/* H1 — tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-light-bg">
              I build{' '}
              <TypeAnimation
                sequence={[
                  'clean UI.', 2000,
                  'React apps.', 2000,
                  'full-stack systems.', 2000,
                  'real solutions.', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-text-dim max-w-xl mx-auto lg:mx-0">
              I design and develop responsive, user-friendly web applications - combining frontend finesse,
              backend structure, and database expertise to build systems that last.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start">
              {/* Primary CTA — stays solid accent, unchanged */}
              <a
                href="#projects"
                className="bg-accent hover:bg-accent-hover text-white px-7 sm:px-10 py-4 sm:py-5 rounded-xl font-bold transition-all shadow-xl shadow-accent/20 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                View Projects
              </a>

              {/* GitHub — glass button */}
              <a
                href="https://github.com/nilanjanajui"
                target="_blank"
                rel="noreferrer"
                className="
                  px-7 sm:px-10 py-4 sm:py-5 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/12
                  text-light-bg font-bold
                  flex items-center gap-2
                  shadow-lg shadow-black/20
                  hover:bg-white/10 hover:border-white/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  text-sm sm:text-base
                "
              >
                <span className="material-symbols-outlined text-base sm:text-lg">code</span>
                GitHub
              </a>

              {/* LinkedIn — glass button */}
              <a
                href="https://www.linkedin.com/in/nilanjana-jui-759402286"
                target="_blank"
                rel="noreferrer"
                className="
                  px-7 sm:px-10 py-4 sm:py-5 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/12
                  text-light-bg font-bold
                  flex items-center gap-2
                  shadow-lg shadow-black/20
                hover:bg-white/10 hover:border-white/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  text-sm sm:text-base
                "
              >
                <span className="material-symbols-outlined text-base sm:text-lg">person</span>
                LinkedIn
              </a>

              {/* View Resume — glass button */}
              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="
                  px-7 sm:px-10 py-4 sm:py-5 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/12
                  text-light-bg font-bold
                  flex items-center gap-2
                  shadow-lg shadow-black/20
                  hover:bg-white/10 hover:border-white/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  text-sm sm:text-base
                "
              >
                <span className="material-symbols-outlined text-base sm:text-lg">visibility</span>
                View Resume
              </a>

              {/* Download Resume — glass button */}
              <a
                href={resumePDF}
                download
                className="
                  px-7 sm:px-10 py-4 sm:py-5 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/12
                  text-light-bg font-bold
                  flex items-center gap-2
                  shadow-lg shadow-black/20
                  hover:bg-white/10 hover:border-white/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  text-sm sm:text-base
                "
              >
                <span className="material-symbols-outlined text-base sm:text-lg">download</span>
                Download Resume
              </a>
            </div>

          </div>
        </AnimatedSection>

      </div >
    </section >
  )
}