import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-primary/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className=" material-symbols-outlined text-accent text-2xl md:text-3xl">terminal</span>
            <span className="text-lg md:text-xl font-bold tracking-tight text-light-bg ">Portfolio</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {['home', 'projects', 'skills', 'about', 'experience', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-medium text-text-dim hover:text-accent transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume + Hamburger */}
          <div className="flex items-center gap-3">
            <button className="bg-accent hover:bg-accent-hover text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 md:gap-2 transform hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-sm">download</span>
              <span>Resume</span>
            </button>

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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-primary/98 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {['home', 'projects', 'skills', 'about', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-text-dim hover:text-accent transition-colors capitalize py-1"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}