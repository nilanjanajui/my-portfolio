import { useState, useEffect } from 'react'


const NAV_ITEMS = ['home', 'projects', 'skills', 'about', 'education', 'experience', 'contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-primary/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="material-symbols-outlined text-accent text-2xl md:text-3xl">terminal</span>
            <span className="text-lg md:text-xl font-bold tracking-tight text-light-bg">Portfolio</span>
          </div>

          {/* Desktop Nav — pill style */}
          <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1.5 gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-all duration-100 ${
                  activeSection === item
                    ? 'bg-transparent border border-accent text-light-bg shadow-[0_0_12px_rgba(113,90,90,0.4)]'
                    : 'text-text-dim hover:text-light-bg border border-transparent'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 shrink-0">

            <button
              className="md:hidden text-light-bg p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>

            {/* Resume button — pill style like image */}
            <a
              href="/resume.pdf"
              download
              className="bg-accent hover:bg-accent-hover text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 md:gap-2 transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Resume
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-light-bg p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary/98 border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => { setMenuOpen(false); setActiveSection(item) }}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold capitalize transition-colors ${
                activeSection === item
                  ? 'text-accent bg-accent/10 border border-accent/20'
                  : 'text-text-dim hover:text-light-bg hover:bg-white/5'
              }`}
            >
              {item}
            </a>
          ))}
          {/* Resume in mobile menu */}
          <a
            href="/resume.pdf"
            download
            className="mt-2 flex items-center justify-center gap-2 border border-white/20 text-light-bg px-5 py-2.5 rounded-xl text-sm font-bold"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}