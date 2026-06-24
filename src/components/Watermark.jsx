const Watermark = () => {
  return (
    // 'left-24' aur 'top-20' values ko aap apne layout ke hisaab se minor adjust kar sakte hain 
    // taake ye exactly us sky-blue area ke corner par baithe.
    <div className="fixed top-3 left-44 z-50 text-[#8B0000] font-serif font-bold text-base opacity-70 select-none pointer-events-none tracking-widest">
      #ZA
    </div>
  );
};

export default Watermark;