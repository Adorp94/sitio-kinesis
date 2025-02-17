import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-[2rem] px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/kinesis-logo.avif"
                alt="Kinesis Logo"
                className="h-8 w-auto"
              />
            </Link>
            <div className="space-y-2 text-gray-400">
              <p>Kinesis Catalítica S.A. de C.V. SOFOM, E.N.R.</p>
              <p>Dirección: Av Anillo Periférico 461 Int. 12, Plaza Guadalupe, 45030 Zapopan, Jal.</p>
              <p>Horario: Lunes a Viernes de 8:30 am a 5:30 pm.</p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menú</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://kinesis-docs.s3.us-east-1.amazonaws.com/terminos_y_condiciones.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a 
                  href="https://kinesis-docs.s3.us-east-1.amazonaws.com/buro_de_entidades_financieras.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Buró de Entidades Financieras
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+523331136103" 
                  className="hover:text-white transition-colors"
                >
                  Teléfono: +52 33 3113 6103
                </a>
              </li>
              <li>
                <a 
                  href="mailto:atencion@kinesiscatalitica.com"
                  className="hover:text-white transition-colors"
                >
                  Email: atencion@kinesiscatalitica.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© Kinesis {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;