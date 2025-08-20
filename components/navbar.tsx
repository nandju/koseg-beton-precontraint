"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{backgroundColor: '#021F69'}}>
                <div className="w-4 h-4 rounded-sm" style={{backgroundColor: '#FEFEFE'}}></div>
              </div> */}
              <h1 className="text-xl font-bold" style={{color: '#FEFEFE'}}>KOSEG<span className="text-xs">Béton Précontraint</span> </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#021F69'}}>
                Accueil
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#FEFEFE'}}>
                Pages
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#FEFEFE'}}>
                Services
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#FEFEFE'}}>
                Portfolio
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#FEFEFE'}}>
                Blog
              </a>
              <a href="#" className="px-3 py-2 text-sm font-medium" style={{color: '#FEFEFE'}}>
                Contactez-nous
              </a>
            </div>
          </div>

          {/* Right side icons and button */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer" style={{color: '#FEFEFE'}} />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer" style={{color: '#FEFEFE'}} />
              <span className="absolute -top-2 -right-2 text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    style={{backgroundColor: '#021F69', color: '#FEFEFE'}}>
                0
              </span>
            </div>
            <Button className="px-6 py-2 rounded-full"
                    style={{backgroundColor: '#021F69', color: '#FEFEFE'}}>
              Commencer →
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{color: '#FEFEFE'}}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{backgroundColor: '#7F95AF'}}>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#021F69'}}>
                Accueil
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#FEFEFE'}}>
                Pages
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#FEFEFE'}}>
                Services
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#FEFEFE'}}>
                Portfolio
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#FEFEFE'}}>
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium" style={{color: '#FEFEFE'}}>
                Contactez-nous
              </a>
              <div className="pt-4">
                <Button className="px-6 py-2 rounded-full w-full"
                        style={{backgroundColor: '#021F69', color: '#FEFEFE'}}>
                  Commencer →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}