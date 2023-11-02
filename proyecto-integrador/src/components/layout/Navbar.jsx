import React, { useState } from 'react';
import logo from "/img/logo/logo-letters.svg";
import icon from "/img/logo/logo-favicon.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../custom-ui/PrimaryButton";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { UserSessionMenu } from "./UserSessionMenu";
import {FaAlignJustify} from "react-icons/fa";


export const Navbar = () => {
  const { status, name } = useAuthStore();
  const size = useWindowSize();
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

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

      {/* Inputs para seleccionar categorías y búsqueda */}
      <div className="hidden md:flex items-center"> {/* Oculta en dispositivos pequeños */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="mr-2 p-2 border rounded">
          <option value="" disabled selected>Seleccionar Categoría</option>
          <option value="1">Categoría 1</option>
          <option value="2">Categoría 2</option>
          <option value="3">Categoría 3</option>
        </select>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 pl-8 border rounded"
          />
          
        </div>
      </div>

      {status === "authenticated" ? (
        <UserSessionMenu />
      ) : (
        <div className="hidden md:flex items-center gap-5"> {/* Oculta en dispositivos pequeños */}
          <Link to={"/auth/register"}>
            <PrimaryButton>Crear cuenta</PrimaryButton>
          </Link>
          <Link to={"/auth/login"}>
            <PrimaryButton>Iniciar sesión</PrimaryButton>
          </Link>
        </div>
      )}

      {/* Menú hamburguesa para dispositivos pequeños */}
      <div className="md:hidden">
      <FaAlignJustify/>
        {/* Agrega aquí tu código para el menú hamburguesa */}
      </div>
    </nav>
  );
};
