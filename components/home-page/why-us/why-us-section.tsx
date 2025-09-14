"use client"
import { Hammer, Target, Layers } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const whyUsData = [
  {
    id: "01",
    title: "Qualité et livraison dans les délais",
    description: "Notre engagement envers l'excellence se reflète dans chaque projet que nous entreprenons. Nous garantissons une qualité irréprochable et respectons scrupuleusement les délais convenus.",
    image: "/assets/images/illustrations/page-accueil/why-us-01.png",
    icon: Hammer,
  },
  {
    id: "02", 
    title: "Mesures précises",
    description: "La précision est au cœur de notre métier. Grâce à nos outils de mesure de pointe et notre expertise technique, nous garantissons des résultats d'une exactitude parfaite.",
    image: "/assets/images/illustrations/page-accueil/why-us-02.png",
    icon: Target,
  },
  {
    id: "03",
    title: "Méthodes modernes", 
    description: "Nous utilisons les technologies et méthodes les plus avancées du secteur. Notre approche innovante nous permet de réaliser des constructions durables et efficaces.",
    image: "/assets/images/illustrations/page-accueil/why-us-03.png",
    icon: Layers,
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <BlurFade delay={0.1} inView direction="up">
          <div 
            className="inline-block px-6 py-2 border-2 rounded-full text-sm font-medium mb-6"
            style={{ borderColor: '#0B2C72', color: '#0B2C72', backgroundColor: '#FFFFFF' }}
          >
            POURQUOI NOUS
          </div>
        </BlurFade>
        
        <BlurFade delay={0.25} inView direction="up">
          <h2 
            className="text-xl sm:text-2xl lg:text-5xl font-semibold"
            style={{ color: '#0B2C72' }}
          >
            Nous avons de nombreuses raisons de nous choisir
          </h2>
        </BlurFade>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto space-y-16">
        {whyUsData.map((item, index) => {
          const Icon = item.icon
          const isEven = index % 2 === 0
          
          return (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <BlurFade 
                delay={0.4 + index * 0.2} 
                inView 
                direction={isEven ? "left" : "right"}
                className={`relative ${!isEven ? 'lg:order-2' : ''}`}
              >
                <div className="shadow-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                  />
                </div>
                <div 
                  className="absolute top-4 right-4 text-4xl sm:text-5xl lg:text-6xl font-bold opacity-20"
                  style={{ color: '#0B2C72' }}
                >
                  {item.id}
                </div>
              </BlurFade>

              {/* Content */}
              <BlurFade 
                delay={0.6 + index * 0.2} 
                inView 
                direction={isEven ? "right" : "left"}
                className={`space-y-6 text-center lg:text-left ${!isEven ? 'lg:order-1' : ''}`}
              >
                <div className="flex justify-center lg:justify-start">
                  <div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: '#FFB703' }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: '#FFFFFF' }} />
                  </div>
                </div>

                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                  style={{ color: '#0B2C72' }}
                >
                  {item.title}
                </h3>

                <p 
                  className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  style={{ color: '#374151' }}
                >
                  {item.description}
                </p>

                <div className="flex justify-center lg:justify-start">
                  <div 
                    className="inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: '#0B2C72', color: '#FFFFFF' }}
                  >
                    Solution {item.id}
                  </div>
                </div>
              </BlurFade>
            </div>
          )
        })}
      </div>
    </section>
  )
}