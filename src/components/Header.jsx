import { useState, useEffect } from 'react'

import resumePDF from "../assets/resume.pdf";

const NAV_ITEMS = ['home', 'projects', 'skills', 'about', 'education', 'experience', 'contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100
      setScrolled(window.scrollY > 20)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-primary/40 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 md:h-16 items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="material-symbols-outlined text-accent text-2xl md:text-3xl">terminal</span>
            <span className="text-lg md:text-xl font-bold tracking-tight text-light-bg">NJ ⌘</span>
          </div>

          {/* Desktop Nav — glass pill */}
          <nav className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 gap-1 shadow-inner shadow-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-all duration-200 ${
                  activeSection === item
                    ? 'bg-accent/20 backdrop-blur-sm border border-accent/50 text-light-bg shadow-[0_0_14px_rgba(113,90,90,0.35)]'
                    : 'text-text-dim hover:text-light-bg hover:bg-white/8 border border-transparent'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Resume button */}
            <a
              href={resumePDF}
              download
              className="bg-accent hover:bg-accent-hover text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 md:gap-2 transform hover:-translate-y-0.5 shadow-lg shadow-accent/20"
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

      {/* Mobile Menu — glass panel */}
      {menuOpen && (
        <div className="md:hidden bg-primary/40 backdrop-blur-xl border-t border-white/8 px-4 py-4 flex flex-col gap-1 shadow-xl shadow-black/30">
          {NAV_ITEMS.map((item) => (
            <a  
              key={item}
              href={`#${item}`}
              onClick={() => { setMenuOpen(false); setActiveSection(item) }}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${
                activeSection === item
                  ? 'text-accent bg-accent/15 border border-accent/25 backdrop-blur-sm'
                  : 'text-text-dim hover:text-light-bg hover:bg-white/8 border border-transparent'
              }`}
            >
              {item}
            </a>
          ))}
          
          <a
            href={resumePDF}
            download
            className="mt-2 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-light-bg px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}