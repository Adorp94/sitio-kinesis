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
    <div className="relative min-h-screen bg-[#f5f4f6] px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Container con forma redondeada y gradiente */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#647E9C]">
          <div ref={heroRef} className="relative px-8 md:px-12 lg:px-16 pt-32 pb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
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
                  <button className="group flex items-center gap-2 px-6 py-3 bg-[rgb(255,255,255,0.2)] backdrop-blur-sm hover:bg-[rgb(255,255,255,0.3)] rounded-full transition-all duration-300">
                    <span className="text-white font-manrope">Contáctanos</span>
                    <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <img
                    src="/tarjetas.avif"
                    alt="Tarjetas de crédito"
                    className="w-2/3 h-auto"
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