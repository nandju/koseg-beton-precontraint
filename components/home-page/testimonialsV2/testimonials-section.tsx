"use client"
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

        {/* Testimonials Carousel */}
        <div className="relative h-96 flex items-center justify-center">
          {getVisibleTestimonials().map((testimonial, index) => {
            const isCenter = testimonial.position === 0
            const isLeft = testimonial.position === -1
            const isRight = testimonial.position === 1

            return (
              <div
                key={testimonial.id}
                className={`absolute transition-all duration-1000 ease-in-out ${
                  isCenter
                    ? "z-20 scale-100 opacity-100"
                    : isLeft
                      ? "z-10 scale-75 opacity-60 -translate-x-80"
                      : "z-10 scale-75 opacity-60 translate-x-80"
                }`}
              >
                <div
                  className={`w-96 h-80 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-1000 ${
                    isCenter ? "bg-[#7F95AF] text-[#FEFEFE] shadow-2xl" : "bg-[#FEFEFE] text-[#021F69] shadow-lg"
                  }`}
                >
                  {/* Profile Image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#FEFEFE]/20">
                    <img
                      src={testimonial.img || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Keyword */}
                  <div className="mb-4">
                    <span className={`text-lg font-medium ${isCenter ? "text-[#FEFEFE]" : "text-[#7F95AF]"}`}>
                      "{testimonial.keyword}"
                    </span>
                  </div>

                  {/* Testimonial Body */}
                  <p className={`text-sm leading-relaxed mb-6 ${isCenter ? "text-[#FEFEFE]" : "text-[#021F69]/80"}`}>
                    "{testimonial.body}"
                  </p>

                  {/* Name and Role */}
                  <div>
                    <h4 className={`font-bold text-lg ${isCenter ? "text-[#FEFEFE]" : "text-[#021F69]"}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${isCenter ? "text-[#FEFEFE]/80" : "text-[#7F95AF]"}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
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