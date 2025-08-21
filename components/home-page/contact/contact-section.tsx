"use client"

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated diagonal lines strip */}
      <div className="h-8 bg-[#7F95AF] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {/* Repeat diagonal lines pattern */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-0.5 bg-[#FEFEFE] transform rotate-45 mx-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main contact section */}
      <div className="relative min-h-[400px] bg-gradient-to-br from-[#021F69] via-[#7F95AF] to-[#021F69]">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/backgrounds/backgroundc.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#021F69]/80 via-[#7F95AF]/70 to-[#021F69]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 text-center">
          {/* Contact badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <span className="px-6 py-2 border-2 border-[#FEFEFE]/30 rounded-full text-[#FEFEFE] text-sm font-medium tracking-wider uppercase">
              Contactez-nous
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#FEFEFE] mb-8 leading-tight">
            {"Construisons quelque chose d'exceptionnel."}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#FEFEFE]/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd’hui et donnons vie à vos idées, avec expertise, innovation et passion.
          </p>

          {/* More Details button */}
          <button className="inline-flex items-center gap-3 bg-[#FEFEFE] text-[#021F69] px-8 py-3 rounded-full font-medium text-lg hover:bg-[#FEFEFE]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Plus de détails
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
      `}</style>
    </section>
  )
}