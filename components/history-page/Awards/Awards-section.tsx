"use client"

import { useState } from "react"
import { Award, Trophy, Star, Globe } from "lucide-react"

const AwardsTimeline = () => {
  const [hoveredAward, setHoveredAward] = useState<number | null>(null)

  const awards = [
    {
      id: 1,
      year: '2010',
      title: 'Conseil d\'Expert',
      subtitle: 'Chantier de l\'Année',
      description: 'La planification de la construction implique différents types de ressources et de participants pour garantir la réussite du projet selon les normes les plus strictes.',
      icon: Award,
      position: 'top'
    },
    {
      id: 2,
      year: '2012',
      title: 'Excellence Technique',
      subtitle: 'Innovation du Mois',
      description: 'Reconnaissance de notre approche innovante dans l\'intégration de technologies durables et de méthodes de construction écologiques avancées.',
      icon: Star,
      position: 'bottom'
    },
    {
      id: 3,
      year: '2014',
      title: 'Collaboration',
      subtitle: 'Projet du Mois',
      description: 'Prix décerné pour notre excellence dans la gestion collaborative de projets complexes et notre capacité à coordonner efficacement toutes les parties prenantes.',
      icon: Trophy,
      position: 'top'
    },
    {
      id: 4,
      year: '2016',
      title: 'Reconnaissance Mondiale',
      subtitle: 'Chantier de la Semaine',
      description: 'Distinction internationale pour notre engagement envers l\'excellence, l\'innovation et le développement durable dans le secteur de la construction moderne.',
      icon: Globe,
      position: 'bottom'
    }
  ]

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F3EEE3]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-[#0B2C72] text-[#0B2C72] mb-6">
            <span className="text-sm font-medium uppercase tracking-wide">RÉCOMPENSES</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B2C72]">
            Récompenses Honorables
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#D1D5DB] transform -translate-y-1/2">
          </div>

          {/* Timeline Points and Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {awards.map((award, index) => (
                <div 
                  key={award.id} 
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
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-[#0B2C72] rounded-full flex items-center justify-center">
                          <award.icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                      </div>

                      {/* Award Content */}
                      <div className="text-center space-y-3">
                        <h3 className="text-lg font-bold text-[#0B2C72]">
                          {award.title}
                        </h3>
                        
                        <p className="text-sm font-medium text-[#FFB703]">
                          {award.subtitle}
                        </p>
                        
                        <p className="text-sm leading-relaxed text-[#374151]">
                          {award.description}
                        </p>
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
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div 
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        hoveredAward === award.id ? 'scale-125 bg-[#FFB703] border-[#FFB703]' : 'bg-[#FFFFFF] border-[#D1D5DB]'
                      }`}
                    >
                    </div>
                  </div>

                  {/* Year Label */}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline Alternative */}
        <div className="lg:hidden mt-12">
          <div className="space-y-8">
            {awards.map((award) => (
              <div key={award.id} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
                  <div className="w-0.5 h-16 mt-2 bg-[#D1D5DB]"></div>
                </div>
                <div>
                  <div className="text-lg font-bold mb-1 text-[#FFB703]">
                    {award.year}
                  </div>
                  <div className="text-base font-semibold mb-2 text-[#0B2C72]">
                    {award.title} - {award.subtitle}
                  </div>
                  <p className="text-sm text-[#374151]">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AwardsTimeline