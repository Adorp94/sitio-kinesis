
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { BanknoteIcon, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
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

      {/* Partners Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            <img
              src="/placeholder.svg"
              alt="Buro de Crédito"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="/placeholder.svg"
              alt="Condusef"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
            <img
              src="/placeholder.svg"
              alt="CNBV"
              className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
