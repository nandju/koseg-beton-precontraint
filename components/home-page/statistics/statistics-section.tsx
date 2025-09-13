"use client"
import { useEffect, useRef, useState } from "react"

interface Statistic {
  number: number
  label: string
  description: string
}

const statistics: Statistic[] = [
  {
    number: 25,
    label: "ANNÉES",
    description: "Nous fournissons nos services depuis 27 ans",
  },
  {
    number: 82,
    label: "PROJETS",
    description: "Nous avons récemment réalisé plus de 80 projets de qualité",
  },
  {
    number: 90,
    label: "ÉQUIPE",
    description: "Notre agence compte plus de 90 membres d'équipe",
  },
  {
    number: 57,
    label: "CLIENTS",
    description: "Nos clients satisfaits de nos services",
  },
]

function AnimatedCounter({ targetNumber, isVisible }: { targetNumber: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetNumber / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const newCount = Math.min(Math.round(increment * currentStep), targetNumber)
      setCount(newCount)

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [targetNumber, isVisible])

  return <span>{count}</span>
}

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#F3EEE3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0B2C72] leading-none">
                  <AnimatedCounter targetNumber={stat.number} isVisible={isVisible} />
                </span>
                <span className="text-lg md:text-xl font-semibold text-[#FFB703] ml-2">+{stat.label}</span>
              </div>
              <p className="text-[#374151] text-sm md:text-base leading-relaxed max-w-xs mx-auto">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}