

export default function Head(){
    return(
        <section className="relative h-screen overflow-hidden" style={{ backgroundColor: '#FEFEFE' }}>
            {/* Header */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className="inline-block px-6 py-2 border-2 rounded-full text-sm font-medium backdrop-blur-sm"
          style={{ 
            borderColor: '#7F95AF', 
            color: '#021F69', 
            backgroundColor: '#FEFEFE'
          }}
        >
          POURQUOI NOUS
        </div>
      </div>

      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 text-center px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold max-w-4xl"
          style={{ color: '#021F69' }}
        >
          Nous avons de nombreuses raisons de nous choisir
        </h2>
      </div>
        </section>
    );
}