
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
    <div className="relative min-h-screen bg-[#F6F7F9] overflow-hidden rounded-3xl mx-4 my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <div className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="Kinesis"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crédito simple y <br />
              líneas de crédito
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              En Kinesis te ofrecemos soluciones financieras flexibles diseñadas
              para el crecimiento y éxito de su negocio
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-200/80 hover:bg-gray-200 rounded-full transition-colors">
              Contáctanos
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 relative">
            <img
              src="/placeholder.svg"
              alt="Tarjetas de crédito"
              className="w-full max-w-xl transform rotate-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
