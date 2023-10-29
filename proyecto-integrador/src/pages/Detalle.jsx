import { Button } from "@/components/ui/button";
// Context
import { useDataContext } from "@/context/useDataContext";
// React
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ImgGalleryModal } from "@/components/detalle/ImgGalleryModal";
import { Carousel } from "@/components/detalle/Carousel";
import { DetailTable } from "@/components/detalle/DetailTable";

export const Detalle = () => {
  const { state: products } = useDataContext();
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

    const selectedProduct = products.data.find(
      (product) => product.id === selectedProductId
    );

    setProduct(selectedProduct);
  }, [id, products.data]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Detalle del producto</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>

      {/* TABLA */}
      {product ? (
        <DetailTable product={product} />
      ) : (
        <div className="ml-4 mt-10 text-2xl">El producto no existe</div>
      )}

      {/* IMÁGENES  */}
      <div className="flex items-center mt-4">
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
        className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
        px-4 py-2 rounded-md mr-8 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl
        place-self-end"
        onClick={() => setIsOpen(true)}
      >
        Ver galería de imágenes
      </Button>

      {/* MODAL Y GALERÍA */}
      <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
        {/* //TODO conectar con la api correctamente */}
        <Carousel images={product.images} />
      </ImgGalleryModal>
    </div>
  );
};
