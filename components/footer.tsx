"use client"
import { ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function FooterSection() {
  return (
    <footer className="relative">
      {/* Bandeau animé haut */}
      <BlurFade delay={0.1} inView direction="down" duration={0.8}>
        <div className="h-4 bg-gradient-to-r from-[#0B2C72] to-[#FFB703] overflow-hidden">
          <div
            className="h-full bg-repeat-x animate-scroll-left"
            style={{
              backgroundImage: `repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 10px,
                   rgba(255,255,255,0.3) 10px,
                   rgba(255,255,255,0.3) 20px
                 )`,
              width: "200%",
            }}
          ></div>
        </div>
      </BlurFade>

      {/* Contenu principal du footer */}
      <div className="bg-[#F3EEE3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Logo central */}
            <BlurFade delay={0.3} inView direction="up" duration={0.7}>
              <div className="flex flex-col items-start">
                <div className="text-3xl font-bold text-[#0B2C72]">KOSEG</div>
                <p className="text-sm text-[#0B2C72] mt-2 text-center">
                  Béton Précontraint
                </p>
              </div>
            </BlurFade>

            
            {/* Colonne 1 */}
            <BlurFade delay={0.4} inView direction="up" duration={0.6}>
              <div>
                <h4 className="text-[#0B2C72] font-semibold mb-4">Entreprise</h4>
                <div className="space-y-3">
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    À propos
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Nos services
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Réalisations
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Témoignages
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Blog
                  </a>
                  <br />
                </div>
              </div>
            </BlurFade>

            {/* Colonne 2 */}
            <BlurFade delay={0.5} inView direction="up" duration={0.6}>
              <div>
                <h4 className="text-[#0B2C72] font-semibold mb-4">Expertise</h4>
                <div className="space-y-3">
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Études techniques
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Post-tension
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Fournitures
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Contact
                  </a>
                  <br />
                </div>
              </div>
            </BlurFade>

            
            {/* Colonne 3 */}
            <BlurFade delay={0.6} inView direction="up" duration={0.6}>
              <div>
                <h4 className="text-[#0B2C72] font-semibold mb-4">Informations</h4>
                <div className="space-y-3">
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    FAQ
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Mentions légales
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Confidentialité
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Plan du site
                  </a>
                  <br />
                </div>
              </div>
            </BlurFade>

            {/* Colonne 4 */}
            <BlurFade delay={0.7} inView direction="up" duration={0.6}>
              <div>
                <h4 className="text-[#0B2C72] font-semibold mb-4">Ressources</h4>
                <div className="space-y-3">
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Carrières
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Partenaires
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Presse
                  </a>
                  <br />
                  <a href="#" className="text-[#374151] hover:text-[#FFB703] transition-colors">
                    Événements
                  </a>
                  <br />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>


      {/* Bannière CTA */}
      <BlurFade delay={0.8} inView direction="up" duration={0.8}>
        <div className="relative bg-gradient-to-r from-[#0B2C72] to-[#FFB703] py-16 overflow-hidden">
          {/* Fond avec image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="/assets/images/backgrounds/backgroundc.png"
              alt="Construction"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <BlurFade delay={1.0} inView direction="left" duration={0.7}>
                <div className="text-center lg:text-left mb-8 lg:mb-0">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-4">
                    Construisons ensemble l'avenir.
                  </h2>
                  <p className="text-[#FFFFFF]/90 text-lg max-w-md">
                    Des solutions fiables, innovantes et durables pour vos projets de construction et d'ingénierie.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={1.2} inView direction="right" duration={0.6}>
                <button className="bg-[#FFFFFF] text-[#0B2C72] px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-[#F3EEE3] transition-colors">
                  <span>Commencez maintenant</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </BlurFade>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Copyright */}
      <BlurFade delay={1.4} inView direction="up" duration={0.5}>
        <div className="bg-[#F3EEE3] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-[#374151]">
              <p>
                © 2025 <span className="font-semibold text-[#0B2C72]">KOSEG Béton Précontraint</span> – Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Bandeau animé bas */}
      <BlurFade delay={1.5} inView direction="up" duration={0.8}>
        <div className="h-4 bg-gradient-to-r from-[#0B2C72] to-[#FFB703] overflow-hidden">
          <div
            className="h-full bg-repeat-x animate-scroll-left"
            style={{
              backgroundImage: `repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 10px,
                   rgba(255,255,255,0.3) 10px,
                   rgba(255,255,255,0.3) 20px
                 )`,
              width: "200%",
            }}
          ></div>
        </div>
      </BlurFade>
    </footer>
  )
}