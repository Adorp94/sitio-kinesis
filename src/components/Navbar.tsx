import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            KINESIS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/90 backdrop-blur-md shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
              Inicio
            </MobileNavLink>
            <MobileNavLink to="/nosotros" onClick={() => setIsOpen(false)}>
              Nosotros
            </MobileNavLink>
            <MobileNavLink to="/servicios" onClick={() => setIsOpen(false)}>
              Servicios
            </MobileNavLink>
            <MobileNavLink to="/contacto" onClick={() => setIsOpen(false)}>
              Contacto
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;