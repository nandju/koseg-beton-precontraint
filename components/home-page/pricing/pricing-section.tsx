"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'  // <- Ajouter cette ligne

const sectors = [
  {
    id: 1,
    name: "Résidentiel",
    image: "/assets/images/illustrations/page-accueil/price_1.jpeg",
  },
  {
    id: 2,
    name: "Commercial",
    image: "/assets/images/illustrations/page-accueil/price_2.jpeg",
  },
  {
    id: 3,
    name: "Préparation et Déblaiement de Site",
    image: "/assets/images/illustrations/page-accueil/price_3.jpeg",
  },
  {
    id: 4,
    name: "Restauration",
    image: "/assets/images/illustrations/page-accueil/price_4.jpeg",
  },
  {
    id: 5,
    name: "Rénovation",
    image: "/assets/images/illustrations/page-accueil/price_5.jpeg",
  },
  {
    id: 6,
    name: "Éducationnel",
    image: "/assets/images/illustrations/page-accueil/price_6.jpeg",
  },
]

export default function PricingSection() {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null)
  const [clickedSector, setClickedSector] = useState<number | null>(null)

  const handleSectorClick = (sectorId: number) => {
    setClickedSector(clickedSector === sectorId ? null : sectorId)
  }

  const isActive = (sectorId: number) => {
    return hoveredSector === sectorId || clickedSector === sectorId
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#FEFEFE' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3">
            <div 
              className="inline-block px-6 py-2 border rounded-full text-sm font-medium mb-6"
              style={{ 
                borderColor: '#021F69', 
                color: '#021F69' 
              }}
            >
              TARIFICATION
            </div>

            <h2 
              className="text-4xl lg:text-5xl font-bold mb-6 text-balance"
              style={{ color: '#021F69' }}
            >
              Secteurs que Nous Couvrons
            </h2>

            <p 
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#7F95AF' }}
            >
              Un paragraphe descriptif qui explique aux clients à quel point vous êtes compétent et prouve qu'ils ont
              fait le bon choix.
            </p>

            <button 
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{ 
                backgroundColor: '#021F69',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#7F95AF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#021F69'
              }}
            >
              En Savoir Plus
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Circles Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {sectors.map((sector) => (
                <div
                  key={sector.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredSector(sector.id)}
                  onMouseLeave={() => setHoveredSector(null)}
                  onClick={() => handleSectorClick(sector.id)}
                >
                  <div className="relative w-48 h-48 mx-auto">
                    {/* Circle Border */}
                    <div
                      className="absolute inset-0 rounded-full border-2 transition-all duration-500"
                      style={{
                        borderColor: isActive(sector.id) ? '#021F69' : '#7F95AF',
                        opacity: isActive(sector.id) ? 1 : 0.5,
                        transform: isActive(sector.id) ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />

                    {/* Background Circle */}
                    <div
                      className="absolute inset-2 rounded-full transition-all duration-500 overflow-hidden"
                      style={{
                        backgroundColor: '#FEFEFE',
                        transform: isActive(sector.id) ? 'scale(0.95)' : 'scale(1)'
                      }}
                    >
                      {/* Image */}
                      <div
                        className="absolute inset-0 transition-all duration-700"
                        style={{
                          opacity: isActive(sector.id) ? 1 : 0,
                          transform: isActive(sector.id) ? 'scale(1)' : 'scale(1.1)'
                        }}
                      >
                        <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        className="object-cover rounded-full"
                        />
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: '#021F69', opacity: 0.2 }}
                        />
                      </div>

                      {/* Text Overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center p-4 transition-all duration-500"
                        style={{
                          backgroundColor: isActive(sector.id) ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                          color: isActive(sector.id) ? '#FEFEFE' : '#021F69'
                        }}
                      >
                        <span
                          className="text-center font-medium transition-all duration-300"
                          style={{
                            fontSize: isActive(sector.id) ? '1.125rem' : '1rem',
                            color: isActive(sector.id) ? '#FEFEFE' : '#021F69',
                            textShadow: isActive(sector.id) ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
                          }}
                        >
                          {sector.name}
                        </span>
                      </div>
                    </div>

                    {/* Hover Ring Effect */}
                    <div
                      className="absolute inset-0 rounded-full border-4 transition-all duration-300"
                      style={{
                        borderColor: '#021F69',
                        opacity: isActive(sector.id) ? 0.3 : 0,
                        transform: isActive(sector.id) ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}