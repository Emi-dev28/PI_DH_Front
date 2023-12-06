import { MdOutlineRocketLaunch, MdStarRate } from 'react-icons/md';

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800">
      <div className="flex animate-marquee items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          ¡¡GRANDES OFERTAS EN DH!!
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span>de descuento!
        </span>
        <img src="/christmas2.png" alt="" className='w-6 h-6 ml-2' />
        <span className="ml-2 text-lg italic text-yellow-400">
          ¡Feliz Navidad!
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento!
        </span>
        <img src="/christmas.png" alt="" className='w-8 h-8 ml-2' />
      </div>

      <div className="absolute top-0 flex animate-marquee2 items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          ¡¡GRANDES OFERTAS EN DH!!
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento!
        </span>
        <img src="/christmas2.png" alt="" className='w-6 h-6 ml-2' />
        <span className="ml-2 text-lg italic text-yellow-400">
          ¡Feliz Navidad!
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento!
        </span>
        <img src="/christmas.png" alt="" className='w-8 h-8 ml-2' />
      </div>
    </div>
  );
};
