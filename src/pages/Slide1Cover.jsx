import { useState, useEffect } from 'react';

function Slide1Cover({ onOpen }) {
  const [isOpened, setIsOpened] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);
  const [petals, setPetals] = useState([]);

  const handleOpen = () => {
    const newPetals = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      size: 8 + Math.random() * 10
    }));
    setPetals(newPetals);
    setIsOpened(true);
    if (onOpen) onOpen();
  };

  useEffect(() => {
    let timer;
    if (isOpened) {
      timer = setTimeout(() => {
        setShowNextPage(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isOpened]);

  return (
    // Updated: h-dvh (Standard class)
    <div className="w-full h-dvh bg-[#faf6ee] flex items-center justify-center overflow-hidden">
      
      {/* Updated: max-w-112.5 aur aspect-9/16 (Standard classes) */}
      <div className="relative w-full max-w-112.5 aspect-9/16 bg-[#faf6ee] shadow-2xl overflow-hidden">
        
        {showNextPage && (
          <div 
            className="absolute inset-0 z-0 transition-opacity duration-1000 bg-cover bg-center"
            style={{ backgroundImage: "url('/AI Indian MahalAI Indian Mahal.jfif')" }}
          />
        )}

        {showNextPage && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-black/10 animate-fadeIn px-4">
            
            <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
              {petals.map((p) => (
                <div
                  key={p.id}
                  className="absolute rounded-full opacity-50 animate-fall"
                  style={{
                    background: 'linear-gradient(to bottom right, #fecdd3, #fbcfe8, #fca5a5)',
                    left: `${p.left}%`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    top: '-5%'
                  }}
                />
              ))}
            </div>

            <div className="p-6 md:p-10 border border-[#dfb15b]/40 bg-white/90 backdrop-blur-sm shadow-2xl relative z-30 w-[90%] rounded-3xl">
              <p className="text-[#b8862d] tracking-[0.4em] text-[8px] uppercase mb-4 font-sans">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
              <h2 className="text-[9px] uppercase tracking-[0.5em] text-neutral-600 mb-8 font-sans">The Wedding Celebration Of</h2>
              
              <div className="flex flex-row items-center justify-center gap-4 relative z-40">
                <div className="flex flex-col items-center flex-1">
                  <div className="w-20 h-28 border-[3px] border-[#dfb15b] p-1 bg-neutral-200 rounded-t-full">
                    <img src="/bride.jpeg" alt="Kinza" className="w-full h-full object-cover rounded-t-full" />
                  </div>
                  <h1 className="mt-3 text-base font-bold text-[#8b5c1a]">Kinza</h1>
                </div>
                <div className="text-xl font-bold text-[#dfb15b] pb-8">&</div>
                <div className="flex flex-col items-center flex-1">
                  <div className="w-20 h-28 border-[3px] border-[#dfb15b] p-1 bg-neutral-200 rounded-t-full">
                    <img src="/groom.jpeg" alt="Umar" className="w-full h-full object-cover rounded-t-full" />
                  </div>
                  <h1 className="mt-3 text-base font-bold text-[#8b5c1a]">Umar</h1>
                </div>
              </div>

              <div className="w-32 h-px bg-[#dfb15b]/40 mx-auto mt-6 mb-6" />
              <p className="text-xs text-neutral-700 font-serif italic leading-relaxed tracking-wide px-2">
                Kindly honor us with your presence and sweet blessings.
              </p>
            </div>
          </div>
        )}

        {!showNextPage && (
          <div className="absolute inset-0 z-40 flex items-center justify-center w-full h-full overflow-hidden">
            <div className="shrink-0 w-1/2 h-full bg-no-repeat transition-transform duration-2000 ease-in-out" 
                 style={{ 
                   backgroundImage: "url('/door image.png')", 
                   backgroundSize: '200% 100%', 
                   backgroundPosition: '0% 0%',
                   transform: isOpened ? 'translateX(-100%)' : 'translateX(0)' 
                 }} />
            <div className="shrink-0 w-1/2 h-full bg-no-repeat transition-transform duration-2000 ease-in-out" 
                 style={{ 
                   backgroundImage: "url('/door image.png')", 
                   backgroundSize: '200% 100%', 
                   backgroundPosition: '100% 0%',
                   transform: isOpened ? 'translateX(100%)' : 'translateX(0)' 
                 }} />
            
            {!isOpened && (
              <button onClick={handleOpen} className="absolute z-50 px-10 py-4 bg-[#dfb15b] text-white font-bold tracking-[0.2em] uppercase shadow-xl hover:bg-[#b8862d] transition-all rounded-full bottom-[30%]">
                OPEN
              </button>
            )}
          </div>
        )}

        <style>{`
          @keyframes fall { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 15% { opacity: 1; } 100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .animate-fall { position: absolute; animation: fall linear infinite; }
          .animate-fadeIn { animation: fadeIn 1.5s ease-in forwards; }
        `}</style>
      </div>
    </div>
  );
}

export default Slide1Cover;