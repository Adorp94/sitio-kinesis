import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 h-20
        transition-all duration-500 ease-out
        ${isScrolled ? "py-4" : "bg-[#f5f4f6]"}
      `}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 flex justify-center">
          <div 
            className={`
              w-full max-w-[1150px] h-full flex justify-center
              transition-all duration-500 ease-out 
              ${isScrolled ? "scale-95" : "scale-100"}
            `}
          >
            <div 
              className={`
                flex items-center h-full transition-all duration-500 ease-out
                ${isScrolled 
                  ? "bg-[rgba(26,26,26,0.5)] backdrop-blur-md rounded-2xl px-3 gap-3 w-auto" 
                  : "w-full px-6 sm:px-8 lg:px-12 justify-between"}
              `}
            >
              <Link 
                to="/"
                className={`
                  bg-white flex items-center transition-all duration-500 ease-out
                  ${isScrolled ? "rounded-xl p-2" : "rounded-lg p-2"}
                `}
              >
                <img
                  src="/kinesis-logo-main.avif"
                  alt="Kinesis Logo"
                  className="h-6 w-auto"
                />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {!isScrolled && (
                  <div className="flex gap-8">
                    <NavLink to="/" isActive={location.pathname === "/"}>Inicio</NavLink>
                    <NavLink to="/productos" isActive={location.pathname === "/productos"}>Productos</NavLink>
                    <NavLink to="/legal" isActive={location.pathname === "/legal"}>Legal</NavLink>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {isScrolled && (
                    <div className="bg-black rounded-lg px-4 py-2">
                      <span className="text-white font-manrope text-sm">Inicio</span>
                    </div>
                  )}
                  <Link
                    to="/contacto"
                    className={`
                      px-4 py-2 rounded-lg transition-all duration-500
                      ${isScrolled 
                        ? "bg-white text-[#6c7178] hover:bg-gray-100" 
                        : "bg-black text-white hover:bg-black/90"}
                    `}
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
  <div className="relative">
    <Link
      to={to}
      className={`
        font-manrope text-sm transition-colors duration-300
        ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}
      `}
    >
      {children}
    </Link>
    {isActive && (
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1">
        <div className="w-1 h-1 rounded-full bg-current" />
      </div>
    )}
  </div>
);

export default Navbar;