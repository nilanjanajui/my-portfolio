import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 hero-gradient overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Profile Image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-up">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-112.5 lg:h-112.5">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="relative w-full h-full border-2 border-accent p-2 shadow-2xl overflow-hidden bg-secondary/30 backdrop-blur-sm rounded-full hover:shadow-[0_0_30px_rgba(113,90,90,0.5)] transition-all duration-500">
              <img
                src={profileImg}
                alt="Nilanjana"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-full hover:scale-105"
              />
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 lg:bottom-10 lg:-right-6 bg-primary border border-white/10 px-3 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-xs font-bold text-light-bg uppercase tracking-widest whitespace-nowrap">Open to projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 order-1 lg:order-2 animate-fade-up text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-light-bg text-xs font-bold uppercase tracking-widest w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            CSE Student · University of Chittagong
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-light-bg">
            Building full-stack systems with <span className="text-accent">clean UI</span> and solid logic.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-text-dim max-w-xl mx-auto lg:mx-0">
            I design and develop responsive, user-friendly web applications - combining frontend finesse,
            backend structure, and database expertise to build systems that last.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start">
            <a href="#projects"
              className="bg-accent hover:bg-accent-hover text-white px-7 sm:px-10 py-4 sm:py-5 rounded-xl font-bold transition-all shadow-xl shadow-accent/10 transform hover:-translate-y-1 text-sm sm:text-base">
              View Projects
            </a>
            <a href="https://github.com/nilanjanajui" target="_blank" rel="noreferrer"
              className="bg-white/5 hover:bg-white/10 text-light-bg border border-white/10 px-7 sm:px-10 py-4 sm:py-5 rounded-xl font-bold transition-all flex items-center gap-2 transform hover:-translate-y-1 text-sm sm:text-base">
              <span className="material-symbols-outlined text-base sm:text-lg">code</span>
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}