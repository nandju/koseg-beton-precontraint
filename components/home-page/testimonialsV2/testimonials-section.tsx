"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Kouadio Serge",
    role: "Chef de projet BTP",
    body: "Grâce à KOSEG Béton Précontraint, nous avons pu respecter nos délais tout en garantissant la solidité des planchers post-contraints. Leur équipe est réactive et très professionnelle.",
    img: "/assets/images/illustrations/page-accueil/cisse.jpg",
    keyword: "respect",
  },
  {
    id: 2,
    name: "Awa Koné",
    role: "Architecte indépendante",
    body: "La collaboration avec KOSEG a apporté des solutions techniques innovantes qui ont enrichi la conception de notre bâtiment. Ils allient savoir-faire et modernité.",
    img: "/assets/images/illustrations/page-accueil/awa.jpg",
    keyword: "engagement",
  },
  {
    id: 3,
    name: "Jean-Baptiste Kouadio",
    role: "Directeur technique – Entreprise de construction",
    body: "Les solutions de post-tension proposées par KOSEG nous ont permis de réduire les coûts et d'optimiser les espaces. Une vraie valeur ajoutée pour nos projets.",
    img: "/assets/images/illustrations/page-accueil/kouadio.jpg",
    keyword: "professionnalisme",
  },
  {
    id: 4,
    name: "Mariam Traoré",
    role: "Promotrice immobilière",
    body: "J'ai choisi KOSEG pour la réalisation de plusieurs immeubles résidentiels. La qualité des matériaux et la rigueur dans l'exécution m'ont convaincue de continuer avec eux.",
    img: "/assets/images/illustrations/page-accueil/mariam.jpg",
    keyword: "leadership",
  },
  {
    id: 5,
    name: "Stéphane Yao",
    role: "Ingénieur structure",
    body: "Leur expertise en calculs et en études techniques a été déterminante dans la réussite de notre projet. Je recommande KOSEG pour la fiabilité de ses solutions.",
    img: "/assets/images/illustrations/page-accueil/yao.jpg",
    keyword: "fiabilité",
  },
  {
    id: 6,
    name: "Fatou Bamba",
    role: "Responsable de coopérative immobilière",
    body: "KOSEG nous a accompagnés avec sérieux et transparence dans la construction de nos logements collectifs. Le suivi de chantier a été exemplaire.",
    img: "/assets/images/illustrations/page-accueil/fatou.jpg",
    keyword: "transparence",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length
      visible.push({ ...testimonials[index], position: i })
    }
    return visible
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/backgrounds/background-silhouette.png')`,
          }}
        />
        <div className="absolute inset-0 bg-[#021F69]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#7F95AF] mb-4">
            Que disent les gens de
            <br />
            nos services?
          </h2>
        </div>

        {/* Testimonials Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {getVisibleTestimonials().map((testimonial, index) => {
            const isCenter = testimonial.position === 0
            const isLeft = testimonial.position === -1
            const isRight = testimonial.position === 1

            return (
              <div
                key={testimonial.id}
                className={`transition-all duration-1000 ease-in-out ${
                  isCenter
                    ? "transform scale-110 z-20"
                    : "transform scale-100 z-10"
                }`}
              >
                <div
                  className={`rounded-2xl p-6 text-center transition-all duration-1000 ${
                    isCenter 
                      ? "bg-[#7F95AF] text-[#FEFEFE] shadow-2xl min-h-[400px]" 
                      : "bg-[#FEFEFE]/90 text-[#021F69] shadow-lg min-h-[350px] opacity-75"
                  } flex flex-col justify-between`}
                >
                  {/* Profile Image */}
                  <div className={`mx-auto rounded-full overflow-hidden mb-4 border-4 ${
                    isCenter ? "w-20 h-20 border-[#FEFEFE]/20" : "w-16 h-16 border-[#7F95AF]/20"
                  }`}>
                    <img
                      src={testimonial.img || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Keyword */}
                  <div className="mb-4">
                    <span className={`font-medium ${
                      isCenter 
                        ? "text-xl text-[#FEFEFE]" 
                        : "text-lg text-[#7F95AF]"
                    }`}>
                      "{testimonial.keyword}"
                    </span>
                  </div>

                  {/* Testimonial Body */}
                  <div className="flex-grow">
                    <p className={`leading-relaxed mb-6 ${
                      isCenter 
                        ? "text-sm text-[#FEFEFE]" 
                        : "text-xs text-[#021F69]/80"
                    }`}>
                      "{testimonial.body}"
                    </p>
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h4 className={`font-bold mb-1 ${
                      isCenter 
                        ? "text-lg text-[#FEFEFE]" 
                        : "text-base text-[#021F69]"
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isCenter 
                        ? "text-[#FEFEFE]/80" 
                        : "text-[#7F95AF]"
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#7F95AF] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}