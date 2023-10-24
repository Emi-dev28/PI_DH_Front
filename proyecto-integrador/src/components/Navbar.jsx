
import React from 'react';
import logo from '/img/wallpaper_1546x261.png'

export const Navbar = () => {
  return (

    <nav className="bg-white flex items-center justify-between sticky w-full z-10 top-0 p-4 mb-6">
      {/* Logo y texto a la izquierda */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 h w-auto object-contain mr-2" />
      </div>

      {/* Botones a la derecha */}
      <div className="flex items-center">
        <button className="bg-transparent text-black px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">Crear cuenta</button>
        <button className="bg-transparent text-black px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">Iniciar sesión</button>
      </div>
    </nav>


  );
};


