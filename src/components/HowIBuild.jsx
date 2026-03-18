const steps = [
  { number: 1, title: 'Understand', desc: 'Identifying user needs and technical constraints first.' },
  { number: 2, title: 'Build', desc: 'Translating logic into scalable and maintainable codebases.' },
  { number: 3, title: 'Iterate', desc: 'Performance profiling and usability testing to refine the app.' },
  { number: 4, title: 'Debug', desc: 'Ensuring reliability and production-ready code quality.' },
]

export default function HowIBuild() {
  return (
    <section className="py-32 bg-primary px-6 border-y border-white/5" id="how-i-build">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-4xl font-black text-light-bg mb-4">How I Build</h2>
          <div className="h-1.5 w-24 bg-accent rounded-full mb-8"></div>
        </div>

        <div className="relative grid md:grid-cols-4 gap-12">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-white/5 z-0"></div>
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-xl bg-accent text-white flex items-center justify-center text-3xl font-black mb-6 shadow-xl transform group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-light-bg mb-3">{step.title}</h4>
              <p className="text-text-dim text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}