import { useState } from 'react';

const cardFontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap');
`;

const CornerFirework = ({ className, style }) => (
  <div className={`absolute w-32 h-32 z-30 pointer-events-none ${className}`} style={style}>
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#d4af37] origin-left rounded-full"
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
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 5,
      size: 10 + Math.random() * 8
    }));
  });

  return (
    <>
      <style>{cardFontStyles}</style>
      <div 
        className="w-full min-h-screen flex items-center justify-center p-6 border-double border-[#d4af37] overflow-hidden relative box-border bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/valima bg.jpeg')",
          borderWidth: '12px' // Direct style use ki hai taake Tailwind warning na de
        }}
      >
        {/* Decorative Elements */}
        <img src="/valima car.png" alt="Car Left" className="absolute left-6 bottom-6 w-50 z-40" />
        <img src="/valima car.png" alt="Car Right" className="absolute right-6 bottom-6 w-50 z-40 transform scale-x-[-1]" />

        <CornerFirework className="top-5 left-5 animate-pulse-firework" />
        <CornerFirework className="top-5 right-5 animate-pulse-firework" style={{ animationDelay: '0.5s' }} />
        <CornerFirework className="bottom-5 left-5 animate-pulse-firework" style={{ animationDelay: '1s' }} />
        <CornerFirework className="bottom-5 right-5 animate-pulse-firework" style={{ animationDelay: '1.5s' }} />

        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none z-25">
          {stars.map((s) => (
            <div key={s.id} className="absolute text-[#d4af37] animate-twinkle" 
                 style={{ left: `${s.left}%`, fontSize: `${s.size}px`, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s`, top: '-10%', textShadow: '0 0 8px #fff, 0 0 15px #d4af37' }}>
              ★
            </div>
          ))}
        </div>

        {/* Main Layout */}
        <div className="flex flex-wrap items-center justify-center w-full max-w-6xl gap-8 relative z-20">
          
          {/* Text Card */}
          <div className="w-full max-w-md bg-white/95 backdrop-blur-md py-12 px-6 rounded-3xl shadow-2xl flex flex-col items-center text-center border-2 border-[#d4af37]/50">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥂</span>
              <h2 className="text-[#5c0612] font-semibold text-4xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Reception</h2>
            </div>

            <p className="text-[#5c0612] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 font-serif">You are invited to the reception of</p>

            <div className="mb-8 w-full leading-tight">
              <p className="text-3xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>Kinza Kanwal</p>
              <p className="text-xl font-bold text-[#d4af37] py-2">&</p>
              <p className="text-3xl font-bold" style={{ fontFamily: "'Dancing Script', cursive" }}>Umar Farooq</p>
            </div>

            <div className="space-y-4 w-full text-xs text-[#5c0612] font-semibold">
              <p>📅 {data?.valimaDate || "Saturday, Nov 28, 2026"}</p>
              <p>⏰ 07:00 PM onwards</p>
              <p className="leading-tight px-4">📍 {data?.valimaVenue || "Garrison Marriage Hall, Gujranwala"}</p>
            </div>
            
            <div className="w-16 h-px bg-[#d4af37] my-8"></div>
            <p className="text-[#5c0612] font-bold text-[10px] uppercase tracking-widest font-serif">We look forward to your presence!</p>
          </div>

          {/* Couple Image */}
          <div className="w-full max-w-sm mr-8">
            <img src="/valima couple.png" alt="Valima Couple" className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>

        <style>{`
          @keyframes twinkle { 0% { transform: translateY(0) rotate(0deg) scale(0.8); opacity: 0; } 50% { opacity: 1; transform: scale(1.2); } 100% { transform: translateY(100vh) rotate(360deg) scale(0.8); opacity: 0; } }
          .animate-twinkle { animation: twinkle linear infinite; }
          @keyframes pulse-firework { 0%, 100% { transform: scale(0.8); opacity: 0.5; } 50% { transform: scale(1.1); opacity: 1; } }
          .animate-pulse-firework { animation: pulse-firework 2s ease-in-out infinite; }
        `}</style>
      </div>
    </>
  );
}

export default Slide5Valima;