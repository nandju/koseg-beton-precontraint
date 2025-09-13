"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PortfoliosHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/illustrations/page-portfolios/hero.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0B2C72]/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance">Portfolios</h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center space-x-2 text-lg sm:text-xl">
          <Link href="/" className="hover:text-[#FFB703] transition-colors duration-300">
            Accueil
          </Link>
          <ChevronRight className="w-5 h-5 text-white/70" />
          <span className="text-white/90">Portfolios</span>
        </nav>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  )
}
