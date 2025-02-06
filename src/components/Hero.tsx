
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#F6F7F9] to-[#E2E8F0] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent" />
      
      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="Kinesis"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Crédito simple y <br />
              líneas de crédito
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              En Kinesis te ofrecemos soluciones financieras flexibles diseñadas
              para el crecimiento y éxito de su negocio
            </p>
            <button className="group flex items-center gap-2 px-6 py-3 bg-gray-200/80 hover:bg-gray-200 rounded-full transition-all duration-300">
              Contáctanos
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/3]">
              <img
                src="/placeholder.svg"
                alt="Tarjetas de crédito"
                className="absolute w-2/3 h-auto transform rotate-12 translate-x-12 translate-y-8 shadow-2xl rounded-2xl transition-transform duration-500 hover:rotate-6"
              />
              <img
                src="/placeholder.svg"
                alt="Tarjetas de crédito"
                className="absolute w-2/3 h-auto transform -rotate-6 shadow-2xl rounded-2xl transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
