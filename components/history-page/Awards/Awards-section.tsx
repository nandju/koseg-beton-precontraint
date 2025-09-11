"use client"

import { useState } from "react"
import { Award, Trophy, Star, Globe } from "lucide-react"

const AwardsTimeline = () => {
  const [hoveredAward, setHoveredAward] = useState(null)

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
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border-2 mb-6" style={{ borderColor: ' #021F69', color: ' #021F69' }}>
            <span className="text-sm font-medium uppercase tracking-wide">RÉCOMPENSES</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#021F69' }}>
            Récompenses Honorables
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2" style={{ backgroundColor: '#7F95AF' }}>
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
                    
                    <div className="bg-white rounded-lg border-2 p-6 shadow-lg hover:shadow-xl transition-all duration-300" 
                         style={{ borderColor: hoveredAward === award.id ? '#FF6B35' : '#7F95AF' }}>
                      
                      {/* Award Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                             style={{ backgroundColor: '#021F69' }}>
                          <award.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Award Content */}
                      <div className="text-center space-y-3">
                        <h3 className="text-lg font-bold" style={{ color: '#021F69' }}>
                          {award.title}
                        </h3>
                        
                        <p className="text-sm font-medium" style={{ color: '#FF6B35' }}>
                          {award.subtitle}
                        </p>
                        
                        <p className="text-sm leading-relaxed" style={{ color: '#7F95AF' }}>
                          {award.description}
                        </p>
                      </div>

                      {/* Connection Line to Timeline */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2" 
                           style={{ 
                             [award.position]: '-24px',
                             width: '2px',
                             height: '24px',
                             backgroundColor: hoveredAward === award.id ? '#FF6B35' : '#7F95AF'
                           }}>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div 
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        hoveredAward === award.id ? 'scale-125' : ''
                      }`}
                      style={{ 
                        backgroundColor: hoveredAward === award.id ? '#FF6B35' : '#FEFEFE',
                        borderColor: hoveredAward === award.id ? '#FF6B35' : '#7F95AF'
                      }}
                    >
                    </div>
                  </div>

                  {/* Year Label */}
                  <div className={`lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 mt-4 lg:mt-0 ${
                    award.position === 'top' ? 'lg:translate-y-8' : 'lg:-translate-y-12'
                  }`}>
                    <div 
                      className={`px-4 py-2 rounded-full text-center font-bold text-lg transition-all duration-300 ${
                        hoveredAward === award.id ? 'shadow-lg scale-105' : ''
                      }`}
                      style={{ 
                        backgroundColor: hoveredAward === award.id ? '#FF6B35' : '#021F69',
                        color: 'white'
                      }}
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
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF6B35' }}></div>
                  <div className="w-0.5 h-16 mt-2" style={{ backgroundColor: '#7F95AF' }}></div>
                </div>
                <div>
                  <div className="text-lg font-bold mb-1" style={{ color: '#FF6B35' }}>
                    {award.year}
                  </div>
                  <div className="text-base font-semibold mb-2" style={{ color: '#021F69' }}>
                    {award.title} - {award.subtitle}
                  </div>
                  <p className="text-sm" style={{ color: '#7F95AF' }}>
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        {/* <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#021F69' }}>15+</div>
            <div className="text-sm" style={{ color: '#7F95AF' }}>Années d'Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#021F69' }}>50+</div>
            <div className="text-sm" style={{ color: '#7F95AF' }}>Projets Récompensés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#021F69' }}>25+</div>
            <div className="text-sm" style={{ color: '#7F95AF' }}>Distinctions Reçues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#021F69' }}>100%</div>
            <div className="text-sm" style={{ color: '#7F95AF' }}>Satisfaction Client</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default AwardsTimeline