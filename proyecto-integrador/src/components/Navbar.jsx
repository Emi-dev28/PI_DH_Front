
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (

    <nav className="bg-gradient-to-r from-navColorDark to-navColor flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg">
      {/* Logo y texto a la izquierda */}
      <div className="flex items-center">
      <Link to="/">
        <img src="/public/img/default_transparent_1000x1000.png" alt="Logo" className="h-40 h w-auto object-contain mr-2" />
      </Link>
      </div>

      {/* Botones a la derecha */}
      <div className="flex items-center">
        <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">Crear cuenta</button>
        <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">Iniciar sesión</button>
      </div>
    </nav>


  );
};


