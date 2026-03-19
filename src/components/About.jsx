import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "5+", label: "Projects" },
  { value: "500+", label: "Commits" },
  { value: "100%", label: "Reliable" },
];

export default function About() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32 bg-secondary px-4 sm:px-6"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <AnimatedSection direction="left">
            <div className="animate-fade-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-10 sm:mb-10 text-light-bg">
                Passionate about <br />
                <span className="text-white bg-accent px-3 rounded-lg mt-3 inline-block">
                  problem solving
                </span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-6 sm:mb-8">
                I'm a Computer Science & Engineering student at the{" "}
                <span className="text-light-bg font-bold">
                  University of Chittagong
                </span>
                , driven by curiosity and a love for building things that
                actually work. My approach spans full-stack development,
                database engineering, embedded systems, and UI/UX design.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-6 sm:mb-8">
                I built a{" "}
                <span className="text-light-bg font-bold">
                  Flask-based ETL web app
                </span>{" "}
                that automates database workflows - handling CSV, Excel, JSON,
                XML, cleaning data, detecting functional dependencies, computing
                candidate keys, and normalizing to 3NF with a drag-and-drop
                React interface.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-text-dim font-medium mb-8 sm:mb-12">
                Photography shapes my UI/UX philosophy - every interface should
                guide users through visual hierarchy, clarity, and intentional
                spacing, so they feel guided, not overwhelmed.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 200}>
                  <div
                    key={stat.label}
                    className="bg-primary p-4 sm:p-6 rounded-xl text-center border border-white/5"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-accent">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-text-dim">
                      {stat.label}
                    </span>
                  </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={300}>
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="absolute w-96 h-96 bg-accent/20 blur-[80px] rounded-full"></div>

              {/* Terminal Card */}
              <div className="relative z-10 w-full max-w-md bg-primary border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-xs text-text-dim font-mono">
                    nilanjana.js
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div>
                    <span className="text-accent">const</span>
                    <span className="text-light-bg"> developer </span>
                    <span className="text-accent">=</span>
                    <span className="text-light-bg"> {"{"}</span>
                  </div>

                  <div className="pl-4 space-y-2">
                    <div>
                      <span className="text-text-dim">name</span>
                      <span className="text-light-bg">: </span>
                      <span className="text-green-400">
                        "Nilanjana Das Jui"
                      </span>
                      <span className="text-light-bg">,</span>
                    </div>
                    <div>
                      <span className="text-text-dim">role</span>
                      <span className="text-light-bg">: </span>
                      <span className="text-green-400">
                        "Frontend Developer"
                      </span>
                      <span className="text-light-bg">,</span>
                    </div>
                    <div>
                      <span className="text-text-dim">university</span>
                      <span className="text-light-bg">: </span>
                      <span className="text-green-400">
                        "Univ. of Chittagong"
                      </span>
                      <span className="text-light-bg">,</span>
                    </div>
                    <div>
                      <span className="text-text-dim">skills</span>
                      <span className="text-light-bg">: [</span>
                      <span className="text-yellow-400">"React"</span>
                      <span className="text-light-bg">, </span>
                      <span className="text-yellow-400">"Flask"</span>
                      <span className="text-light-bg">, </span>
                      <span className="text-yellow-400">"Python"</span>
                      <span className="text-light-bg">],</span>
                    </div>
                    <div>
                      <span className="text-text-dim">openTo</span>
                      <span className="text-light-bg">: </span>
                      <span className="text-green-400">
                        "New Opportunities"
                      </span>
                      <span className="text-light-bg">,</span>
                    </div>
                    <div>
                      <span className="text-text-dim">available</span>
                      <span className="text-light-bg">: </span>
                      <span className="text-blue-400">true</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-light-bg">{"}"}</span>
                  </div>

                  {/* Blinking cursor line */}
                  <div className="flex items-center gap-1 pt-2">
                    <span className="text-accent">▶</span>
                    <span className="text-text-dim text-xs">
                      Ready to build something great
                    </span>
                    <span className="inline-block w-2 h-4 bg-accent/80 animate-pulse ml-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
