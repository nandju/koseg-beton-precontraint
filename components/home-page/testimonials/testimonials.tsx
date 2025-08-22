"use client"
import { Marquee } from "@/components/magicui/marquee"
import { Quote } from "lucide-react"
import Image from "next/image"
import { NumberTicker } from "@/components/magicui/number-ticker";

const temoignages = [
  {
    name: "Kouadio Serge",
    role: "Chef de projet BTP",
    body: "Grâce à KOSEG Béton Précontraint, nous avons pu respecter nos délais tout en garantissant la solidité des planchers post-contraints. Leur équipe est réactive et très professionnelle.",
    img: "/assets/images/illustrations/page-accueil/serge.jpg",
  },
  {
    name: "Awa Koné",
    role: "Architecte indépendante",
    body: "La collaboration avec KOSEG a apporté des solutions techniques innovantes qui ont enrichi la conception de notre bâtiment. Ils allient savoir-faire et modernité.",
    img: "/assets/images/illustrations/page-accueil/awa.jpg",
  },
  {
    name: "Jean-Baptiste Kouadio",
    role: "Directeur technique – Entreprise de construction",
    body: "Les solutions de post-tension proposées par KOSEG nous ont permis de réduire les coûts et d'optimiser les espaces. Une vraie valeur ajoutée pour nos projets.",
    img: "/assets/images/illustrations/page-accueil/kouadio.jpg",
  },
  {
    name: "Mariam Traoré",
    role: "Promotrice immobilière",
    body: "J'ai choisi KOSEG pour la réalisation de plusieurs immeubles résidentiels. La qualité des matériaux et la rigueur dans l'exécution m'ont convaincue de continuer avec eux.",
    img: "/assets/images/illustrations/page-accueil/mariam.jpg",
  },
  {
    name: "Stéphane Yao",
    role: "Ingénieur structure",
    body: "Leur expertise en calculs et en études techniques a été déterminante dans la réussite de notre projet. Je recommande KOSEG pour la fiabilité de ses solutions.",
    img: "/assets/images/illustrations/page-accueil/yao.jpg",
  },
  {
    name: "Fatou Bamba",
    role: "Responsable de coopérative immobilière",
    body: "KOSEG nous a accompagnés avec sérieux et transparence dans la construction de nos logements collectifs. Le suivi de chantier a été exemplaire.",
    img: "/assets/images/illustrations/page-accueil/fatou.jpg",
  },
];



const premiereLigne = temoignages.slice(0, temoignages.length / 2)
const deuxiemeLigne = temoignages.slice(temoignages.length / 2)

const CarteTemoignage = ({
  img,
  name,
  role,
  body,
}: {
  img: string
  name: string
  role: string
  body: string
}) => {
  return (
    <div className="relative flex flex-col items-center text-center max-w-sm mx-8">
      {/* Image de Profil avec Bordure Verte */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-[#7F95AF] to-[#7F95AF]">
          <Image
            src={img || "/placeholder.svg"}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Icône Citation */}
        <div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#7F95AF" }}
        >
          <Quote className="h-4 w-4 text-[#FEFEFE] fill-current" />
        </div>
      </div>

      {/* Texte du Témoignage */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 px-4">{body}</blockquote>

      {/* Nom et Rôle */}
      <div className="text-center">
        <h4 className="text-[#FEFEFE] font-semibold text-lg">{name}</h4>
        <p className="text-[#7F95AF] text-sm font-medium">{role}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Image de Fond avec Superposition */}
      <div className="absolute inset-0">
        <Image src="/assets/images/backgrounds/background-silhouette.png" alt="parade" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#021F69]/80"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10">
        {/* En-tête de Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FEFEFE] mb-4">Que disent les gens de nos services ?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto px-4">
           Parcourez les retours de maîtres d'ouvrage, promoteurs et bureaux d'études sur notre expertise technique et la fiabilité de nos réalisations.
          </p>
        </div>

        {/* Défilement des Témoignages */}
        <div className="relative flex w-full flex-col items-center justify-center">
          <Marquee reverse pauseOnHover className="[--duration:30s] py-4">
            {deuxiemeLigne.map((temoignage, index) => (
              <CarteTemoignage key={`second-${index}`} {...temoignage} />
            ))}
          </Marquee>

          {/* Superpositions de Dégradé */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#021F69]/90"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#021F69]/90"></div>
        </div>

      </div>
    </section>
  )
}