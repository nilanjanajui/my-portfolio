import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if it's a touch device (don't show custom cursor on mobile)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true)
      return
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const isClickable = e.target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHovering(!!isClickable);
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (isTouchDevice) return null;

  return (
    <>
      {/* Core glowing dot */}
      <div 
        className={`fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-all duration-75 ease-out shadow-[0_0_15px_rgba(255,255,255,0.5)] ${isHovering ? 'bg-white' : 'bg-accent'}`}
        style={{ 
            transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovering ? 2.5 : 1})`,
        }}
      />
      {/* Outer ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ 
            transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
            opacity: isHovering ? 0 : 1
        }}
      />
    </>
  )
}
