"use client"
import { ArrowRight } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative">
      {/* Bandeau animé haut */}
      <div className="h-4 bg-gradient-to-r from-[#021F69] to-[#7F95AF] overflow-hidden">
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

      {/* Contenu principal du footer */}
      <div className="bg-[#FEFEFE] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Logo central */}
            <div className="flex flex-col items-start">
              <div className="text-3xl font-bold text-[#021F69]">KOSEG</div>
              <p className="text-sm text-[#021F69] mt-2 text-center">
                Béton Précontraint
              </p>
            </div>

            
            {/* Colonne 1 */}
            <div>
              <h4 className="text-[#021F69] font-semibold mb-4">Entreprise</h4>
              <div className="space-y-3">
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  À propos
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Nos services
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Réalisations
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Témoignages
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Blog
                </a>
                <br />
              </div>
            </div>

            {/* Colonne 2 */}
            <div>
              <h4 className="text-[#021F69] font-semibold mb-4">Expertise</h4>
              <div className="space-y-3">
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Études techniques
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Post-tension
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Fournitures
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Contact
                </a>
                <br />
              </div>
            </div>

            
            {/* Colonne 3 */}
            <div>
              <h4 className="text-[#021F69] font-semibold mb-4">Informations</h4>
              <div className="space-y-3">
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  FAQ
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Mentions légales
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Confidentialité
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Plan du site
                </a>
                <br />
              </div>
            </div>

            {/* Colonne 4 */}
            <div>
              <h4 className="text-[#021F69] font-semibold mb-4">Ressources</h4>
              <div className="space-y-3">
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Carrières
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Partenaires
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Presse
                </a>
                <br />
                <a href="#" className="text-[#021F69] hover:text-[#7F95AF] transition-colors">
                  Événements
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bannière CTA */}
      <div className="relative bg-gradient-to-r from-[#021F69] to-[#7F95AF] py-16 overflow-hidden">
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
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#FEFEFE] mb-4">
                Construisons ensemble l’avenir.
              </h2>
              <p className="text-[#FEFEFE]/90 text-lg max-w-md">
                Des solutions fiables, innovantes et durables pour vos projets de construction et d’ingénierie.
              </p>
            </div>

            <button className="bg-[#FEFEFE] text-[#021F69] px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-[#7F95AF]/20 transition-colors">
              <span>Commencez maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#FEFEFE] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[#7F95AF]">
            <p>
              © 2025 <span className="font-semibold text-[#021F69]">KOSEG Béton Précontraint</span> – Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

      {/* Bandeau animé bas */}
      <div className="h-4 bg-gradient-to-r from-[#021F69] to-[#7F95AF] overflow-hidden">
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
    </footer>
  )
}
