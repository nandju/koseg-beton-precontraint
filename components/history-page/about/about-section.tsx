"use client"

import { useState } from "react"
import { CheckCircle, ArrowRight, Target, Users, Award } from "lucide-react"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('who-we-are')

  const tabs = [
    {
      id: 'who-we-are',
      number: '01',
      title: 'Qui Nous Sommes',
      content: {
        title: "Spécialistes du béton précontraint, façonnons des structures durables et innovantes.",
        description: "KOSEG Béton Précontraint est une entreprise spécialisée dans la fourniture de solutions complètes en précontrainte. Nous mettons à votre service notre expertise reconnue pour des projets d'envergure, garantissant performance et durabilité. Notre engagement est de fournir des solutions innovantes, adaptées aux défis techniques les plus complexes du BTP.",
        highlights: [
          "Franchise exclusive avec MEGA PREFAB",
          "Expertise en systèmes de précontrainte",
          "Solutions par post-tension et pré-tension",
          "Accompagnement technique complet"
        ]
      }
    },
    {
      id: 'our-mission',
      number: '02',
      title: 'Notre Mission',
      content: {
        title: "Accompagner les professionnels dans leurs projets les plus ambitieux.",
        description: "Nous accompagnons les ingénieurs civils, maîtres d'ouvrage et responsables techniques dans la réalisation de leurs projets les plus ambitieux, en garantissant performance, sécurité et durabilité. Notre mission est d'offrir des systèmes de précontrainte de haute qualité qui optimisent les structures et réduisent les coûts de construction.",
        highlights: [
          "Systèmes conformes aux normes strictes",
          "Optimisation des portées et épaisseurs",
          "Réduction des coûts de structure",
          "Suivi technique et qualité rigoureux"
        ]
      }
    },
    {
      id: 'our-values',
      number: '03',
      title: 'Nos Valeurs',
      content: {
        title: "Qualité, fiabilité et innovation au cœur de notre engagement.",
        description: "Chez KOSEG, la qualité est notre priorité absolue. Nos systèmes de précontrainte sont conçus et fabriqués selon les normes les plus strictes. Nous bénéficions d'une franchise exclusive avec MEGA PREFAB, un leader mondial, assurant des produits de haute fiabilité et une garantie inégalée.",
        highlights: [
          "Qualité et conformité certifiées",
          "Partenariat avec leader mondial",
          "Matériaux haute résistance",
          "Contrôles qualité à chaque étape"
        ]
      }
    }
  ]

  const activeTabData = tabs.find(tab => tab.id === activeTab)

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F3EEE3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <BlurFade delay={0.2} direction="left" inView={true}>
              <div className="relative">
                <img
                  src="/assets/images/illustrations/page-history/4.png"
                  alt="Équipe KOSEG travaillant sur système de précontrainte"
                  className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                />
                
                {/* MEGA PREFAB Partnership Badge */}
                <BlurFade delay={0.6} direction="up" inView={true}>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-4 shadow-lg">
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: '#0B2C72' }} />
                      <div className="text-sm font-bold" style={{ color: '#0B2C72' }}>MEGA PREFAB</div>
                      <div className="text-xs font-semibold px-2 py-1 rounded text-white" style={{ backgroundColor: '#374151' }}>
                        PARTENAIRE
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </BlurFade>
            
            {/* Secondary Image */}
            <BlurFade delay={0.4} direction="left" inView={true}>
              <div className="w-full lg:w-4/5 ml-auto">
                <img
                  src="/assets/images/illustrations/page-history/news-2.jpg"
                  alt="Chantier avec dalles précontraintes KOSEG"
                  className="w-full h-64 object-cover object-bottom rounded-lg shadow-lg"
                />
              </div>
            </BlurFade>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            
            {/* About Label */}
            <BlurFade delay={0.1} direction="right" inView={true}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2" style={{ borderColor: '#0B2C72', color: '#0B2C72' }}>
                <span className="text-sm font-medium uppercase tracking-wide">À PROPOS</span>
              </div>
            </BlurFade>

            {/* Main Heading */}
            <BlurFade delay={0.2} direction="right" inView={true}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight" style={{ color: '#0B2C72' }}>
                Solutions de précontrainte pour une construction durable.
              </h2>
            </BlurFade>

            {/* Tabs Navigation */}
            <BlurFade delay={0.3} direction="right" inView={true}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                {tabs.map((tab, index) => (
                  <BlurFade key={tab.id} delay={0.4 + index * 0.1} direction="up" inView={true}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'shadow-md'
                          : 'hover:shadow-sm'
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? '#0B2C72' : '#FFFFFF',
                        color: activeTab === tab.id ? '#FFFFFF' : '#0B2C72',
                        border: `1px solid ${activeTab === tab.id ? '#0B2C72' : '#374151'}`
                      }}
                    >
                      <span className={`text-sm font-bold ${
                        activeTab === tab.id ? 'opacity-100' : 'opacity-60'
                      }`} style={{ color: activeTab === tab.id ? '#FFFFFF' : '#374151' }}>
                        {tab.number}
                      </span>
                      <span className="font-medium text-sm sm:text-base">{tab.title}</span>
                    </button>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            {/* Tab Content */}
            <BlurFade 
              key={activeTab} 
              delay={0} 
              direction="up" 
              duration={0.5}
              className="space-y-6"
            >
              <h3 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: '#0B2C72' }}>
                {activeTabData?.content.title}
              </h3>
              
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: '#374151' }}>
                {activeTabData?.content.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTabData?.content.highlights.map((highlight, index) => (
                  <BlurFade key={index} delay={0.1 + index * 0.1} direction="right">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#0B2C72' }} />
                      <span className="text-sm lg:text-base" style={{ color: '#374151' }}>{highlight}</span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            {/* Action Buttons */}
            <BlurFade delay={0.7} direction="up" inView={true}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md" style={{ color: '#0B2C72', border: '2px solid #0B2C72' }}>
                  <span>Nos Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: '#FFB703' }}>
                  <span>Contactez-nous</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <BlurFade delay={0.8} direction="left" inView={true}>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-30 hidden xl:block">
          <div className="w-32 h-32 relative">
            <Image
              src="/assets/images/illustrations/page-history/grue.png"  
              alt="Élément décoratif"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </BlurFade>
    </section>
  )
}

export default AboutSection