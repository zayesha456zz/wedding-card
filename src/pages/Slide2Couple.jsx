function Slide2Couple() {
  return (
    // Outer container: Puri screen cover karega
    <section className="w-full h-dvh bg-[#faf6ee] flex items-center justify-center overflow-hidden">
      
      {/* Fixed Canvas: Jo laptop jaisa ratio fix rakhega */}
      <div 
        className="relative w-full max-w-112.5 aspect-9/16 bg-[#faf6ee] shadow-2xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/peacock background.jfif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#faf6ee]/80 backdrop-blur-[2px]" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full">
          
          {/* Decorative Header */}
          <div className="mb-6 md:mb-8 text-center">
            <p className="text-[#b8862d] tracking-[0.3em] text-[10px] uppercase font-bold mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#8b5c1a] italic drop-shadow-sm">
              "A New Beginning"
            </h2>
          </div>

          {/* Video Wrapper */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 w-full max-w-xs aspect-video">
            <video 
              src="/airplane.mp4" 
              autoPlay 
              muted 
              playsInline
              loop
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-3 -left-3 text-[#dfb15b] text-xl z-20">✨</div>
            <div className="absolute -bottom-3 -right-3 text-[#dfb15b] text-xl z-20">✨</div>
          </div>

          {/* Names & Tagline */}
          <div className="mt-8 md:mt-10 text-center px-2">
            <div className="inline-block px-6 py-2 rounded-full border border-[#dfb15b]/40 bg-[#dfb15b]/10 backdrop-blur-sm">
              <p className="text-[#8b5c1a] tracking-[0.3em] uppercase text-xs font-bold">
                Kinza & Umar
              </p>
            </div>
            <p className="mt-4 text-[#8b5c1a]/90 font-serif italic text-sm">
              We are writing our story, one chapter at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide2Couple;