"use client"
import { useState } from "react"
import { Building2, Compass, Home, ClipboardList, Hammer, Focus, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Ingénierie Structurelle",
    subtitle: "Analyse structurelle experte et conception pour des projets de construction sûrs et durables.",
    icon: Building2,
    image: "/assets/images/illustrations/page-accueil/1.png",
  },
  {
    id: 2,
    title: "Conception Architecturale",
    subtitle: "Solutions architecturales innovantes qui allient fonctionnalité et attrait esthétique.",
    icon: Compass,
    image: "/assets/images/illustrations/page-accueil/2.png",
  },
  {
    id: 3,
    title: "Nouvelles Constructions",
    subtitle: "Projets de construction neufs complets du concept à l'achèvement.",
    icon: Home,
    image: "/assets/images/illustrations/page-accueil/3.png",
  },
  {
    id: 4,
    title: "Gestion de Construction",
    subtitle: "Gestion de projet professionnelle garantissant une livraison dans les délais et le budget.",
    icon: ClipboardList,
    image: "/assets/images/illustrations/page-accueil/4.png",
  },
  {
    id: 5,
    title: "Services Conception-Construction",
    subtitle: "Services intégrés de conception et construction pour une livraison de projet rationalisée.",
    icon: Hammer,
    image: "/assets/images/illustrations/page-accueil/5.png",
  },
  {
    id: 6,
    title: "Construction de Fondations",
    subtitle: "Travail de fondation solide qui assure la longévité de vos projets de construction.",
    icon: Focus,
    image: "/assets/images/illustrations/page-accueil/6.png",
  },
]

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#FEFEFE'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border-2 rounded-full font-medium text-sm mb-6"
               style={{borderColor: '#021F69', color: '#021F69'}}>
            SERVICES
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold" style={{color: '#021F69'}}>
            Voyons ce que nous allons faire.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredCard === service.id

            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 ease-out ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className="relative h-80  overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Icon */}
                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                           style={{backgroundColor: '#021F69'}}>
                        {isHovered ? (
                          <ArrowUpRight className="w-6 h-6" style={{color: '#FEFEFE'}} />
                        ) : (
                          <IconComponent className="w-6 h-6" style={{color: '#FEFEFE'}} />
                        )}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div style={{color: '#FEFEFE'}}>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                      {/* Subtitle - appears on hover */}
                      <div
                        className={`transition-all duration-300 ease-out ${
                          isHovered
                            ? "opacity-100 transform translate-y-0 max-h-20"
                            : "opacity-0 transform translate-y-4 max-h-0"
                        }`}
                      >
                        <p className="text-sm leading-relaxed" style={{color: '#7F95AF'}}>{service.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}