import AnimatedSection from './AnimatedSection'

const skills = [
  {
    icon: 'code_blocks',
    title: 'Frontend',
    tags: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    icon: 'dns',
    title: 'Backend & DB',
    tags: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    icon: 'security',
    title: 'Authentication & Security',
    tags: [
      { name: 'JWT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/jsonwebtokens.svg' },
      { name: 'Google Auth', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'BetterAuth', logo: 'https://avatars.githubusercontent.com/u/150895576' },
    ],
  },
  {
    icon: 'architecture',
    title: 'Core CS',
    tags: [
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ],
  },
  {
    icon: 'palette',
    title: 'UI/UX & Design',
    tags: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
      { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' },
    ],
  },
  {
    icon: 'memory',
    title: 'Embedded & Systems',
    tags: [
      { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
      { name: 'GPS/GSM', logo: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/googlemaps.svg' },
    ],
  },
  {
    icon: 'construction',
    title: 'Tools',
    tags: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
]

const darkLogos = ['GitHub', 'Express', 'Flask', 'Bash', 'Next.js', 'JWT', 'GPS/GSM', 'BetterAuth']

export default function Skills() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-primary" id="skills">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-light-bg">Technical Toolkit</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mb-6 sm:mb-8"></div>
            <p className="text-text-dim max-w-2xl text-base sm:text-lg px-2">
              A full-spectrum skill set — from pixel-perfect React interfaces to full-stack MERN systems and database engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} direction="up" delay={index * 100}>
              <div className="
                relative p-6 sm:p-8 lg:p-10 rounded-2xl group
                bg-secondary/20 backdrop-blur-md
                border border-white/8
                shadow-lg shadow-black/20
                hover:shadow-xl hover:shadow-black/30
                hover:bg-secondary/30 hover:border-white/12
                transition-all duration-300
              ">
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r from-transparent via-white/15 to-transparent" />

                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 text-center sm:text-left">
                  <div className="
                    rounded-2xl text-accent flex items-center justify-center shrink-0
                    w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
                    bg-primary/50 backdrop-blur-sm
                    border border-white/8
                    shadow-inner shadow-black/20
                    group-hover:scale-110 group-hover:border-accent/30
                    transition-all duration-300
                  ">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl lg:text-5xl">{skill.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-light-bg tracking-tight">{skill.title}</h3>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3 lg:gap-4">
                  {skill.tags.map((tag) => (
                    <div key={tag.name} className="flex flex-col items-center gap-1.5 sm:gap-2 group/tag">
                      <div className="
                        w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12
                        rounded-xl p-2 lg:p-2.5
                        flex items-center justify-center
                        bg-primary/40 backdrop-blur-sm
                        border border-white/8
                        hover:border-accent/40 hover:bg-accent/10
                        hover:scale-110
                        transition-all duration-200
                      ">
                        <img
                          src={tag.logo}
                          alt={tag.name}
                          className="w-full h-full object-contain"
                          style={darkLogos.includes(tag.name) ? { filter: 'invert(1) brightness(0.8)' } : {}}
                        />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-text-dim uppercase tracking-wider group-hover/tag:text-accent transition-colors">
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}