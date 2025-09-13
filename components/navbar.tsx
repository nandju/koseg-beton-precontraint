"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Phone, PhoneCall, ChevronDown } from "lucide-react"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="relative top-0 left-0 right-0 z-50 bg-[#0B2C72]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo avec animation */}
          <BlurFade delay={0.1} direction="right" duration={0.6}>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  <h1 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
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
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                  Accueil
                </a>
              </BlurFade>
              
              {/* Dropdown Menu avec animation */}
              <BlurFade delay={0.3} direction="down" duration={0.5}>
                <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                  <button 
                    className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200 flex items-center gap-1"
                    style={{color: '#FFFFFF'}}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Qui vous êtes
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <BlurFade delay={0.1} direction="up" duration={0.3}>
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg border overflow-hidden"
                        style={{backgroundColor: '#FFFFFF', borderColor: '#D1D5DB'}}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                      >
                        <a 
                          href="/history" 
                          className="block px-4 py-3 text-sm font-medium hover:bg-[#FFB703] hover:text-[#FFFFFF] transition-all duration-200"
                          style={{color: '#0B2C72'}}
                        >
                          Histoire
                        </a>
                        <a 
                          href="/team" 
                          className="block px-4 py-3 text-sm font-medium hover:bg-[#FFB703] hover:text-[#FFFFFF] transition-all duration-200 border-t border-gray-100"
                          style={{color: '#0B2C72'}}
                        >
                          Équipe
                        </a>
                      </div>
                    </BlurFade>
                  )}
                </div>
              </BlurFade>

              <BlurFade delay={0.4} direction="down" duration={0.5}>
                <a href="services" className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                  Services
                </a>
              </BlurFade>

              <BlurFade delay={0.5} direction="down" duration={0.5}>
                <a href="portfolios" className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                  Portfolio
                </a>
              </BlurFade>

              <BlurFade delay={0.6} direction="down" duration={0.5}>
                <a href="blogs" className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                  Blogs
                </a>
              </BlurFade>

              <BlurFade delay={0.7} direction="down" duration={0.5}>
                <a href="contacts" className="px-3 py-2 text-sm font-medium hover:text-[#D1D5DB] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                  Contacts
                </a>
              </BlurFade>
            </div>
          </div>

          {/* Bouton téléphone avec animation */}
          <BlurFade delay={0.8} direction="left" duration={0.6}>
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+22507070707" className="inline-block">
                <Button 
                  className="px-6 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-all duration-300 hover:bg-[#FFB703]"
                  style={{ backgroundColor: '#FFFFFF', color: '#0B2C72', border: '2px solid #0B2C72' }}
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>+225 07 07 07 07</span>
                </Button>
              </a>
            </div>
          </BlurFade>

          {/* Bouton menu mobile avec animation */}
          <BlurFade delay={0.9} direction="left" duration={0.5}>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{color: '#FFFFFF'}}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </BlurFade>
        </div>

        {/* Menu Mobile avec animation */}
        {isMenuOpen && (
          <BlurFade delay={0.2} direction="down" duration={0.4}>
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{backgroundColor: '#374151'}}>
                {/* Mobile Search */}
                <div className="px-3 py-2">
                  <div className="flex">
                    
                  </div>
                </div>

                <BlurFade delay={0.3} direction="right" duration={0.4}>
                  <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                    Accueil
                  </a>
                </BlurFade>
                
                {/* Mobile Dropdown avec animation */}
                <BlurFade delay={0.4} direction="right" duration={0.4}>
                  <div>
                    <Button 
                      className="w-full text-left px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200 flex items-center justify-between"
                      style={{color: '#FFFFFF', backgroundColor: 'transparent'}}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      Qui vous êtes
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </Button>
                    {isDropdownOpen && (
                      <BlurFade delay={0.2} direction="right" duration={0.3}>
                        <div className="pl-4 mt-1 space-y-1">
                          <a href="/history" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                            Histoire
                          </a>
                          <a href="/team" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                            Équipe
                          </a>
                        </div>
                      </BlurFade>
                    )}
                  </div>
                </BlurFade>

                <BlurFade delay={0.5} direction="right" duration={0.4}>
                  <a href="services" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                    Services
                  </a>
                </BlurFade>

                <BlurFade delay={0.6} direction="right" duration={0.4}>
                  <a href="portfolios" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                    Portfolio
                  </a>
                </BlurFade>

                <BlurFade delay={0.7} direction="right" duration={0.4}>
                  <a href="blogs" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                    Blogs
                  </a>
                </BlurFade>

                <BlurFade delay={0.8} direction="right" duration={0.4}>
                  <a href="contacts" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#0B2C72] transition-colors duration-200" style={{color: '#FFFFFF'}}>
                    Contacts
                  </a>
                </BlurFade>
                
                <BlurFade delay={0.9} direction="up" duration={0.5}>
                  <div className="pt-4">
                    <a href="tel:+22507070707" className="block">
                      <Button
                        className="px-6 py-2 rounded-full w-full flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300 hover:bg-[#FFB703]"
                        style={{ backgroundColor: '#FFFFFF', color: '#0B2C72', border: '2px solid #0B2C72' }}
                      >
                        <Phone className="w-5 h-5" />
                        <span>+225 07 07 07 07</span>
                      </Button>
                    </a>
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        )}
      </div>
    </nav>
  )
}