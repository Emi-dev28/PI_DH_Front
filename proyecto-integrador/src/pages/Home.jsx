import Wrapper from "@/components/Wrapper";
import { useDataContext } from "@/context/useDataContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { state: products } = useDataContext();

  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const clonedProducts = [...products.data];

  // Ordenar aleatoriamente los productos
  const shuffledProducts = clonedProducts.sort(() => Math.random() - 0.5);

  // Tomar solo los primeros 10 productos
  const selectedProducts = shuffledProducts.splice(0, 10);

  useEffect(() => {
    // Actualizar el estado con los productos aleatorios
    setRandomProducts(selectedProducts);
  }, []); // La dependencia vacía asegura que esto solo se ejecute una vez al montar el componente

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
    <div>
      <div className="h-[26rem] bg-[url('/img/section-1.webp')] bg-no-repeat flex justify-center items-center saturate-150">
       {/* <div className="w-3/5 text-center mb-24 backdrop-opacity-95">
          <h1 className="text-red-700 font-bold text-4xl">
            Servicio de alquiler de alta tecnología
          </h1>
          <p className="text-white text-xl mt-4">
            Explora un mundo de oportunidades usando la última tecnología a
            nivel mundial. Cumple tus sueños, diviértete, emprende, eso es lo
            que te ofrecemos en DH Technology. Estás a un click de distancia.
          </p>
        </div>*/}
      </div>

      <div className="mt-4 flex justify-center">
        <select className="px-8 py-2 border border-gray-300 rounded-md ml-1 cursor-pointer">
          <option value="" disabled selected>Selecciona una categoría</option>
          <option value="categoria1">Drones</option>
          <option value="categoria2">Equipamiento de oficina</option>
          <option value="categoria3">Hardware</option>
          <option value="categoria4">Iluminación</option>
          <option value="categoria5">Monitores y pantallas</option>
          <option value="categoria6">Perifericos</option>
          <option value="categoria7">Streaming</option>
          <option value="categoria8">Varios</option>
         </select>
        <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-r-md ml-1 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">
          Ir
        </button>

       <input type="text" placeholder="Buscar..." className="px-4 py-2 border border-gray-300 rounded-l-md"/>
    
      <button className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-r-md ml-1 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl">
        Buscar
      </button> 
    
  </div>


   {/*   <div className="h-96 w-[96%] flex justify-center items-center mt-18">
        <div className="w-1/2 p-24 ">
          <div className="flex flex-col pb-4 text-lg">
            <span>WHO</span>
            <span>WE ARE</span>
            <i className="fa-solid fa-arrow-right-long text-rose-500 text-3xl"></i>
          </div>
          <h2 className="text-2xl text-rose-500 font-semibold mb-2">
            Technology investments as a differentiator
          </h2>
          <p>
            No forced partnership technology here. We focus on the right
            solution to drive our clients’ business forward and employ a
            technology-agnostic approach for all needed stages of the activity
            cycle, allowing access to current, robust, and advanced solutions.
            Paramount to this is ensuring the security and compliant use of all
            information. In the end, it’s not just technology; we ensure our
            methodologies, staff, industry knowledge, and governance align with
            the technology to drive the right client results.
          </p>
        </div>

        <div className="flex justify-end w-1/2 ">
          <img src="/img/home2.png" alt="home-secondary-image" />
        </div>
      </div>
        */}

      <Wrapper
        products={randomProducts}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        currentPage={currentPage}
      />
    </div>
  );
}
