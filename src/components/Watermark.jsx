const Watermark = () => {
  return (
    // 'absolute' use kiya taake ye card ke andar rahe, screen se bahar na bhage
    // 'top-4 right-4' se ye mobile screen par top-right corner mein fix rahega
    <div className="absolute top-5 right-170 z-50 text-[#8B0000] font-serif font-bold text-sm md:text-base opacity-70 select-none pointer-events-none tracking-widest">
      #ZA
    </div>
  );
};

export default Watermark;