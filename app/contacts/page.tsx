"use client"

import ContactFormMap from "@/components/contact-page/contact-form-map/contact-form-map"
import ContactInfo from "@/components/contact-page/contact-info/contact-info"
import ContactSection from "@/components/contact-page/contact-posthero/contact-posthero"
import EmergencyNumbers from "@/components/contact-page/emergency-numbers/emergency-contacts"
import ContactsHero from "@/components/contact-page/hero/contacts-hero"
import { AnimatedGridPatternDemoFaq } from "@/components/home-page/faq/animated-grid-pattern.-background"
import ServicesSection from "@/components/home-page/services/services-section"
import ServicesHero from "@/components/services-page/hero/services-hero"

export default function ContactsPage() {
  return (
    <div className="relative">

      <ContactsHero />
      {/* <ContactInfo />
      <EmergencyNumbers /> */}
      <ContactSection />
      <ContactFormMap />
      <AnimatedGridPatternDemoFaq />
    </div>
  )
}
