import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProject() {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6"
      id="projects-spotlight"
    >
      <AnimatedSection direction="up" delay={100}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-secondary border border-white/5 rounded-2xl lg:rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Video */}
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
            </div>

            {/* Info */}
            <div className="w-full lg:w-2/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                Case Study Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4 sm:mb-6">
                Database Design Studio
              </h2>
              <p className="text-text-dim text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                A full-stack web application built with{" "}
                <span className="text-light-bg font-bold">Flask</span> and{" "}
                <span className="text-light-bg font-bold">React.js</span> that
                automates the entire database design workflow - from raw data
                upload to fully normalized schemas. Upload any CSV or Excel
                file, and the system automatically detects functional
                dependencies, computes candidate keys, and decomposes tables
                through{" "}
                <span className="text-light-bg font-bold">1NF → 2NF → 3NF</span>{" "}
                with lossless join and dependency preservation checks. Visualize
                your schema as an interactive{" "}
                <span className="text-light-bg font-bold">ER diagram</span> with
                PK/FK detection, and explore each normalization step through a{" "}
                <span className="text-light-bg font-bold">
                  drag-and-drop workflow UI
                </span>{" "}
                with live backend code and execution logs.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 sm:mb-10">
                {["React", "Flask", "Python", "Graphviz", "Pandas"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5 rounded-full text-xs font-bold text-light-bg border border-white/10"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://database-design-studio.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-accent hover:bg-accent-hover text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base"
                >
                  Live Demo
                  <span className="material-symbols-outlined text-base sm:text-lg">
                    open_in_new
                  </span>
                </a>
                <a
                  href="https://github.com/nilanjanajui/Project--DataBase-Design-Studio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-light-bg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-base sm:text-lg">
                    code
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
