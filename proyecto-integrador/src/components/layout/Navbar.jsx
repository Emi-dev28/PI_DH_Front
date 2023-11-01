// import { ThemeToggle } from "@/components/theme/theme-toogle";
import logo from "/img/logo/logo-letters.svg";
import icon from "/img/logo/logo-favicon.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../custom-ui/PrimaryButton";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { UserSessionMenu } from "./UserSessionMenu";

export const Navbar = () => {

  const { status, name } = useAuthStore()
  const size = useWindowSize();

  //* Extraer inicial
  // const firstLetter = name.substring(0, 1)


  return (
    <nav className="bg-gradient-to-r from-navColorDark to-navColor 
    flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg"
    >

      <div className="flex items-center">
        <Link to="/">
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h-10 h w-auto object-contain mr-2"
          />
        </Link>
      </div>

      {
        (status === "authenticated")
        
          // <UserSessionMenu name={name} firstLetter={firstLetter} /> //TODO: Aplicar cuando estén los datos
          ? <UserSessionMenu />

          : (
            <div className="flex items-center gap-4">
              {/* <div className="mr-4">
                    <ThemeToggle />
                  </div> */}
              <Link to={"/auth/register"}>
                <PrimaryButton>Crear cuenta</PrimaryButton>
              </Link>

              <Link to={"/auth/login"}>
                <PrimaryButton>Iniciar sesión</PrimaryButton>
              </Link>
            </div>
          )
      }
    </nav>
  );
};
