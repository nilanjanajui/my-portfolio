import roamRadar from '../assets/Roamradar.png'

export default function FeaturedProject() {
  return (
    <section className="py-32 bg-primary px-6" id="projects-spotlight">
      <div className="max-w-7xl mx-auto">
        <div className="bg-secondary border border-white/5 rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">

          {/* Image */}
          <div className="lg:w-3/5 p-4 lg:p-8">
            <img
              src={roamRadar}
              alt="RoamRadar"
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Info */}
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Case Study Spotlight
            </span>
            <h2 className="text-4xl font-black text-light-bg mb-6">RoamRadar</h2>
            <p className="text-text-dim text-lg mb-8 leading-relaxed">
              A travel planning app featuring dynamic interactive maps for seamless itinerary
              organization. Real-time data synchronization with Leaflet integration ensures users
              stay updated across all devices.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['React', 'Node.js', 'Leaflet'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-light-bg border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            <a href="https://roamradar.netlify.app/" className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold transition-all w-fit">
              Explore Case Study
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}