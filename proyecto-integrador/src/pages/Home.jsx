import { Marquee } from "@/components/home/Marquee";
import Wrapper from "@/components/home/Wrapper";
import { Button } from "@/components/ui/button";
import { useDataContext } from "@/context/useDataContext";
import { useEffect, useRef, useState } from "react";

import { MdArrowUpward } from "react-icons/md";

export default function Home() {
  const { state: products } = useDataContext();

  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  //* Establecer la referencia a un elemento de forma dinámica para hacer el scroll automático
  //* hacia esa posición en cualquier tipo de pantalla
  const productsRef = useRef();
  let coords = productsRef.current?.getBoundingClientRect();

  useEffect(() => {
    const updateRandomProducts = () => {
      // Clonamos los productos para no modificar el estado directamente
      const clonedProducts = [...products.data];

      // Ordenar aleatoriamente los productos
      const shuffledProducts = clonedProducts.sort(() => Math.random() - 0.5);

      setShuffledProducts(shuffledProducts);

      // Tomar solo los primeros 10 productos
      const newSelectedProducts = shuffledProducts.slice(0, 10);

      // Actualizar el estado con los productos aleatorios
      setRandomProducts(newSelectedProducts);
    };

    // Llamamos a la función de actualización al montar el componente y cuando products.data cambia
    updateRandomProducts();
  }, [products.data]);

  const nextHandler = () => {
    const elementsAmount = products.data.length;
    const nextPage = currentPage + 1;
    const index = nextPage * 10;

    if (index === elementsAmount) return;

    setRandomProducts([...shuffledProducts].splice(index, 10));
    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const index = prevPage * 10;

    setRandomProducts([...shuffledProducts].splice(index, 10));
    setCurrentPage(prevPage);
  };

  return (
    <div className="flex flex-col">

      <div className="w-screen relative">
        <Marquee styles={"absolute"} />
        <img src="/img/home-13.jpg" alt="Top-home-img" className="w-full" />
        <div className="absolute bottom-[15%] left-8">
          <h1 className="text-6xl text-white">DH Technology</h1>
          <h4 className="text-white text-2xl mt-2">Hacemos realidad tu proyecto</h4>
        </div>
      </div>

      {/* <button
        onClick={() => window.scroll({ top: coords.y, behavior: "smooth" })}
        className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
                    px-4 py-2 rounded-md mr-2 mt-4 hover:text-gray-300 duration-400 
                    focus:shadow-outline-grey shadow-xl"
      >
        Ver nuestros productos
      </button> */}

      {/* <h1 className="mt-6 text-rose-600 font-bold text-2xl uppercase drop-shadow-md self-center">
        Hacemos realidad tu proyecto
      </h1> */}

      <div ref={productsRef}></div>
      <Wrapper
        products={randomProducts}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        currentPage={currentPage}
      />

      <div className="w-full saturate-150 relative">
        <img src="/img/Component.webp" alt="Bottom-home-img" className="pr-2" />

        <Button
          variant="outline"
          size="icon"
          className="absolute right-8 bottom-5 bg-gradient-to-b from-lime-400 to-lime-600 
          border-none rounded-md"
          onClick={() => window.scroll({ top: "0", behavior: "smooth" })}
        >
          <MdArrowUpward className="text-xl text-white" />
        </Button>
      </div>
    </div>
  );
}
