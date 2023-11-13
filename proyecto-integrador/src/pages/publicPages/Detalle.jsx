import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
// Context
import { useDataContext } from "@/context/dataContext/useDataContext";
// React
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ImgGalleryModal } from "@/components/detalle/ImgGalleryModal";
import { Carousel } from "@/components/detalle/Carousel";
import DetailTable from "@/components/detalle/DetailTable";
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

  const onCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const selectedProductId = parseInt(id);

    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );

    setProduct(selectedProduct);
  }, [id, products]);

  return (
    <div className="flex flex-col ">


      
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Detalle del producto</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-4 hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>
      

    

      {/* IMÁGENES  */}
      <div className=" flex w-auto mx-auto justify-items-start mt-4">

        <div className=" flex flex-col min-h-40 ">
          <h1 className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-bold mb-3 mx-3">
            Nombre del producto 
          </h1>
          <div className="mt-2 sm:mt-0 items-end">
          <span className="bg-blue-600 font-semibold px-1 text-white rounded-md w-auto">⭐{product.rating}</span>
        
        </div>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique fugiat veniam numquam eaque cupiditate animi alias quidem. Quia hic praesentium ab, accusamus, quod id dignissimos necessitatibus ducimus ut earum sunt.</h2>
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
      

      <Button
        className=" mx-auto w-[15%] bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
        px-4 py-2 rounded-md mr-8 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl
        place-center"
        onClick={() => setIsOpen(true)}
      >
        Ver galería de imágenes
      </Button>

        {/* TABLA */}

        <div className="py-2 flex-col">
        {product ? (
        <DetailTable product={product} />
      ) : (
        <div className="ml-4 mt-10 text-2xl">El producto no existe</div>
      )}

      {/* MODAL Y GALERÍA */}
      <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
        {/* //TODO conectar con la api correctamente */}
        <Carousel images={product.images} />
      </ImgGalleryModal>
      </div>
    </div>
  );
}
