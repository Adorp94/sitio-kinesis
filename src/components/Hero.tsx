import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[85vh] bg-[#f5f4f6] px-6 sm:px-8 lg:px-12 flex items-center mt-20">
      <div className="max-w-[1150px] mx-auto w-full">
        {/* Hero container con forma redondeada y gradiente */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#647E9C]">
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
                    className="flex items-center gap-2 px-4 py-[4px] bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300"
                  >
                    <span className="text-white font-manrope">Contáctanos</span>
                    <div className="bg-[#E4A853] rounded-lg p-[4px]">
                      <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="absolute right-14 top-[60%]">
                <img
                  src="/tarjetas.avif"
                  alt="Tarjetas de crédito"
                  className="w-[380px] h-auto transform -rotate-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;