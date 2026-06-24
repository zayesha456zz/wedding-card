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
    <section className="w-full h-dvh bg-[#faf6ee] flex items-center justify-center overflow-hidden">
      
      {/* Canvas: Fixed 9/16 ratio, background image class se handle ki hai */}
      <div 
        className="relative w-full max-w-100 aspect-9/16 bg-[#faf6ee] shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/mehndi bg.jpeg')" }}
      >
        
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
        
        {/* Main Content Card - Center mein */}
        <div className="relative z-10 w-[80%] bg-[#fffaf0]/90 border-double border-4 border-[#a17a41] rounded-2xl p-4 shadow-2xl flex flex-col items-center text-center">
          <div className="absolute inset-2 border border-[#a17a41]/40 rounded-xl pointer-events-none" />
          
          <div className="absolute bottom-2 left-2 z-20 w-10 transform scale-x-[-1]">
            <img src="/auto.png" alt="Auto" className="w-full h-auto" />
          </div>
          <div className="absolute bottom-2 right-2 z-20 w-10">
            <img src="/auto.png" alt="Auto" className="w-full h-auto" />
          </div>

          <div className="space-y-0 text-[#4e342e] font-serif relative z-10 mb-1">
            <p className="uppercase tracking-widest text-[8px]">You are invited to</p>
            <p className="text-xl font-bold uppercase tracking-wider text-[#4e342e]">Kinza's</p>
          </div>

          <h2 className="text-lg text-[#1f4b23] mb-2 tracking-wide" 
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
            Mehendi Ceremony
          </h2>

          <div className="space-y-1 text-[#4e342e] font-serif w-full">
            <div className="flex items-center justify-center gap-2 border-y border-[#a17a41]/60 py-1">
              <p className="uppercase text-[8px] tracking-widest font-extrabold">Monday</p>
              <div className="text-xl font-extrabold text-[#4e342e]">02</div>
              <p className="uppercase text-[8px] tracking-widest font-extrabold">6:00 P.M.</p>
            </div>
            <p className="text-[10px] font-medium pt-1">March 2026</p>
            <p className="font-semibold text-[#1f4b23] text-[9px] px-1">
              The Golden Courtyard, Chattarpur Main Road, New Delhi
            </p>
          </div>
        </div>

        {/* Characters Layer */}
        <div className="absolute bottom-0 left-0 z-20 w-42">
          <img src="/mehndi_couple.png" alt="Mehndi Couple" className="w-full h-auto object-contain" />
        </div>
        
        <div className="absolute bottom-0 right-0 z-20 w-40 animate-dance">
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
      </div>
    </section>
  );
}

export default Slide3Mehendi;