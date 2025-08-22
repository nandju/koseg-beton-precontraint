"use client"
import { ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    category: "Usine",
    title: "Améliorations de votre maison qui vous aideront à économiser de l'argent cet hiver",
    date: "17 avril 2024",
    image: "/assets/images/illustrations/page-accueil/news-1.jpg",
  },
  {
    id: 2,
    category: "Commercial",
    title: "Le centre Bill et Adele Jonas est achevé par Alten Construction.",
    date: "17 avril 2024",
    image: "/assets/images/illustrations/page-accueil/news-2.jpg",
  },
  {
    id: 3,
    category: "Résidentiel",
    title: "Le taux d'intérêt sur les petits prêts est maintenant le plus bas pour votre rêve",
    date: "17 avril 2024",
    image: "/assets/images/illustrations/page-accueil/news-3.jpg",
  },
]

export default function NewsSection() {
  return (
    <section className="py-20 bg-[#FEFEFE]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border-2 border-[#021F69] text-[#021F69] rounded-full text-sm font-medium mb-6">
            BLOGS
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#021F69] mb-4">Actualités et Articles</h2>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="group relative bg-[#FEFEFE] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-[#7F95AF] text-[#FEFEFE] px-3 py-1 rounded-full text-sm font-medium">
                  + {article.category}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Read More Button - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-[#7F95AF] hover:bg-[#7F95AF]/80 text-[#FEFEFE] px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    Lire Plus
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#021F69] mb-3 line-clamp-2 group-hover:text-[#7F95AF] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#7F95AF] font-medium text-sm">{article.date}</p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7F95AF]/20 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}