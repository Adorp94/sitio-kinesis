import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      className={`fixed w-full z-50 transition-all duration-500 px-6 sm:px-8 lg:px-12 py-2 ${
        isScrolled 
          ? "top-4" 
          : "top-0 bg-transparent"
      }`}
    >
      <div className={`max-w-[1100px] mx-auto ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg rounded-full px-2 py-2" 
          : ""
      }`}>
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center">
            <img
              src="/kinesis-logo-main.avif"
              alt="Kinesis Logo"
              className="h-6 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/legal">Legal</NavLink>
            <Link
              to="/contacto"
              className="px-5 py-1.5 rounded-full bg-black text-white hover:bg-black/90 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navbar;