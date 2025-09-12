"use client"

import { useState, useEffect } from "react"
import { Phone, ChevronRight, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmergencyNumbers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const emergencyServices = [
    // Slide 1
    [
      {
        title: "Directeur Général",
        phone: "+225 07 12 34 56",
        email: "directeur@construction-btp.ci",
        address: "Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Chef de Chantier", 
        phone: "+225 05 98 76 54",
        email: "chefchantier@construction-btp.ci",
        address: "Base Vie Chantier, Abidjan, Côte d'Ivoire"
      }
    ],
    // Slide 2
    [
      {
        title: "Responsable Sécurité",
        phone: "+225 01 23 45 67", 
        email: "securite@construction-btp.ci",
        address: "Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Ingénieur Travaux",
        phone: "+225 07 87 65 43",
        email: "ingenieur@construction-btp.ci", 
        address: "Bureau d'Études, Cocody, Abidjan, Côte d'Ivoire"
      }
    ],
    // Slide 3
    [
      {
        title: "Service Client",
        phone: "+225 27 45 12 34",
        email: "contact@construction-btp.ci",
        address: "Siège Social, Yopougon, Abidjan, Côte d'Ivoire"
      },
      {
        title: "Responsable Matériel",
        phone: "+225 05 11 22 33",
        email: "materiel@construction-btp.ci",
        address: "Dépôt Central, Yopougon, Abidjan, Côte d'Ivoire"
      }
    ]
  ]

  const handlePrint = () => {
    window.print()
  }

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % emergencyServices.length)
    }, 5000) // Change toutes les 5 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gray-100 py-8 lg:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 min-h-[300px] lg:min-h-[200px]">
          {/* Section Principale - Contacts Responsables (2/5 de la largeur) */}
          <div className="lg:col-span-2">
            <div 
              className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-[#021F69]"
            >
              {/* Image de fond avec effet architectural */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-0 right-0 w-full h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path d="M40,160 L100,40 L160,160 Z" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
                    <path d="M60,140 L140,140" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <path d="M70,120 L130,120" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <path d="M80,100 L120,100" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                    <circle cx="100" cy="80" r="8" fill="currentColor" opacity="0.1"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 p-6 lg:p-8 xl:p-10 h-full flex flex-col justify-center">
                {/* Badge d'en-tête */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FEFEFE] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-[#021F69]" />
                  </div>
                  <div className="text-[#FEFEFE]">
                    <span className="text-xs lg:text-sm font-semibold block">6 Contacts Responsables</span>
                    <span className="text-xs opacity-90">Toujours Disponibles</span>
                  </div>
                </div>

                {/* Titre principal */}
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#FEFEFE] mb-6 lg:mb-8 leading-tight">
                  Contacts d'Urgence
                  <br />
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#7F95AF]">
                    Équipe Construction
                  </span>
                </h2>

                {/* Bouton d'impression */}
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-[#FEFEFE] rounded-full font-semibold text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 self-start text-[#021F69] hover:bg-[#7F95AF] hover:text-[#FEFEFE]"
                >
                  <Printer className="h-4 w-4 lg:h-5 lg:w-5" />
                  IMPRIMER
                </button>
              </div>
            </div>
          </div>

          {/* Section Droite - Cartes des Responsables (3/5 de la largeur) */}
          <div className="lg:col-span-3">
            <div className="relative h-full">
              {/* Cartes en carousel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-full">
                {emergencyServices[currentSlide].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-[#FEFEFE] rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-l-4 border-[#7F95AF]"
                  >
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#021F69] mb-4 lg:mb-6">
                        {service.title}
                      </h3>
                      <div className="w-12 h-1 mb-4 lg:mb-6 bg-[#7F95AF]"></div>
                      
                      <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                        <div>
                          <p className="text-lg lg:text-xl font-semibold text-[#021F69] mb-1">{service.phone}</p>
                          <a 
                            href={`mailto:${service.email}`}
                            className="text-sm lg:text-base text-[#7F95AF] transition-colors hover:text-[#021F69]"
                          >
                            {service.email}
                          </a>
                        </div>
                        
                        <div className="text-[#7F95AF] text-sm lg:text-base">
                          <p>{service.address}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleGetDirections(service.address)}
                      className="flex items-center gap-2 font-semibold text-sm lg:text-base text-[#021F69] transition-colors group self-start hover:text-[#7F95AF]"
                    >
                      OBTENIR L'ITINÉRAIRE
                      <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Indicateurs de pagination */}
              {/* <div className="flex justify-center gap-2 mt-6 lg:mt-8">
                {emergencyServices.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-8 h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-30'
                    }`}
                    style={{ 
                      backgroundColor: index === currentSlide ? "#021F69" : "#7F95AF" 
                    }}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}