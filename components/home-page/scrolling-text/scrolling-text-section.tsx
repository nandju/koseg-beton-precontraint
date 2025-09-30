"use client"
import { ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function ScrollingTextSection() {
const textItems = [
  "Précontrainte Post-tension",
  "Durabilité garantie",
  "Innovation continue",
  "Accompagnement technique",
  "Qualité certifiée",
  "Expertise KOSEG",
];


  return (
    <section className="py-8 bg-[#F3EEE3] overflow-hidden">
      <BlurFade delay={0.2} inView direction="up" duration={0.8}>
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {/* First set of items */}
            {textItems.map((text, index) => (
              <BlurFade 
                key={`first-${index}`} 
                delay={0.4 + index * 0.1} 
                inView 
                direction="left"
                duration={0.6}
                className="flex items-center mx-8 group cursor-pointer"
              >
                <div className="flex items-center space-x-4 transition-all duration-300 group-hover:scale-110">
                  <div className="w-24 h-24 rounded-full border-2 border-[#0B2C72] flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFB703] group-hover:text-[#FFFFFF] group-hover:border-[#FFB703]">
                    <ArrowRight className="w-10 h-10 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <span className="text-4xl md:text-8xl font-extrabold text-[#0B2C72] transition-all duration-300 group-hover:text-[#FFB703]">
                    {text}
                  </span>
                </div>
              </BlurFade>
            ))}

            {/* Duplicate set for seamless loop */}
            {textItems.map((text, index) => (
              <BlurFade 
                key={`second-${index}`} 
                delay={1.0 + index * 0.08} 
                inView 
                direction="left"
                duration={0.5}
                className="flex items-center mx-8 group cursor-pointer"
              >
                <div className="flex items-center space-x-4 transition-all duration-300 group-hover:scale-110">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0B2C72] flex items-center justify-center transition-all duration-300 group-hover:bg-[#FFB703] group-hover:text-[#FFFFFF] group-hover:border-[#FFB703]">
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <span className="text-2xl md:text-4xl font-bold text-[#0B2C72] transition-all duration-300 group-hover:text-[#FFB703]">
                    {text}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  )
}