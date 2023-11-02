export const Marquee = () => {
    return (
      <div className="relative flex overflow-x-hidden bg-slate-800">
        <div className="py-4 animate-marquee whitespace-nowrap">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-2 text-slate-200">
            Cualquier tecnología suficientemente avanzada es equivalente a la magia
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic ml-2 text-rose-400">
            -- Arthur C. Clarke --
          </span>
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-2 text-slate-200">
            Cualquier tecnología suficientemente avanzada es equivalente a la magia
          </span>
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl italic ml-2 text-rose-400">
            -- Arthur C. Clarke --
          </span>
        </div>
      </div>
    );
  };
  