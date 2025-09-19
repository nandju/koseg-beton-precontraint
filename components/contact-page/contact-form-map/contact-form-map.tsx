"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, ExternalLink, Phone, Mail } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function ContactFormMap() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleGetDirections = () => {
    const address = "Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  const handleViewLargerMap = () => {
    const address = "Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}&z=15`, "_blank")
  }

  return (
    <section className="bg-[#F3EEE3] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Section */}
        <BlurFade delay={0.2} direction="up" inView={true} duration={0.8}>
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-96 md:h-[500px]">
              {/* Map Container */}
              {/* <BlurFade delay={0.3} direction="down" duration={0.6}> */}
                <div className="absolute inset-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0!2d-4.0228!3d5.3097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTgnMzUuMCJOIDTCsDAyJzEwLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Construction BTP"
                  />
                </div>
              {/* </BlurFade> */}

              {/* Map Info Overlay */}
              <BlurFade delay={0.5} direction="right" inView={true} duration={0.5}>
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <BlurFade delay={0.6} direction="up" duration={0.4}>
                      <div className="w-8 h-8 rounded-full bg-[#0B2C72] flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-[#FFFFFF]" />
                      </div>
                    </BlurFade>
                    <div>
                      <BlurFade delay={0.7} direction="up" duration={0.4}>
                        <h3 className="font-bold text-[#0B2C72] text-sm">Construction BTP</h3>
                      </BlurFade>
                      <BlurFade delay={0.8} direction="up" duration={0.4}>
                        <p className="text-[#374151] text-xs mb-2">Zone Industrielle, Yopougon</p>
                      </BlurFade>
                      <BlurFade delay={0.9} direction="up" duration={0.4}>
                        <div className="flex gap-2">
                          <button
                            onClick={handleGetDirections}
                            className="text-[#0B2C72] hover:text-[#FFB703] text-xs font-medium transition-colors"
                          >
                            Itinéraire
                          </button>
                          <span className="text-gray-400 text-xs">•</span>
                          <button
                            onClick={handleViewLargerMap}
                            className="text-[#0B2C72] hover:text-[#FFB703] text-xs font-medium transition-colors"
                          >
                            Carte plus grande
                          </button>
                        </div>
                      </BlurFade>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Additional Map Controls */}
              <BlurFade delay={0.6} direction="left" inView={true} duration={0.5}>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={handleGetDirections}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0B2C72] text-[#FFFFFF] font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:bg-[#FFB703]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Itinéraire
                  </button>
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}