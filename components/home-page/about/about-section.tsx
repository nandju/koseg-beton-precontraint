"use client"
import { useState } from "react"
import { ArrowUpRight, Hammer, Building2, Home, Building } from "lucide-react"

const categories = [
  { name: "Commercial", icon: Building2 },
  { name: "Industriel", icon: Hammer },
  { name: "Résidentiel", icon: Home },
  { name: "Entreprise", icon: Building },
]

export default function AboutSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-[#FEFEFE]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Circular image with experience text */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Circular border with rotating text */}
              <div className="relative w-[450px] h-[450px] rounded-full border-2 border-[#021F69] p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/assets/images/illustrations/page-accueil/about.png"
                    alt="Professionnel de la construction"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Rotating text around the circle */}
                <div className="absolute inset-0 animate-spin-slow">
                  <svg className="w-full h-full" viewBox="0 0 320 320">
                    <defs>
                      <path id="circle" d="M 160, 160 m -140, 0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
                    </defs>
                    <text className="text-sm font-medium fill-[#021F69]">
                      <textPath href="#circle" startOffset="0%">
                        25 ans d'expérience • 25 ans d'expérience •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge and heading */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 border-2 border-[#021F69] text-[#021F69] rounded-full text-sm font-medium">
                  À PROPOS
                </span>
              </div>
              <h2 className="text-2xl md:text-5xl font-semibold text-[#021F69] leading-tight">
                Construire vos visions.
                <br />
                Créer la réalité.
              </h2>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                const isHovered = hoveredCategory === category.name

                return (
                  <div
                    key={category.name}
                    className={`p-6 border border-gray-200 rounded-lg cursor-pointer transition-all duration-300 ${
                      isHovered
                        ? "bg-[#7F95AF] text-[#FEFEFE] transform scale-105"
                        : "bg-[#FEFEFE] text-[#021F69] hover:shadow-lg"
                    }`}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-6 h-6" />
                        <span className="font-semibold">{category.name}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Description */}
            <p className="text-[#7F95AF] leading-relaxed">
              Notre mission est de transformer vos idées en réalisations durables, grâce à la post-tension et à une ingénierie de qualité.
            </p>

            {/* Founder signature */}
            <div className="flex items-center space-x-4">
              <div>
                <h4 className="font-semibold text-[#021F69]">Mme KOUAME GONTY</h4>
                <p className="text-[#7F95AF] text-sm">Client</p>
              </div>
              <div className="ml-8">
                <img src="/assets/images/illustrations/page-accueil/signature.png" alt="Signature" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}