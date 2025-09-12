"use client"

import Image from "next/image"
import { Mail, Phone, Clock, ExternalLink, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const handleGetDirections = () => {
    const address = "Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/maps?q=${encodedAddress}`, "_blank")
  }

  const handleSocialClick = (platform: string) => {
    const urls = {
      facebook: "https://facebook.com/constructionbtp",
      twitter: "https://twitter.com/constructionbtp",
      instagram: "https://instagram.com/constructionbtp",
      google: "https://business.google.com/constructionbtp",
    }
    window.open(urls[platform as keyof typeof urls], "_blank")
  }

  return (
    <section className="bg-[#FEFEFE] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Section Gauche - Informations de Contact */}
          <div className="space-y-8">
            {/* En-tête */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold tracking-wide uppercase text-[#7F95AF]">★ NOUS CONTACTER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#021F69] mb-4 leading-tight">
                Trouvez Nos Informations de Contact
              </h2>
              <div className="w-16 h-1 mb-6 bg-[#7F95AF]"></div>
              <p className="text-[#7F95AF] leading-relaxed">
                Nous comprenons qu'il est important pour vous d'accéder à nos services de construction de manière rapide et efficace.
              </p>
            </div>

            {/* Adresse */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#021F69] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#FEFEFE]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#021F69] mb-2">Siège Social</h3>
                  <p className="text-[#7F95AF] leading-relaxed">
                    Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>

              <button
                onClick={handleGetDirections}
                className="flex items-center gap-2 text-[#021F69] font-semibold transition-colors group hover:text-[#7F95AF]"
              >
                OBTENIR L'ITINÉRAIRE
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Réseaux Sociaux */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#021F69]">Réseaux Sociaux</h3>
              <div className="flex gap-3">
                <Button
                  onClick={() => handleSocialClick("facebook")}
                  className="w-12 h-12 rounded-full bg-[#021F69] flex items-center justify-center text-[#FEFEFE] transition-colors hover:bg-[#7F95AF]"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleSocialClick("twitter")}
                  className="w-12 h-12 rounded-full bg-[#7F95AF] flex items-center justify-center text-[#FEFEFE] transition-colors hover:bg-[#021F69]"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => handleSocialClick("google")}
                  className="w-12 h-12 rounded-full bg-[#021F69] flex items-center justify-center text-[#FEFEFE] transition-colors hover:bg-[#7F95AF]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </Button>
                <Button
                  onClick={() => handleSocialClick("instagram")}
                  className="w-12 h-12 rounded-full bg-[#7F95AF] flex items-center justify-center text-[#FEFEFE] transition-colors hover:bg-[#021F69]"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Section Centrale - Image du Bâtiment */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/illustrations/page-contacts/info.png"
                alt="Bureau Construction BTP"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021F69]/20 to-transparent"></div>
            </div>
          </div>

          {/* Section Droite - Détails de Contact */}
          <div className="space-y-8">
            {/* Contacts Email */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#021F69] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#FEFEFE]" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Projets & Devis</h3>
                    <a
                      href="mailto:projets@construction-btp.ci"
                      className="text-[#7F95AF] transition-colors hover:text-[#021F69]"
                    >
                      projets@construction-btp.ci
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Travaux Publics</h3>
                    <a
                      href="mailto:travauxpublics@construction-btp.ci"
                      className="text-[#7F95AF] transition-colors hover:text-[#021F69]"
                    >
                      travauxpublics@construction-btp.ci
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Numéros de Téléphone */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#021F69] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#FEFEFE]" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Bureau Commercial</h3>
                    <a 
                      href="tel:+22527451234" 
                      className="text-[#7F95AF] transition-colors hover:text-[#021F69]"
                    >
                      +225 27 45 12 34
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Chantier d'Urgence</h3>
                    <a 
                      href="tel:+22505123456" 
                      className="text-[#7F95AF] transition-colors hover:text-[#021F69]"
                    >
                      +225 05 12 34 56
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Heures d'Ouverture */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#021F69] flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#FEFEFE]" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Lundi - Vendredi</h3>
                    <p className="text-[#7F95AF]">07h00 à 17h00</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#021F69]">Samedi</h3>
                    <p className="text-[#7F95AF]">08h00 à 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact d'Urgence */}
            <div className="bg-[#7F95AF] bg-opacity-10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#021F69] mb-3">Interventions d'Urgence</h3>
              <p className="text-[#021F69] text-sm mb-4">Pour les urgences BTP en dehors des heures d'ouverture :</p>
              <a
                href="tel:+22507654321"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-[#FEFEFE] bg-[#021F69] transition-all duration-300 hover:bg-[#7F95AF] hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />
                +225 07 65 43 21
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}