"use client"

import AboutSection from "@/components/history-page/about/about-section"
import AwardsTimeline from "@/components/history-page/Awards/Awards-section"
import HistoryHero from "@/components/history-page/hero/history-hero"
import NewsSection from "@/components/home-page/news/news-section"
import StatisticsSection from "@/components/home-page/statistics/statistics-section"



export default function HistoryPage() {
  return (
    <div className="relative">

      <HistoryHero />
      <AboutSection />
      <AwardsTimeline />
      <StatisticsSection />
      <NewsSection />

    </div>
  )
}
