import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={heroRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center"
        style={{ transform: "translateY(0)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kinesis Catalítica
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Transformando el futuro de la industria química
          </p>
          <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Descubre más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;