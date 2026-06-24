const Watermark = () => {
  return (
    // 'absolute' use kiya taake ye parent ke relative rahe
    // 'right-4 top-4' se ye top-right corner mein fix rahega
    <div className="absolute top-4 right-117 z-50 text-[#8B0000] font-serif font-bold text-sm md:text-base opacity-70 select-none pointer-events-none tracking-widest">
      #ZA
    </div>
  );
};

export default Watermark;