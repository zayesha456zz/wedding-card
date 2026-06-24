import { useState, useRef, useEffect } from 'react';

function Slide4Barat({ data }) {
  const [petals] = useState(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 10 + Math.random() * 15
    }));
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    const width = parent.offsetWidth;
    const height = 60; 
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    ctx.fillStyle = '#800000';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px sans-serif';
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
    ctx.arc(x, y, 20 * dpr, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden border-8 border-double border-[#800000]">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/barat bg.jpeg')" }}
      />

      {/* Petals color changed to Pure Red (#FF0000) */}
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

      <div className="absolute bottom-4 left-4 z-20 w-2/5 max-w-80 pointer-events-none">
        <img src="/barat couple.png" alt="Barat Couple" className="w-full h-auto object-contain" />
      </div>
      
      <div className="absolute bottom-0 right-0 z-20 w-1/3 max-w-72 pointer-events-none brightness-75">
        <img src="/bride parent.png" alt="Bride Parents" className="w-full h-auto object-contain" />
      </div>

      <div className="relative z-40 w-11/12 max-w-xl p-8 md:p-12 flex flex-col items-center">
        <img src="/barat blok.png" alt="Baraat Background Scroll" className="absolute inset-0 w-full h-full object-fill opacity-95" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-4 pb-6">
          <h1 className="text-[#800000] font-bold text-4xl md:text-5xl" style={{ fontFamily: "'Great Vibes', cursive" }}>Baraat</h1>
          <p className="text-[#800000] text-xs uppercase tracking-widest mb-4">The Wedding Day</p>
          
          <div className="mb-4">
            <p className="text-[#800000] font-serif italic text-sm">Mr & Mrs Abdul Jabbar</p>
            <div className="text-[#800000] flex flex-col space-y-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <p className="text-3xl font-bold">Kinza Kanwal</p>
              <p className="text-lg">&</p>
              <p className="text-3xl font-bold">Umar Farooq</p>
            </div>
          </div>
          
          <div className="w-24 h-px bg-[#800000] mb-6"></div>

          <div className="relative w-full h-16 flex items-center justify-center border-2 border-[#800000] rounded-lg overflow-hidden bg-[#f5e6d3]">
             <div className="text-[#800000] text-center px-4">
                <p className="text-[9px] uppercase tracking-widest font-bold">📅 DATE</p>
                <p className="text-sm font-serif font-bold">{data?.baratDate || "November 26, 2026"}</p>
             </div>
             <canvas 
               ref={canvasRef}
               className="absolute inset-0 z-50 cursor-pointer"
               style={{ touchAction: 'none' }}
               onMouseMove={(e) => e.buttons === 1 && handleScratch(e)}
               onTouchMove={handleScratch}
             />
          </div>
          
          <div className="mt-6 flex flex-col items-center space-y-1">
            <p className="text-[#800000] text-[10px] uppercase tracking-widest font-bold">📍 VENUE</p>
            <p className="text-[#800000] text-sm font-medium leading-tight"> Royal Palm Marquee, Gujranwala</p>
            <p className="text-[#800000] text-xs font-bold pt-1 uppercase">Arrival | 7:00 P.M.</p>
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
    </section>
  );
}

export default Slide4Barat;