import { useEffect, useState } from 'react'

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Only animate on desktop devices to save battery/performance on mobile
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      // Calculate deviation from the center of the screen
      const x = (e.clientX - window.innerWidth / 2) / 20; 
      const y = (e.clientY - window.innerHeight / 2) / 20; 
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Orb - Moves opposite to cursor */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent/15 blur-[100px] rounded-full transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-mousePos.x}px, ${-mousePos.y}px, 0)`
        }}
      />
      
      {/* Middle Right Orb - Moves with cursor but slightly faster */}
      <div 
        className="absolute top-[40%] right-[-10%] w-80 h-80 bg-secondary/30 blur-[80px] rounded-full transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)`
        }}
      />
      
      {/* Bottom Left Orb - Moves with cursor slowly */}
      <div 
        className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-accent/10 blur-[90px] rounded-full transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`
        }}
      />
    </div>
  )
}
