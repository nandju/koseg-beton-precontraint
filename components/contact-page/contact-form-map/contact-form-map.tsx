"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, ExternalLink, Phone, Mail } from "lucide-react"

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
    <section className="bg-[#FEFEFE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Section */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-96 md:h-[500px]">
            {/* Map Container */}
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

            {/* Map Info Overlay */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#021F69] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[#FEFEFE]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#021F69] text-sm">Construction BTP</h3>
                  <p className="text-[#7F95AF] text-xs mb-2">Zone Industrielle, Yopougon</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleGetDirections}
                      className="text-[#021F69] hover:text-[#7F95AF] text-xs font-medium transition-colors"
                    >
                      Itinéraire
                    </button>
                    <span className="text-gray-400 text-xs">•</span>
                    <button
                      onClick={handleViewLargerMap}
                      className="text-[#021F69] hover:text-[#7F95AF] text-xs font-medium transition-colors"
                    >
                      Carte plus grande
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Map Controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <button
                onClick={handleGetDirections}
                className="flex items-center gap-2 px-4 py-2 bg-[#021F69] text-[#FEFEFE] font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:bg-[#7F95AF]"
              >
                <ExternalLink className="h-4 w-4" />
                Itinéraire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}