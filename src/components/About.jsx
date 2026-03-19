const stats = [
  { value: '5+',   label: 'Projects' },
  { value: '500+',  label: 'Commits'   },
  { value: '100%', label: 'Reliable' },
]

export default function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 sm:mb-10 text-light-bg">
              Passionate about <br />
              <span className="text-white bg-accent px-3 rounded-lg">problem solving</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-6 sm:mb-8">
              I'm a Computer Science & Engineering student at the{' '}
              <span className="text-light-bg font-bold">University of Chittagong</span>, driven by
              curiosity and a love for building things that actually work. My approach spans
              full-stack development, database engineering, embedded systems, and UI/UX design.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-6 sm:mb-8">
              I built a <span className="text-light-bg font-bold">Flask-based ETL web app</span> that
              automates database workflows - handling CSV, Excel, JSON, XML, cleaning data, detecting
              functional dependencies, computing candidate keys, and normalizing to 3NF with a
              drag-and-drop React interface.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-8 sm:mb-12">
              Photography shapes my UI/UX philosophy - every interface should guide users through
              visual hierarchy, clarity, and intentional spacing, so they feel guided, not overwhelmed.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-primary p-4 sm:p-6 rounded-xl text-center border border-white/5">
                  <span className="block text-2xl sm:text-3xl font-black text-accent">{stat.value}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-dim">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blob — hidden on mobile */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute w-96 h-96 bg-accent/20 blur-[80px] rounded-full"></div>
            <svg className="relative z-10 w-96 h-96 text-accent opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.2,-0.9C83.4,13.8,76.3,27.7,68.4,40.1C60.5,52.5,51.8,63.4,40.4,71.2C29,79,14.5,83.7,-0.7,84.9C-15.9,86.1,-31.8,83.8,-45.1,77.1C-58.4,70.4,-69.1,59.3,-76.3,46.4C-83.5,33.5,-87.2,18.8,-86.7,4.3C-86.2,-10.2,-81.5,-24.5,-73.9,-37.2C-66.3,-49.9,-55.8,-61,-43.3,-68.8C-30.8,-76.6,-15.4,-81.1,0.4,-81.8C16.2,-82.5,32.4,-79.4,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}