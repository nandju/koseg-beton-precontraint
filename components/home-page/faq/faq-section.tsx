"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "Comment traiter votre site pour la construction ?",
    answer:
      "Il existe de nombreuses variantes de passages de Lorem Ipsum disponibles, mais la majorité ont subi des altérations sous une forme ou une autre, par l'humour injecté, ou des mots aléatoires qui ne semblent même pas légèrement crédibles.",
  },
  {
    id: 2,
    question: "Quels sont les tarifs de rénovation ?",
    answer:
      "Nos tarifs de rénovation varient en fonction de l'étendue des travaux, des matériaux utilisés et de la complexité du projet. Nous fournissons des devis détaillés après une consultation initiale et une évaluation du site pour assurer une tarification transparente.",
  },
  {
    id: 3,
    question: "Avantages de choisir nos services ?",
    answer:
      "Nous offrons plus de 25 ans d'expérience, un savoir-faire de qualité, des livraisons dans les délais, des méthodes de construction modernes et une équipe dédiée de plus de 90 professionnels engagés à donner vie à votre vision.",
  },
  {
    id: 4,
    question: "Comment contacter notre équipe de support ?",
    answer:
      "Vous pouvez joindre notre équipe de support par plusieurs canaux : téléphone, email, ou notre formulaire de contact en ligne. Nous sommes disponibles pendant les heures d'ouverture et répondons à toutes les demandes dans les 24 heures.",
  },
]

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number>(1)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id)
  }

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border-2 border-[#021F69] text-[#021F69] text-sm font-medium rounded-full">
              FAQ
            </div>

            <h2 className="text-2xl md:text-5xl font-semibold text-[#021F69] leading-tight">
              Engagés dans des services de toiture de haute qualité
            </h2>

            <p className="text-[#7F95AF] text-lg leading-relaxed">
              Nous installons des chaudières et des systèmes de chauffage depuis plus de 10 ans et sommes fiers de dire que nous sommes experts dans ce domaine. Nous avons une équipe d'ingénieurs Gas Safe qualifiés créatifs
            </p>

            <button className="inline-flex items-center gap-2 bg-[#7F95AF] hover:bg-[#7F95AF]/80 text-[#FEFEFE] px-8 py-4 rounded-full font-medium transition-colors duration-300">
              Lire Plus
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - FAQ */}
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#FEFEFE] rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#7F95AF] font-bold text-lg">{faq.id}.</span>
                    <h3 className="text-[#021F69] font-semibold text-lg">{faq.question}</h3>
                  </div>

                  <div className="flex-shrink-0 ml-4">
                    <div className="w-8 h-8 bg-[#7F95AF] rounded-full flex items-center justify-center text-[#FEFEFE] transition-transform duration-200">
                      {openFaq === faq.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="pl-8">
                      <p className="text-[#7F95AF] leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}