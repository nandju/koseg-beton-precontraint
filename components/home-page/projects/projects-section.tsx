"use client"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/magicui/blur-fade"

const projects = [
  {
    id: 1,
    category: "Commercial",
    title: "Développements Urbanite",
    image: "/assets/images/illustrations/page-accueil/project-1.png",
  },
  {
    id: 2,
    category: "Rénovation Toiture",
    title: "Maisons Mountain Skys",
    image: "/assets/images/illustrations/page-accueil/project-2.jpg",
  },
  {
    id: 3,
    category: "Usine",
    title: "Construction River's Edge",
    image: "/assets/images/illustrations/page-accueil/project-3.jpg",
  },
  {
    id: 4,
    category: "Usine",
    title: "Concepts Bâtiments Extérieurs",
    image: "/assets/images/illustrations/page-accueil/project-4.jpg",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(2) // River's Edge Construction is active by default

  return (
    <section className="relative min-h-screen bg-[#0B2C72] overflow-hidden">
      {/* Background with BlurFade */}
      <BlurFade delay={0.1} direction="up" duration={1.2} blur="8px" inView>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C72] to-[#374151]" />
      </BlurFade>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Project list */}
          <div className="space-y-8">
            <BlurFade delay={0.3} direction="right" duration={0.8} inView>
              <div className="inline-block px-6 py-2 border border-[#FFFFFF]/30 rounded-full">
                <span className="text-[#FFFFFF] text-sm font-medium tracking-wider">PROJETS</span>
              </div>
            </BlurFade>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <BlurFade 
                  key={project.id}
                  delay={0.5 + (index * 0.2)} 
                  direction="right" 
                  duration={0.8} 
                  inView
                >
                  <div
                    className={`group cursor-pointer transition-all duration-300 ${
                      activeProject === index ? "transform translate-x-4" : ""
                    }`}
                    onMouseEnter={() => setActiveProject(index)}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-[#FFFFFF]/60 text-sm font-medium">+</span>
                      <span className="text-[#FFFFFF]/60 text-sm font-medium">{project.category}</span>
                    </div>

                    <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                      <h3
                        className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                          activeProject === index ? "text-[#FFFFFF]" : "text-[#FFFFFF]/80"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {activeProject === index && (
                        <ArrowUpRight className="w-6 h-6 text-[#FFB703] animate-in slide-in-from-left-2 duration-300" />
                      )}
                    </div>

                    {/* Underline for active project */}
                    {activeProject === index && (
                      <div className="w-full h-px bg-[#FFB703] mt-4 animate-in slide-in-from-left duration-500" />
                    )}
                  </div>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={1.5} direction="up" duration={0.8} inView>
              <div className="pt-8">
                <Button className="group flex items-center gap-3 bg-[#FFB703] hover:bg-[#FFB703]/80 text-[#FFFFFF] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Tous les Projets
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </Button>
              </div>
            </BlurFade>
          </div>

          {/* Right side - Image carousel */}
          <BlurFade delay={0.4} direction="left" duration={1.0} inView>
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="relative w-full h-full rounded-none overflow-hidden">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`absolute inset-0 transition-all duration-700 ${
                      activeProject === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Project indicators */}
              <BlurFade delay={1.8} direction="up" duration={0.6} inView>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {projects.map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeProject === index ? "bg-[#FFB703] scale-125" : "bg-[#FFFFFF]/40 hover:bg-[#FFFFFF]/60"
                      }`}
                    />
                  ))}
                </div>
              </BlurFade>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}