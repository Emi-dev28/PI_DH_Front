// import { ThemeToggle } from "@/components/theme/theme-toogle";
import logo from "/img/logo/logo-letters.svg";
import icon from "/img/logo/logo-favicon.svg";
import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { useWindowSize } from "@uidotdev/usehooks";

export const Navbar = () => {
  const location = useLocation();

  const size = useWindowSize();
  const isAdminPages = ["/admin", "/admin/listado-productos"].includes(
    location.pathname
  );

  return (
    <nav className="bg-gradient-to-r from-navColorDark to-navColor flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg">
      {/* Logo y texto a la izquierda */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h-10 h w-auto object-contain mr-2"
          />
        </Link>
      </div>

      {/* Botones a la derecha */}
      {/* En "/admin" y "/listado-productos" no se ven estos botones:  */}
      {!isAdminPages && (
        <div className="flex items-center gap-4">
          {/* <div className="mr-4">
            <ThemeToggle />
          </div> */}
          <PrimaryButton>Crear cuenta</PrimaryButton>
          <PrimaryButton>Iniciar sesión</PrimaryButton>
        </div>
      )}
    </nav>
  );
};
