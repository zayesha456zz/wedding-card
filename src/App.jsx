import { useState, useEffect, useRef } from 'react';
import MusicButton from './components/MusicButton';
import AppLayout from './components/AppLayout'; 
import Watermark from './components/Watermark'; // Import added
import Slide1Cover from './pages/Slide1Cover';
import Slide2Couple from './pages/Slide2Couple';
import SlideTransition from './pages/SlideTransition';
import Slide3Mehendi from './pages/Slide3Mehendi';
import Slide4Barat from './pages/Slide4Barat';
import Slide5Valima from './pages/Slide5Valima';
import weddingMusic from './assets/music.mp3';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [weddingData, setWeddingData] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/invite')
      .then((res) => res.json())
      .then((data) => { if (data) setWeddingData(data); })
      .catch(() => console.log("Data connection issue"));
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(weddingMusic);
      audioRef.current.loop = true;
    }
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play().catch(e => console.log(e)); }
    setIsPlaying(!isPlaying);
  };

  return (
    <AppLayout>
      <div className="flex justify-center w-full min-h-screen overflow-hidden bg-[#faf6ee]">
        
        {/* Global Watermark Component */}
        <Watermark />

        {/* Scroll Container */}
        <div 
          className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar relative shadow-2xl"
          style={{ maxWidth: '1200px' }}
        >
          <MusicButton isPlaying={isPlaying} toggleMusic={toggleMusic} />
          
          <section className="w-full h-screen snap-start shrink-0">
            <Slide1Cover data={weddingData} onOpen={() => { setHasStarted(true); toggleMusic(); }} />
          </section>

          {hasStarted && (
            <>
              <section className="w-full h-screen snap-start shrink-0"><Slide2Couple data={weddingData} /></section>
              <section className="w-full h-screen snap-start shrink-0"><SlideTransition /></section>
              <section className="w-full h-screen snap-start shrink-0"><Slide3Mehendi data={weddingData} /></section>
              <section className="w-full h-screen snap-start shrink-0"><Slide4Barat data={weddingData} /></section>
              <section className="w-full h-screen snap-start shrink-0"><Slide5Valima data={weddingData} /></section>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default App;