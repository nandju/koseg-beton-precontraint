"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 300) // Show button after scrolling 300px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#0B2C72] hover:bg-[#FFB703] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
      style={{
        background: `conic-gradient(#FFB703 ${scrollProgress * 3.6}deg, rgba(209, 213, 219, 0.3) ${scrollProgress * 3.6}deg)`,
      }}
    >
      <div className="w-10 h-10 bg-[#0B2C72] group-hover:bg-[#FFB703] rounded-full flex items-center justify-center transition-colors">
        <ChevronUp className="w-5 h-5" />
      </div>
    </button>
  )
}