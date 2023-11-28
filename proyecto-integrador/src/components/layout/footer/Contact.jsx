import React, { useEffect } from 'react';
import PrimaryButton from "../../custom-ui/PrimaryButton";

const Contact = () => {

  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center py-2 items-center  bg-gray-100 ">
      {/* Contenedor izquierdo con formulario */}
      <div className="flex-1 pl-12 pr-2">
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl flex justify-center items-center font-bold text-red-500 mb-4">CONTACTANOS</h2>
          <div className="mb-4 text-center">Si tiene más preguntas, incluidas oportunidades de asociación, envíe un correo electrónico a hello@dhtechnology.com o comuníquese mediante nuestro formulario de contacto.</div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md py-2 px-3 shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-white"
                placeholder="Tu nombre"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md py-2 px-3 shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-white"
                placeholder="ejemplo@email.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              ¿Cómo podemos ayudarte?
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border rounded-md py-2 px-3 shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-white"
              placeholder="Quiero saber..."
            ></textarea>
          </div>
          <div className='flex justify-center items-center'>
          <PrimaryButton type="submit">
            Enviar
          </PrimaryButton>
          </div>
        </form>
      </div>


      {/* Contenedor derecho con imagen */}
      <div className="flex-1 bottom-0 h-auto">
        <img
          src="/img/img-contact.webp"
          alt="bg-contact"
          className="object-cover w-full h-full rounded"
        />
      </div>
    </div>
  )
}

export default Contact