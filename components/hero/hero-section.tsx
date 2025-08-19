"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && heroRef.current) {
        const scrolled = window.scrollY
        const heroHeight = heroRef.current.offsetHeight
        
        // Calcul du pourcentage de scroll dans la hero section
        const scrollProgress = Math.min(scrolled / heroHeight, 1)
        
        // Le texte commence à glisser quand on scroll dans la hero
        // Il se déplace vers le bas de plus en plus vite
        const translateY = scrollProgress * heroHeight * 0.8
        
        // Effet d'opacité pour une transition plus douce
        const opacity = Math.max(1 - (scrollProgress * 1.5), 0)
        
        textRef.current.style.transform = `translateY(${translateY}px)`
        textRef.current.style.opacity = opacity.toString()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/backgroundb.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Content */}
      <div 
        ref={textRef} 
        className="relative z-10 text-center px-4 max-w-4xl lg:pt-28 mx-auto transition-all duration-75 ease-out"
      >
        <div className="mb-6">
          <span 
            className="inline-block font-sourcesans3 px-6 py-2 border-2 rounded-full text-sm font-medium tracking-wider"
            style={{borderColor: '#021F69', color: '#021F69'}}
          >
            NOUS SOMMES
          </span>
        </div>
        
        <h1 
          className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
          style={{color: '#FEFEFE'}}
        >
          L'avenir de la construction commence ici.
        </h1>
        
        <Button 
          className="px-8 py-3 rounded-full text-lg font-medium"
          style={{backgroundColor: '#FEFEFE', color: '#021F69'}}
        >
          Commencer →
        </Button>
      </div>
    </section>
  )
}