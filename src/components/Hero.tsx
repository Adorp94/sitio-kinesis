import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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
    <div className="relative w-full bg-[#f5f4f6] px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero container con forma redondeada y gradiente */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#647E9C]">
          <div ref={heroRef} className="relative px-8 md:px-12 xl:px-16 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1200px] mx-auto">
              <div className="flex-1 space-y-8">
                <div className="flex items-center">
                  <img
                    src="/kinesis-logo.avif"
                    alt="Kinesis"
                    className="h-14 w-auto"
                  />
                </div>
                <h1 className="font-manrope text-5xl md:text-7xl font-bold leading-tight text-white">
                  Crédito simple y <br />
                  líneas de crédito
                </h1>
                <p className="font-manrope text-xl text-white/90 max-w-2xl">
                  En Kinesis te ofrecemos soluciones financieras flexibles diseñadas
                  para el crecimiento y éxito de su negocio
                </p>
                <div className="flex items-center">
                  <button 
                    className="group flex items-center gap-2 px-6 py-3 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full transition-all duration-300"
                  >
                    <span className="text-white font-manrope">Contáctanos</span>
                    <div className="bg-[#E4A853] rounded-full p-2">
                      <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative w-full flex items-center justify-center md:justify-end">
                  <img
                    src="/tarjetas.avif"
                    alt="Tarjetas de crédito"
                    className="w-2/3 md:w-4/5 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;