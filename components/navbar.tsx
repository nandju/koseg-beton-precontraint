"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Phone, PhoneCall, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)


  return (
    <nav className="relative top-0 left-0 right-0 z-50 bg-[#021F69]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold" style={{color: '#FEFEFE'}}>
                KOSEG<span className="text-xs">Béton Précontraint</span> 
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="px-3 py-2 text-sm font-medium hover:text-[#7F95AF] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Accueil
              </a>
              
              {/* Dropdown Menu */}
              <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                <button 
                  className="px-3 py-2 text-sm font-medium hover:text-[#7F95AF] transition-colors duration-200 flex items-center gap-1"
                  style={{color: '#FEFEFE'}}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Qui vous êtes
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg border overflow-hidden"
                    style={{backgroundColor: '#FEFEFE', borderColor: '#7F95AF'}}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-sm font-medium hover:bg-[#7F95AF] hover:text-[#FEFEFE] transition-all duration-200"
                      style={{color: '#021F69'}}
                    >
                      À propos
                    </a>
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-sm font-medium hover:bg-[#7F95AF] hover:text-[#FEFEFE] transition-all duration-200 border-t border-gray-100"
                      style={{color: '#021F69'}}
                    >
                      Histoire
                    </a>
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-sm font-medium hover:bg-[#7F95AF] hover:text-[#FEFEFE] transition-all duration-200 border-t border-gray-100"
                      style={{color: '#021F69'}}
                    >
                      Équipe
                    </a>
                  </div>
                )}
              </div>

              <a href="services" className="px-3 py-2 text-sm font-medium hover:text-[#7F95AF] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Services
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:text-[#7F95AF] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                FAQ
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium hover:text-[#7F95AF] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Contacts
              </a>
            </div>
          </div>

          {/* Right side search and button */}
          <div className="hidden lg:flex items-center space-x-4">
            

            <a href="tel:+22507070707" className="inline-block">
              <Button 
                className="px-6 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#FEFEFE', color: '#021F69', border: '2px solid #021F69' }}
              >
                <PhoneCall className="w-5 h-5" />
                <span>+225 07 07 07 07</span>
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{color: '#FEFEFE'}}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{backgroundColor: '#7F95AF'}}>
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="flex">
                  
                </div>
              </div>

              <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Accueil
              </a>
              
              {/* Mobile Dropdown */}
              <div>
                <Button 
                  className="w-full text-left px-3 py-2 text-base font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200 flex items-center justify-between"
                  style={{color: '#FEFEFE'}}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Qui vous êtes
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>
                {isDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                      À propos
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                      Histoire
                    </a>
                    <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                      Équipe
                    </a>
                  </div>
                )}
              </div>

              <a href="services" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Services
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                FAQ
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium rounded-md hover:bg-[#021F69] transition-colors duration-200" style={{color: '#FEFEFE'}}>
                Contacts
              </a>
              
              <div className="pt-4">
                <a href="tel:+22507070707" className="block">
                  <Button
                    className="px-6 py-2 rounded-full w-full flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: '#FEFEFE', color: '#021F69', border: '2px solid #021F69' }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>+225 07 07 07 07</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}