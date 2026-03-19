import roamRadar from '../assets/Roamradar.png'

export default function FeaturedProject() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6" id="projects-spotlight">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary border border-white/5 rounded-2xl lg:rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">

          {/* Image */}
          <div className="w-full lg:w-3/5 p-3 sm:p-4 lg:p-8">
            <img
              src={roamRadar}
              alt="RoamRadar"
              className="w-full h-48 sm:h-64 lg:h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Info */}
          <div className="w-full lg:w-2/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
              Case Study Spotlight
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4 sm:mb-6">RoamRadar</h2>
            <p className="text-text-dim text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              RoamRadar is a responsive travel dashboard designed to help users explore destinations, check current weather, discover attractions, save favorites, and plan trips with AI assistance. It supports dark/light mode toggling, dynamic weather updates, and interactive maps powered by Leaflet. The app is built using Tailwind CSS, DaisyUI, Font Awesome, DOM manipulation, JavaScript core concepts, ES6, API fetching, and is fully mobile responsive.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-10">
              {['JavaScript(ES6)', 'Leaflet', 'APIs'].map((tech) => (
                <span key={tech} className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5 rounded-full text-xs font-bold text-light-bg border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://roamradar.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-accent hover:bg-accent-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base"
              >
                Live Demo
                <span className="material-symbols-outlined text-base sm:text-lg">open_in_new</span>
              </a>
              <a
                href="https://github.com/nilanjanajui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-light-bg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-base sm:text-lg">code</span>
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}