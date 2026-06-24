import { useState, useRef, useEffect } from 'react';

function Slide4Barat({ data }) {
  const [petals] = useState(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 5 + Math.random() * 10 
    }));
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    const width = parent.offsetWidth;
    const height = 32; 
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    ctx.fillStyle = '#800000';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px sans-serif'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SWIPE TO REVEAL DATE', width / 2, height / 2);
  }, []);

  const handleScratch = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 15 * dpr, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <section className="w-full h-dvh flex items-center justify-center bg-[#800000]/10 overflow-hidden">
      <div 
        className="relative w-full max-w-100 aspect-9/16 shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-center bg-no-repeat bg-[#faf6ee]"
        style={{ 
          backgroundImage: "url('/barat bg.jpeg')",
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {petals.map((p) => (
            <div
              key={p.id}
              className="petal-animation absolute bg-[#FF0000] rounded-full opacity-90"
              style={{
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                top: '-10%'
              }}
            />
          ))}
        </div>

        {/* Barat couple image ko extreme left corner par shift kiya */}
        <div className="absolute bottom-0 -left-9 z-60 w-54 max-w-80 pointer-events-none">
          <img src="/barat couple.png" alt="Barat Couple" className="w-full h-auto object-contain" />
        </div>
        
        <div className="absolute bottom-0 right-0 z-55 w-45 max-w-60 pointer-events-none brightness-75">
          <img src="/bride parent.png" alt="Bride Parents" className="w-full h-auto object-contain" />
        </div>

        <div className="relative z-40 w-[85%] min-h-90 p-6 flex flex-col items-center justify-center">
          <img src="/barat blok.png" alt="Baraat Background Scroll" className="absolute inset-0 w-full h-full object-fill opacity-95 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 py-4 w-full">
            <h1 className="text-[#800000] font-bold text-3xl leading-none" style={{ fontFamily: "'Great Vibes', cursive" }}>Baraat</h1>
            <p className="text-[#800000] text-[8px] uppercase tracking-[0.2em] mb-3">The Wedding Day</p>
            
            <div className="mb-3 space-y-0.5">
              <p className="text-[#800000] font-serif italic text-[9px]">Mr & Mrs Abdul Jabbar</p>
              <p className="text-[#800000] text-[8px] italic font-serif">cordially invite you to the Wedding Ceremony of their beloved daughter</p>
              <div className="text-[#800000] flex flex-col pt-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
                <p className="text-2xl font-bold leading-none">Kinza Kanwal</p>
                <p className="text-sm my-0.5">&</p>
                <p className="text-2xl font-bold leading-none">Umar Farooq</p>
              </div>
            </div>
            
            <div className="w-16 h-px bg-[#800000] my-2"></div>

            <div className="relative w-2/3 mx-auto h-8 flex items-center justify-center border border-[#800000] rounded-md overflow-hidden bg-[#f5e6d3]">
               <div className="text-[#800000] text-center px-2 w-full">
                  <p className="text-[6px] uppercase tracking-widest font-bold">📅 DATE</p>
                  <p className="text-[10px] font-serif font-bold whitespace-nowrap">{data?.baratDate || "November 26, 2026"}</p>
               </div>
               <canvas 
                 ref={canvasRef}
                 className="absolute inset-0 z-50 cursor-pointer"
                 style={{ touchAction: 'none' }}
                 onMouseMove={(e) => e.buttons === 1 && handleScratch(e)}
                 onTouchMove={handleScratch}
               />
            </div>
            
            <div className="mt-3 flex flex-col items-center">
              <p className="text-[#800000] text-[6px] uppercase tracking-widest font-bold">📍 VENUE</p>
              <p className="text-[#800000] text-[9px] font-medium leading-tight px-2">Royal Palm Marquee, Gujranwala</p>
              <p className="text-[#800000] text-[8px] font-bold uppercase mt-0.5">Arrival | 7:00 P.M.</p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fall-animation { 
            0% { transform: translateY(0) rotate(0deg); opacity: 0; } 
            10% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; } 
          }
          .petal-animation { animation: fall-animation linear infinite; }
        `}</style>
      </div>
    </section>
  );
}

export default Slide4Barat;