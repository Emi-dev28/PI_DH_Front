import Wrapper from "@/components/Wrapper";
import { useDataContext } from "@/context/useDataContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { state: products } = useDataContext();

  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [shuffledProducts, setShuffledProducts] = useState([]);

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

    // Llamamos a la función de actualización al montar el componente
    updateRandomProducts();
  }, [products.data]); // Dependencia actualizada a products.data

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

      <div className="h-[29rem] bg-[url('/img/home3.png')] bg-[length:1540px_465px] 
      flex justify-center items-center saturate-150 bg-no-repeat">
       
        <div
          className="w-3/5 h-36 grid place-items-center mb-24  py-4 text-center"
        >
          <h1 className="text-rose-600 font-bold text-3xl uppercase drop-shadow-md">
            Servicio de alquiler de alta tecnología
          </h1>
          <p className="text-white text-md mt-4 font-medium drop-shadow-md">
            Explora un mundo de oportunidades usando la última tecnología a
            nivel mundial. Cumple tus sueños, diviértete, emprende, eso es lo
            que te ofrecemos en DH Technology. Estás a un click de distancia.
          </p>
        </div>
      </div>

      <div className="flex mt-14 px-12">

        <div className="w-1/2 px-24 py-10 ">
          <div className="flex flex-col pb-4 text-lg">
            <span>WHO</span>
            <span>WE ARE</span>
            <i className="fa-solid fa-arrow-right-long text-rose-500 text-3xl"></i>
          </div>
          <h2 className="text-4xl text-rose-500 font-semibold mb-4">
            Servicio de alquiler de alta tecnología
          </h2>
          <p className="text-xl">
            Explora un mundo de oportunidades usando la última tecnología a
            nivel mundial. Cumple tus sueños, diviértete, emprende, eso es lo
            que te ofrecemos en DH Technology. Estás a un click de distancia.
          </p>
        </div>

        <div className="flex justify-end w-1/2 ">
          <img src="/img/home2.png" alt="home-secondary-image" />
        </div>
      </div>

      <Wrapper
        products={randomProducts}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        currentPage={currentPage}
      />
    </div>
  );
}
