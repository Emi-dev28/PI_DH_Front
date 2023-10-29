import logo from "/logo-editor1.webp";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isAdminPages = ["/admin", "/admin/listado-productos"].includes(
    location.pathname
  );

  return (
    <nav className="bg-gradient-to-r from-navColorDark to-navColor flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg">
      {/* Logo y texto a la izquierda */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 h w-auto object-contain mr-2"
          />
        </Link>
      </div>

      {/* Botones a la derecha */}
      {/* En "/admin" y "/listado-productos" no se ven estos botones:  */}
      {!isAdminPages && (
        <div className="flex items-center">
          <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">
            Crear cuenta
          </button>
          <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">
            Iniciar sesión
          </button>
        </div>
      )}
    </nav>
  );
};
