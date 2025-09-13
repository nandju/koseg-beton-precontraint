"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Construire mieux avec le béton.",
      subtitle: "Nous offrons les services de rénovation de maisons les plus complets du pays, avec de nombreux designs.",
      buttonText: "Commencer",
      rightImage: "/assets/images/illustrations/page-accueil/hero_1.png",
      phone: "+225 07 12 34 56 78",
      email: "contact@construction.ci"
    },
    {
      title: "Excellence en Architecture Moderne.",
      subtitle: "Des solutions de construction professionnelles avec des techniques innovantes et des matériaux durables pour vos projets de rêve.",
      buttonText: "En savoir plus", 
      rightImage: "/assets/images/illustrations/page-accueil/hero_2.png",
      phone: "+225 05 43 21 87 65",
      email: "info@construction.ci"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/backgroundb.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main container with two sections */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        
        {/* Left Section - Content */}
        <div 
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen lg:min-h-0"
          style={{ backgroundColor: '#0B2C72' }}
        >
          {/* Badge */}
          <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
            <div
              key={`badge-${currentSlide}`}
              className="animate-[slideInUp_0.8s_ease-out_forwards]"
            >
              <span 
                className="inline-block font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0B2C72'
                }}
              >
                NOUS CONSTRUISONS
              </span>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
            <h1 
              key={`title-${currentSlide}`}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-[slideInUp_0.8s_ease-out_0.2s_both]"
              style={{ color: '#FFFFFF' }}
            >
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index}>
                  {word === 'mieux' || word === 'béton.' || word === 'Moderne.' ? (
                    <span className="relative inline-block">
                      {word}
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 rounded-full"
                        style={{ backgroundColor: '#FFB703' }}
                      />
                    </span>
                  ) : (
                    word
                  )}
                  {index < slides[currentSlide].title.split(' ').length - 1 && ' '}
                </span>
              ))}
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-10 sm:mb-16 lg:mb-20 overflow-hidden">
            <p 
              key={`subtitle-${currentSlide}`}
              className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl animate-[slideInUp_0.8s_ease-out_0.4s_both]"
              style={{ color: '#FFFFFF' }}
            >
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          {/* Button */}
          <div className="mb-12 sm:mb-20 lg:mb-24 overflow-hidden">
            <div
              key={`button-${currentSlide}`}
              className="animate-[slideInUp_0.8s_ease-out_0.6s_both]"
            >
              <Button 
                className="px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full text-sm sm:text-base lg:text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 sm:gap-3"
                style={{
                  backgroundColor: '#FFB703',
                  color: '#FFFFFF',
                  border: 'none'
                }}
              >
                {slides[currentSlide].buttonText}
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 overflow-hidden">
            <div
              key={`phone-${currentSlide}`}
              className="animate-[slideInUp_0.8s_ease-out_0.8s_both]"
            >
              <p className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: '#FFFFFF' }}>
                {slides[currentSlide].phone}
              </p>
            </div>
            <div
              key={`email-${currentSlide}`}
              className="animate-[slideInUp_0.8s_ease-out_1s_both]"
            >
              <p className="text-sm sm:text-base lg:text-xl" style={{ color: '#D1D5DB' }}>
                {slides[currentSlide].email}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Changing Image */}
        <div className="w-full lg:w-1/2 relative overflow-hidden h-64 sm:h-96 lg:h-auto min-h-[400px] lg:min-h-screen" style={{ backgroundColor: '#F3EEE3' }}>
          
          {/* Background watermark text - Hidden on mobile */}
          <div 
            className="absolute inset-0 items-center justify-center opacity-20 pointer-events-none z-10 hidden lg:flex"
            style={{ color: '#0B2C72' }}
          >
            <span className="text-[15rem] xl:text-[25rem] font-bold transform rotate-12 select-none">build</span>
          </div>

          {/* Changing Images */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1200 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 scale-110 -translate-x-full'
                    : 'opacity-0 scale-110 translate-x-full'
              }`}
            >
              <img
                src={slide.rightImage}
                alt={`Projet de construction ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-1200 ${
                  index === currentSlide ? 'scale-100' : 'scale-110'
                }`}
                style={{
                  filter: 'brightness(1) contrast(1.05) saturate(1.1)'
                }}
              />
              
              {/* Subtle overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(11, 44, 114, 0.1) 0%, transparent 70%)'
                }}
              />
            </div>
          ))}

          {/* Decorative elements - Responsive */}
          <div className="absolute top-4 sm:top-6 lg:top-10 right-4 sm:right-6 lg:right-10 z-20">
            <div 
              className="w-8 sm:w-12 lg:w-20 h-8 sm:h-12 lg:h-20 rounded-full opacity-20"
              style={{ backgroundColor: '#0B2C72' }}
            />
          </div>
          <div className="absolute bottom-8 sm:bottom-12 lg:bottom-20 left-4 sm:left-6 lg:left-10 z-20">
            <div 
              className="w-16 sm:w-24 lg:w-32 h-0.5 sm:h-0.5 lg:h-1 opacity-30"
              style={{ backgroundColor: '#374151' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_forwards\\] {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_0\\.2s_both\\] {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_0\\.4s_both\\] {
          animation: slideInUp 0.8s ease-out 0.4s both;
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_0\\.6s_both\\] {
          animation: slideInUp 0.8s ease-out 0.6s both;
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_0\\.8s_both\\] {
          animation: slideInUp 0.8s ease-out 0.8s both;
        }
        
        .animate-\\[slideInUp_0\\.8s_ease-out_1s_both\\] {
          animation: slideInUp 0.8s ease-out 1s both;
        }

        @media (max-width: 1023px) {
          .min-h-screen {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}