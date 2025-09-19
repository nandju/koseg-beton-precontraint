import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const ConstructionBlog = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      image: '/assets/images/illustrations/page-Blogs/news-1.jpg',
      category: 'Usine',
      title: 'Améliorez votre maison pour réduire vos dépenses cet hiver',
      date: '17 avril 2024',
      excerpt: 'Découvrez les meilleures stratégies pour optimiser l\'efficacité énergétique de votre domicile...'
    },
    {
      id: 2,
      image: '/assets/images/illustrations/page-Blogs/news-2.jpg',
      category: 'Commercial',
      title: 'Le Centre Bill et Adele Jonas est Achevé par Alten Construction.',
      date: '17 avril 2024',
      excerpt: 'Un projet architectural ambitieux qui redéfinit les standards du développement commercial moderne...'
    },
    {
      id: 3,
      image: '/assets/images/illustrations/page-Blogs/news-3.jpg',
      category: 'Résidentiel',
      title: 'Le Taux d\'Intérêt sur les Petits Prêts est Maintenant au Plus Bas pour Votre Rêve',
      date: '17 avril 2024',
      excerpt: 'Profitez des conditions financières exceptionnelles pour concrétiser vos projets immobiliers...'
    },
    {
      id: 4,
      image: '/assets/images/illustrations/page-Blogs/project-2.jpg',
      category: 'Rénovation',
      title: 'Top 5 des Points à Considérer pour Choisir un Entrepreneur Général',
      date: '17 avril 2024',
      excerpt: 'Guide complet pour sélectionner le partenaire idéal pour vos projets de construction et rénovation...'
    },
    {
      id: 5,
      image: '/assets/images/illustrations/page-Blogs/project-3.jpg',
      category: 'Usine',
      title: 'Technologies Interactives dans les Usines et les Installations',
      date: '17 avril 2024',
      excerpt: 'L\'innovation technologique révolutionne les processus industriels pour une efficacité optimale...'
    },
    {
      id: 6,
      image: '/assets/images/illustrations/page-Blogs/project-4.jpg',
      category: 'Remplacement de Toit',
      title: 'Création de Projet Industriel à Travers le Monde',
      date: '17 avril 2024',
      excerpt: 'Exploration des projets industriels les plus innovants à l\'échelle internationale...'
    }
  ];

  const getCategoryColor = (category:string) => {
    const colors: { [key: string]: string } = {
      'Usine': '#0B2C72',
      'Commercial': '#374151',
      'Résidentiel': '#0B2C72',
      'Rénovation': '#374151',
      'Remplacement de Toit': '#0B2C72'
    };
    return colors[category] || '#374151';
  };

  return (
    <div className="min-h-screen bg-[#F3EEE3]">
      {/* Articles Grid */}
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <BlurFade 
                key={article.id}
                delay={0.1 + (index * 0.15)} 
                direction="up" 
                inView={true}
                duration={0.6}
              >
                <div
                  className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer border border-gray-100"
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ borderColor: '#D1D5DB' }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <BlurFade delay={0.2 + (index * 0.15)} direction="down" duration={0.5}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </BlurFade>
                    
                    {/* Category Badge */}
                    <BlurFade delay={0.3 + (index * 0.15)} direction="right" duration={0.4}>
                      <div 
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
                        style={{ backgroundColor: getCategoryColor(article.category) }}
                      >
                        + {article.category}
                      </div>
                    </BlurFade>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-[#0B2C72] bg-opacity-90 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === article.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <BlurFade delay={0} direction="up" duration={0.3}>
                        <button className="bg-[#FFB703] hover:bg-[#E5A503] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                          Lire plus
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </BlurFade>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <BlurFade delay={0.4 + (index * 0.15)} direction="up" duration={0.4}>
                      <h3 className="text-lg font-bold text-[#0B2C72] mb-3 line-clamp-3 leading-tight">
                        {article.title}
                      </h3>
                    </BlurFade>
                    
                    <BlurFade delay={0.5 + (index * 0.15)} direction="up" duration={0.4}>
                      <p className="text-[#374151] text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </BlurFade>
                    
                    <BlurFade delay={0.6 + (index * 0.15)} direction="up" duration={0.4}>
                      <div className="flex items-center justify-between">
                        <span className="text-[#0B2C72] text-sm font-medium">
                          {article.date}
                        </span>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConstructionBlog;