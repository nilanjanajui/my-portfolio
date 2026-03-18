import jobImg from "../assets/job.png";
import payoImg from "../assets/payo.png";
import issueImg from "../assets/issue.png";

const projects = [
  {
    title: "Job Tracker",
    tag: "Next.js",
    description: "Comprehensive dashboard designed for monitoring and managing job search pipelines efficiently.",
    highlight: "Custom serverless API routes with high-performance querying.",
    image: jobImg,
    link: "https://job-application-tracker1443.netlify.app/",
    github: "https://github.com/nilanjanajui/Job-Application-Tracker",
  },
  {
    title: "Payoo",
    tag: "Stripe",
    description: "Secure payment integration platform facilitating seamless financial transactions.",
    highlight: "End-to-end type safety for high-stakes payment workflows.",
    image: payoImg,
    link: "https://nilanjanajui.github.io/Payo-Mobile-Banking/",
    github: "https://github.com/nilanjanajui/Payo-Mobile-Banking",
  },
  {
    title: "Issues Tracker",
    tag: "GraphQL",
    description: "Real-time issue monitoring tool that provides a streamlined overview of project health.",
    highlight: "Optimized GraphQL queries for instant loading states.",
    image: issueImg,
    link: "https://github-issues-tracker-ph-a5.netlify.app/",
    github: "https://github.com/nilanjanajui/GitHub-Issues-Tracker",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-32 bg-secondary px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-light-bg">
            Other Work
          </h2>
          <div className="h-1.5 w-24 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-primary rounded-xl border border-white/5 overflow-hidden hover:shadow-2xl hover:border-accent/50 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-56 w-full bg-secondary/50 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-light-bg">
                  {project.title}
                </h3>
                <p className="text-text-dim font-medium text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="mb-6 p-4 bg-secondary/80 rounded-lg">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                    Key Highlight
                  </span>
                  <p className="text-xs text-light-bg font-bold">
                    {project.highlight}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-bg text-sm font-bold flex items-center gap-2 hover:text-accent transition-all"
                  >
                    View Demo{" "}
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-dim hover:text-accent transition-colors"
                  >
                    <span className="material-symbols-outlined">code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}