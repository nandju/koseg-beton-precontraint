"use client"

import { useEffect, useRef } from "react"
import { Button } from "../ui/button"

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && contentRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        const sectionHeight = sectionRef.current.offsetHeight
        const windowHeight = window.innerHeight
        
        // Jouer la vidéo quand la section est visible
        if (isVisible && videoRef.current) {
          videoRef.current.play().catch(() => {
            // Handle autoplay restrictions
          })
        }
        
        // Calcul de l'effet de transition pour le contenu
        if (rect.top <= windowHeight && rect.top >= -sectionHeight) {
          // Quand la section entre dans la vue
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
          
          // Le contenu glisse depuis le bas vers sa position finale
          const translateY = (1 - progress) * 100
          const opacity = Math.min(progress * 2, 1) // Apparition plus rapide
          
          contentRef.current.style.transform = `translateY(${translateY}px)`
          contentRef.current.style.opacity = opacity.toString()
        }
      }
    }

    // Exécuter une fois au chargement
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Video Background */}
      <video 
        ref={videoRef} 
        className="absolute inset-0 w-full h-full object-cover" 
        muted 
        loop 
        playsInline
      >
        <source src="/assets/videos/Immeuble3D.mp4" type="video/mp4" />
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-600"></div>
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#021F69]/20"></div>
      
      {/* Contenu qui glisse depuis le bas */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-75 ease-out"
        style={{
          transform: 'translateY(100px)',
          opacity: 0
        }}
      >
        <div className="mb-6">
          <span 
            className="inline-block font-sourcesans3 px-6 py-2 border-2 rounded-full text-sm font-medium tracking-wider"
            style={{borderColor: '#021F69', color: '#021F69'}}
          >
            NOUS SOMMES
          </span>
        </div>
        
        <h2 
          className="text-2xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
          style={{color: '#FEFEFE'}}
        >
          L'avenir de la construction commence ici.
        </h2>
        
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