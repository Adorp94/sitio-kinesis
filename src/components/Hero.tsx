import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] bg-[#f5f4f6] px-6 sm:px-8 lg:px-12 flex items-center mt-20">
      <div className="max-w-[1150px] mx-auto w-full">
        {/* Hero container con forma redondeada y gradiente */}
        <div className="relative rounded-[2rem] overflow-hidden hero-gradient">
          <div className="relative px-8 md:px-14 py-16 md:py-14">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex-1 space-y-8">
                <div>
                  <img
                    src="/kinesis-logo.avif"
                    alt="Kinesis"
                    className="w-[228px] h-[114px] object-contain"
                  />
                </div>
                <h1 className="font-manrope text-[60px] font-bold leading-[1.1] text-white">
                  Crédito simple y<br />
                  líneas de crédito
                </h1>
                <p className="font-manrope text-xl text-white/90 max-w-xl">
                  En Kinesis te ofrecemos soluciones financieras flexibles
                  <br />
                  diseñadas para el crecimiento y éxito de su negocio
                </p>
                <div>
                  <button 
                    className="group inline-flex items-center gap-2 bg-white/20 rounded-[1rem] transition-all duration-300"
                  >
                    <span className="text-white font-manrope px-6 py-3">Contáctanos</span>
                    <div className="bg-[#E4A853] rounded-[1rem] p-3">
                      <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Contenedor de tarjetas con posición absoluta */}
          <div className="absolute bottom-0 right-0 pr-14 pb-8">
            <img
              src="/tarjetas.avif"
              alt="Tarjetas de crédito"
              className="w-[380px] h-auto transform -rotate-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;