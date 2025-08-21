"use client"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

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
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen bg-[#021F69] overflow-hidden transition-all duration-1000 ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-90"
      }`}
    >
      {/* Background expansion effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#021F69] to-[#7F95AF] transition-transform duration-1000 ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Project list */}
          <div className="space-y-8">
            <div className="inline-block px-6 py-2 border border-[#FEFEFE]/30 rounded-full">
              <span className="text-[#FEFEFE] text-sm font-medium tracking-wider">PROJETS</span>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeProject === index ? "transform translate-x-4" : ""
                  }`}
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-[#FEFEFE]/60 text-sm font-medium">+</span>
                    <span className="text-[#FEFEFE]/60 text-sm font-medium">{project.category}</span>
                  </div>

                  <div className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                    <h3
                      className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                        activeProject === index ? "text-[#FEFEFE]" : "text-[#FEFEFE]/80"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {activeProject === index && (
                      <ArrowUpRight className="w-6 h-6 text-[#7F95AF] animate-in slide-in-from-left-2 duration-300" />
                    )}
                  </div>

                  {/* Underline for active project */}
                  {activeProject === index && (
                    <div className="w-full h-px bg-[#FEFEFE]/30 mt-4 animate-in slide-in-from-left duration-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="group flex items-center gap-3 bg-[#7F95AF] hover:bg-[#7F95AF]/80 text-[#FEFEFE] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Tous les Projets
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right side - Image carousel */}
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
            <div className="absolute bottom-6 left-6 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index ? "bg-[#FEFEFE] scale-125" : "bg-[#FEFEFE]/40 hover:bg-[#FEFEFE]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}