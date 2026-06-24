import { useState } from 'react';

const cardFontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap');
`;

const CornerFirework = ({ className, style }) => (
  <div className={`absolute w-20 h-20 z-30 pointer-events-none ${className}`} style={style}>
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="absolute top-1/2 left-1/2 w-4 h-0.5 bg-[#d4af37] origin-left rounded-full"
        style={{
          transform: `rotate(${i * 45}deg)`,
          boxShadow: '0 0 5px #d4af37'
        }}
      />
    ))}
  </div>
);

function Slide5Valima({ data }) {
  const [stars] = useState(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
      size: 8 + Math.random() * 6
    }));
  });

  return (
    <>
      <style>{cardFontStyles}</style>
      <section className="w-full h-dvh flex items-center justify-center bg-[#800000]/10 overflow-hidden">
        <div 
          className="relative w-full max-w-100 aspect-9/16 shadow-2xl overflow-hidden flex flex-col items-center justify-center border-double border-[#d4af37]"
          style={{ 
            backgroundImage: "url('/valima bg.jpeg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            borderWidth: '8px'
          }}
        >
          {/* Decorative Elements */}
          <img src="/valima car.png" alt="Car Left" className="absolute left-0 bottom-2 w-41 z-40" />
          
          <CornerFirework className="top-2 left-2 animate-pulse-firework" />
          <CornerFirework className="top-2 right-2 animate-pulse-firework" style={{ animationDelay: '0.5s' }} />

          {/* Stars */}
          <div className="absolute inset-0 pointer-events-none z-25">
            {stars.map((s) => (
              <div key={s.id} className="absolute text-[#d4af37] animate-twinkle" 
                   style={{ left: `${s.left}%`, fontSize: `${s.size}px`, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`, top: '-10%', textShadow: '0 0 5px #d4af37' }}>
                ★
              </div>
            ))}
          </div>

          {/* Main Content - top-28 se top-16 kar diya hai taake content upar jaye */}
          <div className="absolute top-16 z-20 flex flex-col items-center justify-center w-[90%] min-h-80 bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl border border-[#d4af37]/30 text-center">
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🥂</span>
              <h2 className="text-[#5c0612] font-semibold text-4xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Reception</h2>
            </div>

            <p className="text-[#5c0612] text-[10px] uppercase tracking-widest font-semibold mb-8 font-serif">You are invited to the reception of</p>

            <div className="mb-8 w-full">
              <p className="text-xl font-bold leading-none" style={{ fontFamily: "'Dancing Script', cursive" }}>Kinza Kanwal</p>
              <p className="text-sm font-bold text-[#d4af37] py-3">&</p>
              <p className="text-xl font-bold leading-none" style={{ fontFamily: "'Dancing Script', cursive" }}>Umar Farooq</p>
            </div>

            <div className="space-y-4 w-full text-[10px] text-[#5c0612] font-semibold">
              <p>📅 {data?.valimaDate || "Saturday, Nov 28, 2026"}</p>
              <p>⏰ 07:00 PM</p>
              <p className="leading-tight px-2">📍 {data?.valimaVenue || "Garrison Marriage Hall, Gujranwala"}</p>
            </div>
            
            <div className="w-16 h-px bg-[#d4af37] mt-2 mb-4"></div>
            <p className="text-[#5c0612] font-bold text-[8px] uppercase tracking-wider font-serif">We look forward to your presence!</p>
          </div>

          {/* Couple Image */}
          <div className="absolute -bottom-6 z-30 w-46 right-0">
            <img src="/valima couple.png" alt="Valima Couple" className="w-full h-auto object-contain drop-shadow-lg" />
          </div>

          <style>{`
            @keyframes twinkle { 0% { transform: translateY(0) rotate(0deg) scale(0.8); opacity: 0; } 50% { opacity: 1; transform: scale(1.2); } 100% { transform: translateY(100vh) rotate(360deg) scale(0.8); opacity: 0; } }
            .animate-twinkle { animation: twinkle linear infinite; }
            @keyframes pulse-firework { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } }
            .animate-pulse-firework { animation: pulse-firework 2s ease-in-out infinite; }
          `}</style>
        </div>
      </section>
    </>
  );
}

export default Slide5Valima;