"use client"
import { useState } from "react"
import { Building2, Compass, Home, ClipboardList, Hammer, Focus, ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const services = [
  {
    id: 1,
    title: "Ingénierie structurelle",
    subtitle: "Études de calcul, notes de dimensionnement et optimisation de dalles précontraintes pour garantir sécurité et performance.",
    icon: Building2,
    image: "/assets/images/illustrations/page-accueil/1.png",
    imageAlt: "Ingénieur sur plan de structure - KOSEG",
    href: "/services/ingenierie-structurelle"
  },
  {
    id: 2,
    title: "Conception architecturale",
    subtitle: "Conception sur-mesure intégrant exigences architecturales et contraintes techniques liées à la précontrainte.",
    icon: Compass,
    image: "/assets/images/illustrations/page-accueil/2.png",
    imageAlt: "Maquette architecturale - KOSEG",
    href: "/services/conception-architecturale"
  },
  {
    id: 3,
    title: "Dalles & Post-tension",
    subtitle: "Solutions de dalles en post-tension pour grandes portées : économies d’épaisseur, performance et durabilité.",
    icon: Home,
    image: "/assets/images/illustrations/page-accueil/3.png",
    imageAlt: "Dalle en cours de post-tension - KOSEG",
    href: "/services/dalles-post-tension"
  },
  {
    id: 4,
    title: "Gestion & supervision de chantier",
    subtitle: "Supervision technique de pose, mise en tension et injection — suivi qualité tout au long du chantier.",
    icon: ClipboardList,
    image: "/assets/images/illustrations/page-accueil/4.png",
    imageAlt: "Contrôle chantier et mise en tension - KOSEG",
    href: "/services/supervision-chantier"
  },
  {
    id: 5,
    title: "Fourniture d’équipements & torons",
    subtitle: "Torons haute résistance, ancrages et accessoires fournis avec contrôles qualité et certificats MEGA PREFAB.",
    icon: Hammer,
    image: "/assets/images/illustrations/page-accueil/5.png",
    imageAlt: "Torons et ancrages - KOSEG",
    href: "/services/torons-ancrages"
  },
  {
    id: 6,
    title: "Renforcement & réhabilitation",
    subtitle: "Renforcement de structures existantes par post-tension et interventions techniques pour prolonger la durée de vie.",
    icon: Focus,
    image: "/assets/images/illustrations/page-accueil/6.png",
    imageAlt: "Réhabilitation structurelle - KOSEG",
    href: "/services/renforcement-rehabilitation"
  },
]


export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 px-4" style={{backgroundColor: '#FFFFFF'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.2} direction="up" duration={0.6} inView>
            <div className="inline-block px-6 py-2 border-2 rounded-full font-medium text-sm mb-6"
                 style={{borderColor: '#0B2C72', color: '#0B2C72'}}>
              SERVICES
            </div>
          </BlurFade>
          
          <BlurFade delay={0.4} direction="up" duration={0.8} inView>
            <h2 className="text-2xl md:text-5xl font-semibold" style={{color: '#0B2C72'}}>
              Solutions complètes en béton précontraint
            </h2>
          </BlurFade>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredCard === service.id

            return (
              <BlurFade 
                key={service.id}
                delay={0.6 + (index * 0.15)} 
                direction="up" 
                duration={0.8} 
                inView
                inViewMargin="-50px"
              >
                <div
                  className={`relative group cursor-pointer transition-all duration-500 ease-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Container */}
                  <div className="relative h-80 overflow-hidden">
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
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered ? 'transform scale-110' : ''
                        }`}
                             style={{backgroundColor: isHovered ? '#FFB703' : '#0B2C72'}}>
                          {isHovered ? (
                            <ArrowUpRight className="w-6 h-6" style={{color: '#FFFFFF'}} />
                          ) : (
                            <IconComponent className="w-6 h-6" style={{color: '#FFFFFF'}} />
                          )}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div style={{color: '#FFFFFF'}}>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                        {/* Subtitle - appears on hover */}
                        <div
                          className={`transition-all duration-300 ease-out ${
                            isHovered
                              ? "opacity-100 transform translate-y-0 max-h-20"
                              : "opacity-0 transform translate-y-4 max-h-0"
                          }`}
                        >
                          <p className="text-sm leading-relaxed" style={{color: '#D1D5DB'}}>{service.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}