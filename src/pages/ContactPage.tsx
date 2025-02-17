import { MapPin, Phone, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <main className="relative">
      {/* Background wrapper */}
      <div className="absolute inset-0 w-full h-full bg-[#f5f4f6] min-h-screen" />
      
      {/* Content */}
      <div className="relative">
        <Navbar />
        
        {/* Main content with proper spacing */}
        <div className="w-full bg-[#f5f4f6] px-6 sm:px-8 lg:px-12 pt-32 pb-24">
          <div className="max-w-[1150px] mx-auto w-full">
            {/* Header Section */}
            <div className="text-center space-y-6 mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-sm font-medium">
                Kinesis
              </span>
              <h1 className="text-[60px] font-bold leading-[1.1] mx-auto max-w-[900px]">
                ¡Ponte en contacto con nosotros hoy!
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Resuelve tus dudas sobre los productos de Kinesis
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Phone Card */}
              <Card className="p-8 bg-white rounded-[1.5rem] shadow-sm border-0 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-50">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Llámanos</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Hablemos - no hay nada como hablar con otra persona.
                  </p>
                  <p className="text-xl font-medium">
                    +52 33 3113 6103
                  </p>
                </div>
              </Card>

              {/* Address Card */}
              <Card className="p-8 bg-white rounded-[1.5rem] shadow-sm border-0 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-gray-50">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Domicilio</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Estaremos encantados de darle la bienvenida en nuestras oficinas.
                  </p>
                  <p className="text-xl font-medium">
                    Av Anillo Periférico 461 Int. 12, Zapopan, Jal.
                  </p>
                </div>
              </Card>
            </div>

            {/* Email Card */}
            <Card className="p-8 bg-white rounded-[1.5rem] shadow-sm border-0 hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-50">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    No dudes en ponerte en contacto con nuestro equipo
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Envíanos un correo a{" "}
                  <a 
                    href="mailto:atencionclientes@kinesiscatalitica.com" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    atencionclientes@kinesiscatalitica.com
                  </a>
                  {" "}y te ayudaremos con tus dudas.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

export default ContactPage