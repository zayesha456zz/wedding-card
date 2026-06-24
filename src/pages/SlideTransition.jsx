function SlideTransition() {
  return (
    <section 
      className="relative snap-start flex items-center justify-center overflow-hidden w-full h-screen"
      style={{
        backgroundImage: "url('/lemon.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      {/* Musicians */}
      <div className="absolute bottom-4 left-4 z-20 w-20 md:w-70 animate-pulse">
        <img src="/drum.png" alt="Musicians" className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="absolute bottom-4 right-4 z-20 w-20 md:w-70 animate-pulse">
        <img src="/drum.png" alt="Musicians" className="w-full h-auto drop-shadow-2xl scale-x-[-1]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full max-w-6xl">
        
        <div className="mb-4">
          <p className="text-[#8b5c1a] tracking-[0.3em] text-[10px] md:text-[12px] uppercase font-bold mb-1">The Gathering</p>
          <h2 className="text-3xl md:text-6xl font-serif text-[#8b5c1a] italic drop-shadow-md">
            "Two Families, One Story"
          </h2>
        </div>

        {/* Video Wrapper - Using standard Tailwind classes */}
        <div className="relative p-3 bg-white/40 backdrop-blur-md rounded-3xl md:rounded-4xl border-2 border-white/50 shadow-2xl overflow-hidden w-full max-w-lg aspect-video">
          <video 
            src="/group.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover rounded-2xl md:rounded-3xl" 
          />
        </div>

        {/* Bottom Text */}
        <div className="mt-6 px-2 w-full max-w-xl">
          <p className="text-[#8b5c1a] font-serif italic text-sm md:text-lg leading-relaxed font-semibold">
            Gathered with love, laughter, and blessings to celebrate the beautiful union of Kinza & Umar.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-pulse { animation: pulse 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default SlideTransition;