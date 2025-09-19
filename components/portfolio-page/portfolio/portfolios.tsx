import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';


const RealEstatePortfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

const projects = [
  {
    id: 1,
    image: '/assets/images/illustrations/page-portfolios/project-1.png',
    category: 'Commercial',
    title: 'Développements Urbanite',
    description: 'Planchers préconstraints et solutions de post-tension pour bâtiment commercial, optimisant portées, sécurité et durabilité.',
  },
  {
    id: 2,
    image: '/assets/images/illustrations/page-portfolios/project-2.jpg',
    category: 'Rénovation Toiture',
    title: 'Maisons Mountain Skys',
    description: 'Renforcement et réhabilitation des toitures et dalles résidentielles par post-tension, pour une meilleure résistance et longévité.',
  },
  {
    id: 3,
    image: '/assets/images/illustrations/page-portfolios/project-3.jpg',
    category: 'Usine',
    title: 'Construction Rivers Edge',
    description: "Structures industrielles en béton précontraint, conçues pour charges lourdes et exploitation intensive, avec maîtrise des déformations.",
  },
  {
    id: 4,
    image: '/assets/images/illustrations/page-portfolios/project-4.jpg',
    category: 'Usine',
    title: 'Concepts Bâtiments Extérieurs',
    description: "Dalles préconstraintes et systèmes de post-tension pour tours commerciales, maximisant l'espace utile et réduisant l'épaisseur des planchers.",
  }
];

  return (
    <div className="min-h-screen bg-[#F3EEE3]">
      {/* Portfolio Grid */}
      <main className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <BlurFade 
                key={project.id}
                delay={0.2 + (index * 0.2)} 
                direction={index % 2 === 0 ? "left" : "right"} 
                inView={true}
                duration={0.7}
              >
                <div
                  className="group relative overflow-hidden rounded-none shadow-lg transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Container */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <BlurFade delay={0.3 + (index * 0.2)} direction="down" duration={0.6}>
                      <div className="w-full h-full bg-gradient-to-br from-[#FFB703] to-[#0B2C72] opacity-20 absolute inset-0 z-10"></div>
                    </BlurFade>
                    
                    <BlurFade delay={0.4 + (index * 0.2)} direction="up" duration={0.8}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </BlurFade>
                    
                    {/* Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#0B2C72] to-transparent opacity-0 transition-all duration-500 z-20 ${
                      hoveredCard === project.id ? 'opacity-90' : ''
                    }`}>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                        <BlurFade delay={0} direction="up" duration={0.4}>
                          <div className="flex items-center justify-between mb-4">
                            <ArrowUpRight className="w-6 h-6" />
                          </div>
                        </BlurFade>
                        
                        <BlurFade delay={0.1} direction="up" duration={0.4}>
                          <h3 className="text-2xl font-bold mb-3">
                            {project.title}
                          </h3>
                        </BlurFade>
                        
                        <BlurFade delay={0.2} direction="up" duration={0.4}>
                          <p className="text-sm opacity-90 leading-relaxed">
                            {project.description}
                          </p>
                        </BlurFade>
                      </div>
                    </div>
                  </div>

                  {/* Default Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent text-white transition-opacity duration-500 ${
                    hoveredCard === project.id ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <BlurFade delay={0.5 + (index * 0.2)} direction="up" duration={0.4}>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                    </BlurFade>
                    
                    <BlurFade delay={0.6 + (index * 0.2)} direction="up" duration={0.4}>
                      <span className="text-sm text-[#FFB703]">
                        {project.category}
                      </span>
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

export default RealEstatePortfolio;