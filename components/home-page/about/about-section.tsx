"use client"
import { useState } from "react"
import { ArrowUpRight, Hammer, Building2, Home, Building } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const categories = [
  { name: "Commercial", icon: Building2 },
  { name: "Industriel", icon: Hammer },
  { name: "Résidentiel", icon: Home },
  { name: "Entreprise", icon: Building },
]

export default function AboutSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Right side - Circular image with experience text */}
          <BlurFade delay={0.3} direction="left" duration={1.0} inView>
          <div className="relative flex justify-center order-1 lg:order-1">
            <div className="relative">
              {/* Circular border */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-2 border-[#0B2C72] p-3 sm:p-4 bg-[#FFFFFF]/90 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/assets/images/illustrations/page-accueil/founder-construction.jpg"
                    alt="Professionnel de la construction"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Rotating text around the circle - OUTSIDE */}
              
              <div className="absolute inset-0 animate-spin-slow -m-8 sm:-m-10 lg:-m-12">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <path id="circle" d="M 200, 200 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0" />
                  </defs>
                  <text className="text-xs sm:text-sm font-medium fill-[#FFB703]">
                    <textPath href="#circle" startOffset="0%">
                      25 ans d'expérience • 25 ans d'expérience •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          </BlurFade>

          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
            {/* Badge and heading */}
            <div className="space-y-4 sm:space-y-6 text-start lg:text-left">
              <BlurFade delay={0.2} direction="right" duration={0.6} inView>
              <div className="inline-block">
                <span className="px-4 py-2 border-2 border-[#0B2C72] text-[#0B2C72] rounded-full text-sm font-medium bg-[#FFFFFF]/90 backdrop-blur-sm">
                  À PROPOS
                </span>
              </div>
              </BlurFade>

              <BlurFade delay={0.4} direction="right" duration={0.8} inView>
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold text-[#0B2C72] leading-tight">
                Construire vos visions.
                <br />
                Créer la réalité.
              </h2>
              </BlurFade>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon
                const isHovered = hoveredCategory === category.name

                return (
                  <BlurFade 
                    key={category.name}
                    delay={0.6 + (index * 0.15)} 
                    direction="up" 
                    duration={0.6} 
                    inView
                  >
                  <div
                    key={category.name}
                    className={`p-4 sm:p-6 border border-gray-200 rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                      isHovered
                        ? "bg-[#FFB703] text-[#FFFFFF] transform scale-105 border-[#FFB703]"
                        : "bg-[#FFFFFF]/90 text-[#0B2C72] hover:shadow-lg hover:border-[#0B2C72]"
                    }`}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="font-semibold text-sm sm:text-base">{category.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  </BlurFade>
                )
              })}
            </div>

            {/* Description */}
            <BlurFade delay={1.2} direction="right" duration={0.8} inView>
            <p className="text-[#374151] leading-relaxed text-start lg:text-left text-sm sm:text-base">
              Notre mission est de transformer vos idées en réalisations durables, grâce à la post-tension et à une ingénierie de qualité.
            </p>
            </BlurFade>

            {/* Founder signature */}
            <BlurFade delay={1.4} direction="up" duration={0.8} inView>
            <div className="flex items-center space-x-4 justify-start lg:justify-start">
              <div>
                <h4 className="font-semibold text-[#0B2C72] text-sm sm:text-base">Mr COULIBALY ABDOULAYE</h4>
                <p className="text-[#374151] text-xs sm:text-sm">Fondateur</p>
              </div>
              <div className="ml-8">
                <img src="/assets/images/illustrations/page-accueil/signature_2.png" alt="Signature" className="h-8 sm:h-12 w-auto" />
              </div>
            </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}