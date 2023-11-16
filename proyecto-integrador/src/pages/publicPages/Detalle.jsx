import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
// Context
import { useDataContext } from "@/context/dataContext/useDataContext";
// React
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Para usar el mock:
import products from "@/mocks/products.json";

Detalle.propTypes = {
  product: PropTypes.object,
};

export default function Detalle() {
  // const { products } = useDataContext();
  const [product, setProduct] = useState({});

  //* State para abrir o cerrar el modal
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  //* Esto hay que utilizarlos para obtener los datos específicos de cada producto
  //* guardados en la Api, pero todavía no la tenemos
  const { id } = useParams();

  useEffect(() => {
    const selectedProductId = parseInt(id);

    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );

    setProduct(selectedProduct);
  }, [id]);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  console.log(product);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center mb-3 mx-6 py-2">
        <span className="text-3xl">Detalle del producto</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-4 hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>

      {/* IMÁGENES  */}
      <div className=" flex w-auto mx-6 justify-items-start mt-4">
        <div className=" flex flex-col min-h-40 ">
          <h1 className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-bold mb-3 mx-6">
            {product.name}
          </h1>
          <div className="mx-2 sm:mt-0 items-end">
            <span className="bg-blue-600 font-semibold mx-6 px-1 text-white rounded-md w-[10%] flex justify-center">
              ⭐{product.rating}
            </span>
          </div>

          <div className="flex flex-row justify-between pt-4 mx-6 sm:mt-0 items-end w-1/2">
            <img src="/img/shop.webp" alt="Stock"/><span>En Stock</span>
            <img className="ml-3" src="/img/verify.webp" alt="Guarantee"/><span>Garantía</span>
            <img className="ml-3" src="/img/truck.webp" alt="Free shipping"/><span>Envío gratis</span>
          </div>
          
      <h2 className="mx-6 py-4 flex w-[80%] justify-end ">{product.description}</h2>
      <div className="mx-6 py-4 flex flex-wrap justify-start font-bold"> $ {product.price} </div>

        </div>

        <div className="w-1/2">
          <img
            src="/img/drone2.webp"
            alt="product-img"
            className="w-full border-0 rounded-lg"
          />
        </div>

        {/* //TODO terminar cuando tengamos la conexion a la API, hacer un .map */}
        <div className="flex flex-wrap w-1/2 justify-center gap-4">
          <img
            src="/img/drone2.webp"
            alt="product-img"
            className="w-[45%] border-0 rounded-lg"
          />
          <img
            src="/img/drone2.webp"
            alt="product-img"
            className="w-[45%] border-0 rounded-lg"
          />
          <img
            src="/img/drone2.webp"
            alt="product-img"
            className="w-[45%] border-0 rounded-lg"
          />
          <img
            src="/img/drone2.webp"
            alt="product-img"
            className="w-[45%] border-0 rounded-lg"
          />
        </div>

        
      </div>
   
    <div className="flex justify-end items-center mb-3 mx-6 mt-8">
      <Button
        className=" mx-auto w-[15%] bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
        px-4 py-4 rounded-md mr-8 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl
        place-center"
        onClick={() => setIsOpen(true)}
      >
        Ver galería de imágenes
      </Button>

      </div>
      <div className="w-full h-full mt-10">
        <h1 className="text-3xl border-b-2 pb-4 flex flex-col mb-4 md:mb-8 ml-4 md:ml-6">
        Caracteristicas
        </h1>

          <div className="mx-6 py-4 flex flex-col justify-start ">
            {product.characteristics?.map((c, i) => (
            <div key={i}>{c.characteristic}</div>
            ))}
          </div>

      </div>   


    </div>
  );
}
