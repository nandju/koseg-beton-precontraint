"use client"

import { useState } from "react"
import { Award, Trophy, Star, Globe } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const AwardsTimeline = () => {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null)

  const awards = [
    {
      id: 1,
      year: '2018',
      title: 'Excellence Technique',
      subtitle: 'Innovation en Précontrainte',
      description: 'Reconnaissance pour l\'excellence de nos systèmes de post-tension et notre expertise dans la réalisation de dalles précontraintes haute performance avec optimisation des portées.',
      icon: Award,
      position: 'top'
    },
    {
      id: 2,
      year: '2020',
      title: 'Partenariat MEGA PREFAB',
      subtitle: 'Franchise Exclusive',
      description: 'Obtention de la franchise exclusive avec MEGA PREFAB, leader mondial en systèmes de précontrainte, garantissant des produits de haute fiabilité et une qualité inégalée.',
      icon: Star,
      position: 'bottom'
    },
    {
      id: 3,
      year: '2022',
      title: 'Projet d\'Envergure',
      subtitle: 'Structure Complexe',
      description: 'Distinction pour la réussite d\'un projet majeur utilisant nos systèmes de précontrainte adhérente, avec maîtrise parfaite des contraintes techniques et respect des délais.',
      icon: Trophy,
      position: 'top'
    },
    {
      id: 4,
      year: '2024',
      title: 'Leader Régional',
      subtitle: 'Solutions Durables',
      description: 'Reconnaissance en tant que leader des solutions de béton précontraint en Côte d\'Ivoire pour notre engagement envers la durabilité, l\'innovation et la performance structurelle.',
      icon: Globe,
      position: 'bottom'
    }
  ]

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F3EEE3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} direction="up" inView={true}>
            <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-[#0B2C72] text-[#0B2C72] mb-6">
              <span className="text-sm font-medium uppercase tracking-wide">RÉALISATIONS</span>
            </div>
          </BlurFade>
          
          <BlurFade delay={0.2} direction="up" inView={true}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B2C72]">
              Nos Réalisations et Distinctions
            </h2>
          </BlurFade>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Timeline Line */}
          <BlurFade delay={0.3} direction="right" inView={true} duration={0.8}>
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#D1D5DB] transform -translate-y-1/2">
            </div>
          </BlurFade>

          {/* Timeline Points and Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {awards.map((award, index) => (
                <BlurFade 
                  key={award.id} 
                  delay={0.4 + index * 0.2} 
                  direction={award.position === 'top' ? 'down' : 'up'} 
                  inView={true}
                  duration={0.6}
                >
                  <div 
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredAward(award.id)}
                    onMouseLeave={() => setHoveredAward(null)}
                  >
                    
                    {/* Award Card */}
                    <div className={`w-full max-w-sm transition-all duration-300 ${
                      award.position === 'top' ? 'lg:mb-16' : 'lg:mt-16'
                    } ${hoveredAward === award.id ? 'transform -translate-y-2' : ''}`}>
                      
                      <div className={`bg-[#FFFFFF] rounded-lg border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        hoveredAward === award.id ? 'border-[#FFB703]' : 'border-[#D1D5DB]'
                      }`}>
                        
                        {/* Award Icon */}
                        <BlurFade delay={0.5 + index * 0.2} direction="up" duration={0.4}>
                          <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 bg-[#0B2C72] rounded-full flex items-center justify-center">
                              <award.icon className="w-6 h-6 text-[#FFFFFF]" />
                            </div>
                          </div>
                        </BlurFade>

                        {/* Award Content */}
                        <div className="text-center space-y-3">
                          <BlurFade delay={0.6 + index * 0.2} direction="up" duration={0.4}>
                            <h3 className="text-lg font-bold text-[#0B2C72]">
                              {award.title}
                            </h3>
                          </BlurFade>
                          
                          <BlurFade delay={0.7 + index * 0.2} direction="up" duration={0.4}>
                            <p className="text-sm font-medium text-[#FFB703]">
                              {award.subtitle}
                            </p>
                          </BlurFade>
                          
                          <BlurFade delay={0.8 + index * 0.2} direction="up" duration={0.4}>
                            <p className="text-sm leading-relaxed text-[#374151]">
                              {award.description}
                            </p>
                          </BlurFade>
                        </div>

                        {/* Connection Line to Timeline */}
                        <div 
                          className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-6 ${
                            award.position === 'top' ? '-bottom-6' : '-top-6'
                          } ${hoveredAward === award.id ? 'bg-[#FFB703]' : 'bg-[#D1D5DB]'} transition-colors duration-300`}
                        >
                        </div>
                      </div>
                    </div>

                    {/* Timeline Point */}
                    <BlurFade delay={0.9 + index * 0.2} direction="up" duration={0.3}>
                      <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div 
                          className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                            hoveredAward === award.id ? 'scale-125 bg-[#FFB703] border-[#FFB703]' : 'bg-[#FFFFFF] border-[#D1D5DB]'
                          }`}
                        >
                        </div>
                      </div>
                    </BlurFade>

                    {/* Year Label */}
                    <BlurFade delay={1.0 + index * 0.2} direction="up" duration={0.4}>
                      <div className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-4 lg:mt-0 ${
                        award.position === 'top' ? 'lg:translate-y-8' : 'lg:-translate-y-12'
                      }`}>
                        <div 
                          className={`px-4 py-2 rounded-full text-center font-bold text-lg transition-all duration-300 ${
                            hoveredAward === award.id ? 'shadow-lg scale-105 bg-[#FFB703]' : 'bg-[#0B2C72]'
                          } text-[#FFFFFF]`}
                        >
                          {award.year}
                        </div>
                      </div>
                    </BlurFade>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline Alternative */}
        <div className="lg:hidden mt-12">
          <BlurFade delay={0.3} direction="up" inView={true}>
            <div className="space-y-8">
              {awards.map((award, index) => (
                <BlurFade key={award.id} delay={0.4 + index * 0.15} direction="left" inView={true}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
                      <div className="w-0.5 h-16 mt-2 bg-[#D1D5DB]"></div>
                    </div>
                    <div>
                      <BlurFade delay={0.5 + index * 0.15} direction="right" duration={0.4}>
                        <div className="text-lg font-bold mb-1 text-[#FFB703]">
                          {award.year}
                        </div>
                      </BlurFade>
                      <BlurFade delay={0.6 + index * 0.15} direction="right" duration={0.4}>
                        <div className="text-base font-semibold mb-2 text-[#0B2C72]">
                          {award.title} - {award.subtitle}
                        </div>
                      </BlurFade>
                      <BlurFade delay={0.7 + index * 0.15} direction="right" duration={0.4}>
                        <p className="text-sm text-[#374151]">
                          {award.description}
                        </p>
                      </BlurFade>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export default AwardsTimeline