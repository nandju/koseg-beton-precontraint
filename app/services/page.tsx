"use client"

import ServicesSection from "@/components/home-page/services/services-section"
import ServicesHero from "@/components/services-page/hero/services-hero"

export default function ServicesPage() {
  return (
    <div className="relative">

      <ServicesHero />
      <ServicesSection />

    </div>
  )
}
