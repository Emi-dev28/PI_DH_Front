import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../custom-ui/PrimaryButton';

const Business = () => {
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img src="/img/empresa1.webp" alt="Top-bns-img" className="w-full" />
        <h1 className="py-8 font-bold text-red-500 text-3xl">
          ¿TENES UNA EMPRESA?, MIRA!
        </h1>
      </div>

      <div className="ml-8 py-12">
        <p className="text-2xl font-bold">
          ALQUILA LA MEJOR TECNOLOGIA
          <br />
          PARA TU NEGOCIO
        </p>
      </div>

      <div className="flex justify-end items-end">
        <div className="flex border-none pl-24 py-8 w-[100%] justify-end items-end">
          <img
            src="/img/empresa2.webp"
            alt="bsn-img"
            className="border-0 rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="flex justify-end items-end mr-8 py-12 text-end">
        <p className="text-2xl font-bold">
          SERVICIOS COMPLETOS <br />A TU MEDIDA
        </p>
      </div>

      <div className="flex justify-start items-start">
        <div className="flex border-none pr-24 py-8 w-[100%] justify-end items-end">
          <img
            src="/img/empresa3.webp"
            alt="bsn-img"
            className="border-0 rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="ml-8 py-12">
        <p className="text-2xl font-bold">OPTIMIZACION ESCALABLE</p>
      </div>

      <div className="flex justify-end items-end">
        <div className="flex border-none pl-24 py-8 w-[100%] justify-end items-end">
          <img
            src="/img/empresa4.webp"
            alt="bsn-img"
            className="border-0 rounded-lg w-full h-auto"
          />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="py-8 font-bold text-red-500 text-3xl">¿TE INTERESA?</h1>
      </div>

      <div className="flex justify-center items-center py-8">
        <Link to={'/contact'}>
          <PrimaryButton>Contáctanos</PrimaryButton>
        </Link>
      </div>
    </>
  );
};

export default Business;
