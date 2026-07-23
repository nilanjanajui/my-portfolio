import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[50]
        p-3 sm:p-4 rounded-full flex items-center justify-center
        bg-accent backdrop-blur-md text-white
        border border-white/20
        shadow-[0_0_20px_rgba(147,51,234,0.3)]
        hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]
        hover:bg-accent-hover
        transform hover:-translate-y-2
        transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <span className="material-symbols-outlined text-xl sm:text-2xl font-bold">arrow_upward</span>
    </button>
  )
}
