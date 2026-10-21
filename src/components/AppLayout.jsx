import Watermark from './Watermark';

const AppLayout = ({ children }) => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-900 overflow-hidden">
      
      <div className="relative w-full max-w-105 h-full max-h-[212.5rem] aspect-square bg-white shadow-2xl overflow-hidden flex flex-col justify-center items-center">
        
        <Watermark />
        
        <main className="w-full h-full relative overflow-hidden">
          {children}
        </main>

      </div>
      
    </div>
  );
};

export default AppLayout;