import { MdOutlineRocketLaunch, MdStarRate } from 'react-icons/md';


export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800">
      <div className="flex animate-marquee items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          - Arthur C. Clarke :
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la
          magia
        </span>
        <MdStarRate className=" mx-2 text-xl text-yellow-300" />
        <span className="ml-2 text-lg italic text-rose-400">
          - Henry Ford :
        </span>
        <span className="ml-2 text-lg text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <MdOutlineRocketLaunch className="mx-2 text-xl text-orange-500" />
      </div>

      <div className="absolute top-0 flex animate-marquee2 items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          - Arthur C. Clarke :
        </span>
        <span className="ml-2 text-lg text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la
          magia
        </span>
        <MdStarRate className="mx-2 text-xl text-yellow-300" />
        <span className="ml-2 text-lg italic text-rose-400">
          - Henry Ford :
        </span>
        <span className="ml-2 text-lg text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <MdOutlineRocketLaunch className="mx-2 text-xl text-orange-500" />
      </div>
    </div>
  );
};
