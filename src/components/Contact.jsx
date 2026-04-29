import AnimatedSection from './AnimatedSection'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      alert('Message sent!')
      form.current.reset()
    }).catch(() => {
      alert('Something went wrong. Try again.')
    })
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6" id="contact">
      <AnimatedSection direction="up" delay={150}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-secondary border border-white/5 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-24 flex flex-col items-center text-center shadow-2xl">

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-light-bg mb-6 sm:mb-10 max-w-3xl leading-tight">
              Let's build something{' '}
              <span className="text-accent underline decoration-white/10 underline-offset-8">exceptional</span>{' '}
              together.
            </h2>

            <p className="text-base sm:text-xl text-text-dim mb-10 sm:mb-16 max-w-2xl font-medium px-2">
              "I don't just build interfaces - I build applications that solve problems and work reliably."
            </p>

            <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full bg-primary border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-light-bg font-bold placeholder:text-text-dim/50 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full bg-primary border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-light-bg font-bold placeholder:text-text-dim/50 focus:ring-2 focus:ring-accent outline-none transition-all text-sm sm:text-base resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-black py-4 sm:py-5 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-black/20 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-8 mb-12 sm:mb-20 w-full sm:w-auto">
              {[
                { icon: 'mail',     label: 'Email',          href: 'mailto:nilanjana.csecu@gmail.com' },
                { icon: 'share',    label: 'LinkedIn',       href: 'https://www.linkedin.com/in/nilanjana-jui-759402286/' },
                { icon: 'terminal', label: 'GitHub',         href: 'https://github.com/nilanjanajui' },
              ].map((link, index) => (
                <AnimatedSection key={link.label} direction="up" delay={index * 150}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 bg-white/5 px-5 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-light-bg hover:bg-white/10 hover:-translate-y-1 transition-all group text-sm sm:text-base"
                  >
                    <span className="material-symbols-outlined text-accent group-hover:scale-110 transition-transform text-base sm:text-xl">
                      {link.icon}
                    </span>
                    <span className="font-bold">{link.label}</span>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <div className="h-px w-full max-w-5xl bg-white/5 mb-8 sm:mb-12"></div>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl text-text-dim font-medium text-xs sm:text-sm gap-3 sm:gap-6 text-center md:text-left">
              <p>© 2026 Nilanjana Das Jui. All rights reserved.</p>
              <div className="flex justify-center md:justify-end gap-6 sm:gap-10">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Open Source</a>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}