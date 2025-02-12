
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { BanknoteIcon, CreditCard } from "lucide-react";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f4f6] overscroll-none">
      <Navbar />
      <Hero />
      
      {/* Productos Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Soluciones financieras adaptadas a sus necesidades
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white rounded-2xl">
              <CardContent className="space-y-4">
                <BanknoteIcon className="h-12 w-12 text-gray-800" />
                <h3 className="text-2xl font-bold">Crédito Simple</h3>
                <p className="text-gray-600">
                  Financiamiento directo con términos claros y transparentes. Para ti y tu negocio.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-white rounded-2xl">
              <CardContent className="space-y-4">
                <CreditCard className="h-12 w-12 text-gray-800" />
                <h3 className="text-2xl font-bold">Líneas de Crédito</h3>
                <p className="text-gray-600">
                  Financiamiento flexible que se adapta a las necesidades de su negocio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-white rounded-2xl">
            <CardContent className="space-y-8">
              <h2 className="text-3xl font-bold">Información Legal</h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Denominación Social</h3>
                <p>Kinesis Catalítica S.A. de C.V. SOFOM, E.N.R.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Aviso Legal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kinesis Catalítica S.A. de C.V. SOFOM, E.N.R., es una Sociedad Financiera de Objeto Múltiple, Entidad No Regulada, que para su constitución y operación con tal carácter no requiere autorización de la Secretaría de Hacienda y Crédito Público y está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares del Crédito.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Unidad Especializada de Atención</h3>
                <div className="space-y-2">
                  <p>Correo: atencion@kinesiscatalitica.com</p>
                  <p>Teléfono: +52 33 3113 6103</p>
                  <p>Horario: Lunes a Viernes de 9:00 a 18:00 horas</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">CONDUSEF</h3>
                <div className="space-y-2">
                  <p>Teléfono: 55 5340 0999</p>
                  <p>Página web: www.condusef.gob.mx</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            <img
              src="/lovable-uploads/feb73565-c4dd-474f-b211-b5aafc97a0aa.png"
              alt="Buro de Crédito"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="/lovable-uploads/feb73565-c4dd-474f-b211-b5aafc97a0aa.png"
              alt="Condusef"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="/lovable-uploads/feb73565-c4dd-474f-b211-b5aafc97a0aa.png"
              alt="CNBV"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Large Text Section */}
      <section className="py-24 px-4 bg-[#F6F7F9]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Impulsamos tus proyectos con créditos simples y líneas de crédito diseñadas para cumplir tus metas de hoy y construir tu futuro.
          </h2>
        </div>
      </section>

      <Footer />
      </div>
  );
};

export default Index;
