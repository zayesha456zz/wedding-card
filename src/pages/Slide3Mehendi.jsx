import { useState } from 'react';

function Slide3Mehendi() {
  const [sparkles] = useState(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 4 + Math.random() * 6
    }));
  });

  return (
    <section className="w-full h-screen relative snap-start overflow-hidden flex items-center justify-center bg-[#faf6ee]">
      
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/mehndi bg.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9 
        }}
      />

      {/* Golden Sprinkle Effect */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute bg-yellow-400 rounded-full opacity-70 animate-sparkle"
            style={{
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              top: '-10%',
              boxShadow: '0 0 10px #FFD700'
            }}
          />
        ))}
      </div>
      
      {/* Main Content Card */}
      <div className="relative z-10 w-11/12 max-w-2xl bg-[#fffaf0] border-double border-8 border-[#a17a41] rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col items-center text-center">
        <div className="absolute inset-2 border-2 border-[#a17a41]/40 rounded-2xl pointer-events-none" />
        
        {/* Autos */}
        <div className="absolute bottom-4 left-4 z-20 w-16 md:w-24 transform scale-x-[-1]">
          <img src="/auto.png" alt="Auto" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-4 right-4 z-20 w-16 md:w-24">
          <img src="/auto.png" alt="Auto" className="w-full h-auto" />
        </div>

        <div className="space-y-1 text-[#4e342e] font-serif relative z-10 mb-2">
          <p className="uppercase tracking-widest text-xs">You are invited to</p>
          <p className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-[#4e342e]">Kinza's</p>
        </div>

        <h2 className="text-2xl md:text-4xl text-[#1f4b23] mb-4 tracking-wide leading-tight" 
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
          Mehendi Ceremony
        </h2>

        <div className="space-y-4 text-[#4e342e] font-serif w-full">
          <div className="flex items-center justify-center gap-4 md:gap-10 border-y-2 border-[#a17a41]/60 py-3">
            <p className="uppercase text-xs tracking-widest font-extrabold">Monday</p>
            <div className="text-4xl md:text-6xl font-extrabold text-[#4e342e]">02</div>
            <p className="uppercase text-xs tracking-widest font-extrabold">6:00 P.M.</p>
          </div>
          <p className="text-lg md:text-2xl font-medium pt-1">March 2026</p>
          <p className="font-semibold text-[#1f4b23] text-sm md:text-lg px-2">
            The Golden Courtyard, Chattarpur Main Road, New Delhi
          </p>
        </div>
      </div>

      {/* Characters Layer */}
      <div className="absolute bottom-0 left-0 z-20 w-1/4">
        <img src="/mehndi_couple.png" alt="Mehndi Couple" className="w-full h-auto object-contain" />
      </div>
      
      <div className="absolute bottom-0 right-0 z-20 w-1/4 animate-dance">
        <img src="/girls.png" alt="Girls" className="w-full h-auto object-contain" />
      </div>

      <style>{`
        @keyframes sparkle {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-sparkle { animation: sparkle linear infinite; }

        @keyframes dance {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(-5deg) translateY(-10px); }
          50% { transform: rotate(0deg) translateY(0); }
          75% { transform: rotate(5deg) translateY(-10px); }
        }
        .animate-dance { animation: dance 3s ease-in-out infinite; transform-origin: bottom center; }
      `}</style>
    </section>
  );
}

export default Slide3Mehendi;