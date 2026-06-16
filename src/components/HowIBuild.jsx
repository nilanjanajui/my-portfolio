import AnimatedSection from './AnimatedSection'

const steps = [
  {
    number: 1,
    title: 'Sketch First',
    icon: 'edit_note',
    desc: 'I sketch component trees and layouts on paper before opening VS Code. Photography trained me to see framing and hierarchy - I apply the same eye to UI before writing a single line.',
  },
  {
    number: 2,
    title: 'Build to Ship',
    icon: 'rocket_launch',
    desc: 'I build for production from day one - real auth, real databases, real domains. Every project I build gets deployed. Nothing stays on localhost.',
  },
  {
    number: 3,
    title: 'Debug Deeply',
    icon: 'manage_search',
    desc: 'I\'ve resolved CORS failures, HTTPOnly cookie mismatches across domains, Tailwind v4 CSS cascade conflicts, and BetterAuth collection mismatches in production. I don\'t stop at the error message.',
  },
  {
    number: 4,
    title: 'Iterate on Detail',
    icon: 'auto_fix_high',
    desc: 'I revisit shipped work - refactoring glassmorphism across components, migrating EmailJS to Web3Forms, rewriting ETL pipelines. Good enough ships; better is always next.',
  },
]

export default function HowIBuild() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-primary px-4 sm:px-6 border-y border-white/5" id="how-i-build">
      <div className="max-w-7xl mx-auto">

        <AnimatedSection direction="up">
          <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-light-bg mb-4">How I Build</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mb-4" />
            <p className="text-text-dim text-base sm:text-lg max-w-xl font-medium">
              Not a process I read about - one I developed shipping real apps.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} direction="up" delay={index * 150}>
              <div className="
                relative h-full flex flex-col gap-4 p-6 sm:p-8 rounded-2xl overflow-hidden
                bg-secondary/40 backdrop-blur-md
                border border-white/8
                shadow-lg shadow-black/20
                hover:border-accent/25 hover:bg-secondary/60
                transition-all duration-300 group
              ">
                {/* Top shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

                {/* Step number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black text-accent/80 group-hover:text-accent/90 transition-colors leading-none">
                    {String(step.number).padStart(2, '0')}
                  </span>
                  <span className="material-symbols-outlined text-accent text-2xl sm:text-3xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg sm:text-xl font-black text-light-bg">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-text-dim text-sm sm:text-base leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}