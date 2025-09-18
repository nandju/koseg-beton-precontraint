"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Phone, PhoneCall, ChevronDown } from "lucide-react"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Gestion du hover avec délai pour éviter la fermeture accidentelle
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 150) // Délai de 150ms
  }

  return (
    <nav className="relative top-0 left-0 right-0 z-50 bg-[#0B2C72] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo avec animation */}
          <BlurFade delay={0.1} direction="right" duration={0.6}>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Link href="/" className="hover:opacity-90 transition-opacity duration-300">
                  <h1 className="text-xl font-bold text-white">
                    KOSEG <span className="text-xs">Béton Précontraint</span>
                  </h1>
                </Link>
              </div>
            </div>
          </BlurFade>

          {/* Desktop Navigation avec animations échelonnées */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <BlurFade delay={0.2} direction="down" duration={0.5}>
                <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300">
                  Accueil
                </Link>
              </BlurFade>
              
              {/* Dropdown Menu avec animation améliorée */}
              <BlurFade delay={0.3} direction="down" duration={0.5}>
                <div 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300 flex items-center gap-1"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Qui vous êtes
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown avec animation et positionnement amélioré */}
                  <div className={`absolute top-full left-0 mt-2 w-56 transform transition-all duration-300 origin-top ${
                    isDropdownOpen 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}>
                    <div 
                      className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden backdrop-blur-sm"
                      style={{boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'}}
                    >
                      <Link 
                        href="/history" 
                        className="group block px-4 py-3 text-sm font-medium text-[#0B2C72] hover:bg-[#FFB703] hover:text-white transition-all duration-300 transform hover:translate-x-1"
                      >
                        <div className="flex items-center">
                          <span>Histoire</span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </div>
                        </div>
                      </Link>
                      <Link 
                        href="/team" 
                        className="group block px-4 py-3 text-sm font-medium text-[#0B2C72] hover:bg-[#FFB703] hover:text-white transition-all duration-300 transform hover:translate-x-1 border-t border-gray-100"
                      >
                        <div className="flex items-center">
                          <span>Équipe</span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.4} direction="down" duration={0.5}>
                <Link href="/services" className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300">
                  Services
                </Link>
              </BlurFade>

              <BlurFade delay={0.5} direction="down" duration={0.5}>
                <Link href="/portfolios" className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300">
                  Portfolio
                </Link>
              </BlurFade>

              <BlurFade delay={0.6} direction="down" duration={0.5}>
                <Link href="/blogs" className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300">
                  Blogs
                </Link>
              </BlurFade>

              <BlurFade delay={0.7} direction="down" duration={0.5}>
                <Link href="/contacts" className="px-3 py-2 text-sm font-medium text-white hover:text-[#D1D5DB] hover:bg-white/10 rounded-md transition-all duration-300">
                  Contacts
                </Link>
              </BlurFade>
            </div>
          </div>

          {/* Bouton téléphone avec animation améliorée */}
          <BlurFade delay={0.8} direction="left" duration={0.6}>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+22507070707" className="inline-block">
                <Button 
                  className="px-6 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 group bg-white text-[#0B2C72] border-2 border-[#0B2C72] hover:bg-[#FFB703] hover:border-[#FFB703] hover:text-white"
                >
                  <PhoneCall className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  <span>+225 07 07 07 07</span>
                </Button>
              </a>
            </div>
          </BlurFade>

          {/* Bouton menu mobile avec animation */}
          <BlurFade delay={0.9} direction="left" duration={0.5}>
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white p-2 rounded-md hover:bg-white/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </BlurFade>
        </div>

        {/* Menu Mobile avec animation améliorée */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#374151] rounded-b-lg">
            <BlurFade delay={0.3} direction="right" duration={0.4}>
              <Link href="/" className="block px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                Accueil
              </Link>
            </BlurFade>
            
            {/* Mobile Dropdown avec animation */}
            <BlurFade delay={0.4} direction="right" duration={0.4}>
              <div>
                <button 
                  className="w-full text-left px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] transition-all duration-300 flex items-center justify-between"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  Qui vous êtes
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  isMobileDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 mt-1 space-y-1">
                    <Link href="/history" className="block px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                      Histoire
                    </Link>
                    <Link href="/team" className="block px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                      Équipe
                    </Link>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} direction="right" duration={0.4}>
              <Link href="/services" className="block px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                Services
              </Link>
            </BlurFade>

            <BlurFade delay={0.6} direction="right" duration={0.4}>
              <Link href="/portfolios" className="block px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                Portfolio
              </Link>
            </BlurFade>

            <BlurFade delay={0.7} direction="right" duration={0.4}>
              <Link href="/blogs" className="block px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                Blogs
              </Link>
            </BlurFade>

            <BlurFade delay={0.8} direction="right" duration={0.4}>
              <Link href="/contacts" className="block px-3 py-2 text-base font-medium rounded-md text-white hover:bg-[#0B2C72] hover:translate-x-2 transition-all duration-300">
                Contacts
              </Link>
            </BlurFade>
            
            <BlurFade delay={0.9} direction="up" duration={0.5}>
              <div className="pt-4">
                <a href="tel:+22507070707" className="block">
                  <Button
                    className="px-6 py-2 rounded-full w-full flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300 group bg-white text-[#0B2C72] border-2 border-[#0B2C72] hover:bg-[#FFB703] hover:border-[#FFB703] hover:text-white"
                  >
                    <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span>+225 07 07 07 07</span>
                  </Button>
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </nav>
  )
}