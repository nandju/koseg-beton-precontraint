"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const faqData = [
  {
    id: 1,
    question: "Qu'est-ce que la précontrainte par post-tension ?",
    answer:
      "La précontrainte par post-tension consiste à appliquer une tension sur des câbles à haute limite d'élasticité après que le béton atteint la résistance à la compression recommandée. Les contraintes et les flèches induites par le poids propre et les charges d'exploitation sont compensées par celles générées par la courbure des câbles noyés dans l'épaisseur de la dalle.",
  },
  {
    id: 2,
    question: "Quels sont les avantages des dalles en post-tension ?",
    answer:
      "Les dalles en post-tension offrent de nombreux avantages : suppression des supports pour une meilleure liberté architecturale, dalles plus minces augmentant la hauteur libre des étages, structures légères réduisant les coûts de fondations, limitation des déformations et du risque de fissuration, réduction des joints de dilatation, isolation acoustique et résistance au feu.",
  },
  {
    id: 3,
    question: "Quelle est la différence entre post-tension adhérente et non adhérente ?",
    answer:
      "La post-tension adhérente utilise des gaines métalliques ou plastiques avec injection de coulis de ciment pour la protection définitive, offrant une meilleure protection incendie et un ré-ancrage possible. La post-tension non adhérente utilise des torons lubrifiés dans des gaines PEHD, facilitant les opérations sur site sans nécessiter d'injection après tension.",
  },
  {
    id: 4,
    question: "Comment contacter KOSEG pour un projet ?",
    answer:
      "Vous pouvez joindre notre équipe à Abidjan Cocody, Riviera III CITE IRIS par téléphone au +225 27 22 38 40 88 / 07 09 91 70 01, par email à commercial@koseg-ci.com ou visiter notre site web www.koseg-ci.com. Nous sommes disponibles pour discuter de tous vos projets de précontrainte.",
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
            <BlurFade delay={0.1} inView direction="left">
              <div className="inline-block px-4 py-2 border-2 border-[#0B2C72] text-[#0B2C72] text-sm font-medium rounded-full">
                FAQ
              </div>
            </BlurFade>

            <BlurFade delay={0.25} inView direction="left" duration={0.8}>
              <h2 className="text-2xl md:text-5xl font-semibold text-[#0B2C72] leading-tight">
                Solutions complètes en béton précontraint de haute qualité
              </h2>
            </BlurFade>

            <BlurFade delay={0.4} inView direction="left" duration={0.6}>
              <p className="text-[#374151] text-lg leading-relaxed">
                KOSEG Béton Précontraint propose des solutions innovantes en précontrainte depuis plusieurs années. Nous accompagnons les ingénieurs civils, maîtres d'ouvrage et responsables techniques dans leurs projets les plus ambitieux, garantissant performance, sécurité et durabilité avec notre franchise exclusive MEGA PREFAB.
              </p>
            </BlurFade>

            <BlurFade delay={0.55} inView direction="left" duration={0.5}>
              <button className="inline-flex items-center gap-2 bg-[#FFB703] hover:bg-[#FFB703]/80 text-[#FFFFFF] px-8 py-4 rounded-full font-medium transition-colors duration-300">
                En Savoir Plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </BlurFade>
          </div>

          {/* Right Content - FAQ */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <BlurFade 
                key={faq.id} 
                delay={0.3 + index * 0.15} 
                inView 
                direction="right" 
                duration={0.6}
              >
                <div className="bg-[#FFFFFF] rounded-lg border border-[#D1D5DB] overflow-hidden transition-all duration-300 hover:shadow-md">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F3EEE3] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[#FFB703] font-bold text-lg">{faq.id}.</span>
                      <h3 className="text-[#0B2C72] font-semibold text-lg">{faq.question}</h3>
                    </div>

                    <div className="flex-shrink-0 ml-4">
                      <div className="w-8 h-8 bg-[#FFB703] rounded-full flex items-center justify-center text-[#FFFFFF] transition-transform duration-200">
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
                        <p className="text-[#374151] leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}