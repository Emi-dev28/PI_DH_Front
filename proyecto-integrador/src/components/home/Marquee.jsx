export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800">
      <div className="py-4 animate-marquee whitespace-nowrap">
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl ml-2 text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la magia
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl italic ml-2 text-rose-400">
          - Arthur C. Clarke -
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl ml-2 text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl italic ml-2 text-rose-400">
          - Henry Ford -
        </span>
      </div>
      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl ml-2 text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la magia
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl italic ml-2 text-rose-400">
          - Arthur C. Clarke -
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl ml-2 text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <span className="text-xl md:text-xl lg:text-xl xl:text-xl italic ml-2 text-rose-400">
          - Henry Ford -
        </span>
      </div>
    </div>
  );
};
