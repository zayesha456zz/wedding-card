const Watermark = () => {
  return (
    // 'absolute' use kiya taake ye card ke andar rahe
    // 'right-4' ka matlab hai right edge se thora sa andar (Mobile ke liye perfect)
    <div className="absolute top-3 right-4 z-50 text-[#8B0000] font-serif font-bold text-sm md:text-base opacity-70 select-none pointer-events-none tracking-widest">
      #ZA
    </div>
  );
};

export default Watermark;