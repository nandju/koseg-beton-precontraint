"use client"

import ServicesSection from "@/components/home-page/services/services-section"
import PortfoliosHero from "@/components/portfolio-page/hero/portfolios-hero"
import RealEstatePortfolio from "@/components/portfolio-page/portfolio/portfolios"
import ServicesHero from "@/components/services-page/hero/services-hero"

export default function PortfoliosPage() {
  return (
    <div className="relative">

      <PortfoliosHero />
      <RealEstatePortfolio />

    </div>
  )
}
