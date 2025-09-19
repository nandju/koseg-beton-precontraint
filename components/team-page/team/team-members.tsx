"use client"

import { useState } from "react"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

const teamMembers = [
  {
    id: 1,
    name: "Jordan Kouadio",
    role: "Fondateur de KOSEG",
    image: "/assets/images/illustrations/page-team/1.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Youtube, href: "#" },
    ],
  },
  {
    id: 2,
    name: "Paula N'Guessan",
    role: "Co-Fondatrice",
    image: "/assets/images/illustrations/page-team/2.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    id: 3,
    name: "Alice Traoré",
    role: "Architecte en chef",
    image: "/assets/images/illustrations/page-team/3.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Youtube, href: "#" },
    ],
  },
  {
    id: 4,
    name: "Carla Koné",
    role: "Ingénieure architecte",
    image: "/assets/images/illustrations/page-team/4.png",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    id: 5,
    name: "Bamba Yao",
    role: "Co-Fondateur",
    image: "/assets/images/illustrations/page-team/5.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Youtube, href: "#" },
    ],
  },
  {
    id: 6,
    name: "Clare Kouamé",
    role: "Fondatrice associée",
    image: "/assets/images/illustrations/page-team/6.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Linkedin, href: "#" },
    ],
  },
  {
    id: 7,
    name: "Jean-Marc Koffi",
    role: "Architecte principal",
    image: "/assets/images/illustrations/page-team/7.png",
    socials: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
  {
    id: 8,
    name: "Gordon N'Dri",
    role: "Ingénieur en béton précontraint",
    image: "/assets/images/illustrations/page-team/8.png",
    socials: [
      { icon: Facebook, href: "#" },
      { icon: Linkedin, href: "#" },
      { icon: Youtube, href: "#" },
    ],
  },
]

export default function TeamMembers() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EEE3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} direction="up" inView={true}>
            <h2 className="text-4xl font-bold mb-4 text-[#0B2C72]">
              Notre Équipe
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} direction="up" inView={true}>
            <p className="text-lg text-[#374151] max-w-2xl mx-auto">
              Découvrez les experts qui font de KOSEG un leader dans le secteur de la construction
            </p>
          </BlurFade>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <BlurFade 
              key={member.id}
              delay={0.3 + (index * 0.1)} 
              direction="up" 
              inView={true}
              duration={0.6}
            >
              <div 
                className="group relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Team Member Card */}
                <div className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#D1D5DB]">
                  {/* Member Image */}
                  <div className="aspect-square overflow-hidden relative">
                    {/* <BlurFade delay={0.4 + (index * 0.1)} direction="down" duration={0.5}> */}
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    {/* </BlurFade> */}
                    
                    {/* Social Media Overlay - Appears on Hover */}
                    <div 
                      className={`absolute inset-0 bg-[#0B2C72]/90 flex items-center justify-center transition-all duration-300 ${
                        hoveredMember === member.id 
                          ? 'opacity-100 visible' 
                          : 'opacity-0 invisible'
                      }`}
                    >
                      {member.socials.length > 0 && (
                        <div className="flex space-x-4">
                          {member.socials.map((social, socialIndex) => {
                            const IconComponent = social.icon
                            return (
                              <BlurFade
                                key={socialIndex}
                                delay={socialIndex * 0.1}
                                direction="up"
                                duration={0.3}
                              >
                                <a
                                  href={social.href}
                                  className="w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center text-[#0B2C72] hover:bg-[#FFB703] hover:text-[#FFFFFF] transition-all duration-300 transform hover:scale-110 shadow-lg"
                                >
                                  <IconComponent className="w-5 h-5" />
                                </a>
                              </BlurFade>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6 text-center">
                    <BlurFade delay={0.5 + (index * 0.1)} direction="up" duration={0.4}>
                      <h3 className="text-xl font-bold mb-2 text-[#0B2C72]">
                        {member.name}
                      </h3>
                    </BlurFade>
                    <BlurFade delay={0.6 + (index * 0.1)} direction="up" duration={0.4}>
                      <p className="text-[#374151] font-medium text-sm">
                        {member.role}
                      </p>
                    </BlurFade>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}