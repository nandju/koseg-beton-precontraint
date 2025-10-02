"use client"

import type React from "react"

import { useState } from "react"
import { X, MessageSquare, ChevronRight, ChevronLeft, Send } from "lucide-react"

interface FormData {
  lastName: string
  firstName: string
  email: string
  subject: string
  description: string
}

interface FormErrors {
  lastName?: string
  firstName?: string
  email?: string
  subject?: string
  description?: string
}

export default function QuoteDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
    subject: "",
    description: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const steps = [
    {
      id: "lastName",
      question: "Quel est votre nom de famille ?",
      placeholder: "Entrez votre nom",
      type: "text",
    },
    {
      id: "firstName",
      question: "Et votre prénom ?",
      placeholder: "Entrez votre prénom",
      type: "text",
    },
    {
      id: "email",
      question: "Comment pouvons-nous vous contacter ?",
      placeholder: "votre.email@exemple.com",
      type: "email",
    },
    {
      id: "subject",
      question: "Quel est le sujet de votre demande ?",
      placeholder: "Ex: Demande de devis pour construction",
      type: "text",
    },
    {
      id: "description",
      question: "Décrivez-nous votre projet en détail",
      placeholder: "Parlez-nous de votre projet, vos besoins, vos attentes...",
      type: "textarea",
    },
  ]

  const validateField = (fieldId: string, value: string): string | undefined => {
    switch (fieldId) {
      case "lastName":
      case "firstName":
        if (!value.trim()) return "Ce champ est requis"
        if (value.trim().length < 2) return "Minimum 2 caractères requis"
        if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(value)) return "Caractères invalides"
        break
      case "email":
        if (!value.trim()) return "L'email est requis"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Format d'email invalide"
        break
      case "subject":
        if (!value.trim()) return "Le sujet est requis"
        if (value.trim().length < 5) return "Minimum 5 caractères requis"
        break
      case "description":
        if (!value.trim()) return "La description est requise"
        if (value.trim().length < 20) return "Minimum 20 caractères requis"
        break
    }
    return undefined
  }

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }))
    // Clear error when user starts typing
    if (errors[fieldId as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [fieldId]: undefined }))
    }
  }

  const handleNext = () => {
    const currentField = steps[currentStep].id
    const value = formData[currentField as keyof FormData]
    const error = validateField(currentField, value)

    if (error) {
      setErrors({ [currentField]: error })
      return
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleSubmit = () => {
    const currentField = steps[currentStep].id
    const value = formData[currentField as keyof FormData]
    const error = validateField(currentField, value)

    if (error) {
      setErrors({ [currentField]: error })
      return
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setCurrentStep(0)
      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        subject: "",
        description: "",
      })
    }, 3000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (currentStep === steps.length - 1) {
        handleSubmit()
      } else {
        handleNext()
      }
    }
  }

  const currentFieldId = steps[currentStep].id
  const currentValue = formData[currentFieldId as keyof FormData]
  const currentError = errors[currentFieldId as keyof FormErrors]

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-24 z-[60] w-14 h-14 bg-[#0B2C72] hover:bg-[#374151] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110"
        aria-label="Demander un devis"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB703] rounded-full animate-pulse" />
      </button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[70] flex items-center justify-center p-4">
          <div className="bg-[#F3EEE3] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-[#0B2C72] text-white p-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-bold mb-2">Demande de Devis</h2>
              <p className="text-white/80 text-sm">Remplissez le formulaire et nous vous contacterons rapidement</p>
              {/* Progress Bar */}
              <div className="mt-4 flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                      index <= currentStep ? "bg-[#FFB703]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2C72] mb-2">Demande envoyée !</h3>
                  <p className="text-[#374151]">Nous vous contacterons dans les plus brefs délais.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Question */}
                  <div>
                    <label className="block text-lg font-semibold text-[#0B2C72] mb-4">
                      {steps[currentStep].question}
                    </label>
                    {steps[currentStep].type === "textarea" ? (
                      <textarea
                        value={currentValue}
                        onChange={(e) => handleInputChange(currentFieldId, e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={steps[currentStep].placeholder}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2C72] transition-all resize-none h-32 bg-white ${
                          currentError ? "border-red-500 focus:ring-red-500" : "border-[#D1D5DB]"
                        }`}
                      />
                    ) : (
                      <input
                        type={steps[currentStep].type}
                        value={currentValue}
                        onChange={(e) => handleInputChange(currentFieldId, e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={steps[currentStep].placeholder}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2C72] transition-all bg-white ${
                          currentError ? "border-red-500 focus:ring-red-500" : "border-[#D1D5DB]"
                        }`}
                      />
                    )}
                    {currentError && (
                      <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <span>⚠</span> {currentError}
                      </p>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    {currentStep > 0 && (
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-[#374151] text-[#374151] rounded-lg hover:bg-[#374151] hover:text-white transition-all font-medium"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        Retour
                      </button>
                    )}
                    {currentStep < steps.length - 1 ? (
                      <button
                        onClick={handleNext}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0B2C72] text-white rounded-lg hover:bg-[#374151] transition-all font-medium"
                      >
                        Suivant
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#FFB703] text-white rounded-lg hover:bg-[#0B2C72] transition-all font-medium"
                      >
                        <Send className="w-5 h-5" />
                        Envoyer la demande
                      </button>
                    )}
                  </div>

                  {/* Step Indicator */}
                  <p className="text-center text-sm text-[#374151]">
                    Étape {currentStep + 1} sur {steps.length}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}