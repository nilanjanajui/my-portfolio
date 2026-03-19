import roamRadarImg from '../assets/Roamradar.png'
import jobImg from '../assets/job.png'
import issueImg from '../assets/issue.png'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    title: 'RoamRadar',
    tag: 'JavaScript',
    description: 'A responsive travel dashboard to explore destinations, check weather, discover attractions, save favorites, and plan trips with AI assistance.',
    highlight: 'Dynamic weather updates, interactive Leaflet maps, dark/light mode, and full mobile responsiveness, built with Tailwind CSS, DaisyUI, Font Awesome, and core JavaScript concepts.',
    image: roamRadarImg,
    link: 'https://roamradar.netlify.app/',
    github: 'https://github.com/nilanjanajui/RoamRadar-Travel-Guide',
  },
  {
    title: 'Job Tracker',
    tag: 'JavaScript',
    description: 'A serverless job application tracker that helps users manage their job search with ease.',
    highlight: 'This project demonstrates dynamic UI rendering, state management, filtering logic, and responsive design using Vanilla JavaScript and ES6 features.',
    image: jobImg,
    link: 'https://job-application-tracker1443.netlify.app/',
    github: 'https://github.com/nilanjanajui/Job-Application-Tracker',
  },
  {
    title: 'Issues Tracker',
    tag: 'JavaScript',
    description: 'A GitHub Issues Tracker that allows users to view, create, and manage issues for any public GitHub repository.',
    highlight: 'This project demonstrates API integration, dynamic UI updates, and state management using Vanilla JavaScript, DOM manipulation, and ES6 features.',
    image: issueImg,
    link: 'https://github-issues-tracker-ph-a5.netlify.app/',
    github: 'https://github.com/nilanjanajui/GitHub-Issues-Tracker',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-light-bg">Other Work</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full"></div>
          </div>
        </AnimatedSection>

        {/* Cards — each one animates one by one */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} direction="up" delay={index * 200}>
              <div className="group flex flex-col bg-primary rounded-xl border border-white/5 overflow-hidden hover:shadow-2xl hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 h-full">

                {/* Image */}
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

                {/* Content */}
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-light-bg">{project.title}</h3>
                  <p className="text-text-dim font-medium text-sm mb-4 sm:mb-6 line-clamp-2">{project.description}</p>
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-secondary/80 rounded-lg">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">Key Highlight</span>
                    <p className="text-xs text-light-bg font-bold">{project.highlight}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4 sm:pt-6 border-t border-white/5">
                    <a href={project.link} target="_blank" rel="noreferrer"
                      className="text-light-bg text-sm font-bold flex items-center gap-1.5 sm:gap-2 hover:text-accent transition-all">
                      View Demo
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-text-dim hover:text-accent transition-colors">
                      <span className="material-symbols-outlined">code</span>
                    </a>
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