import PropTypes from "prop-types";
import { ImgGalleryModal } from "@/components/detalle/ImgGalleryModal";
import { Carousel } from "@/components/detalle/Carousel";
import { Button } from "@/components/ui/button";
import ShareButton from "@/components/custom-ui/WebShare";
// Context
import { useDataContext } from "@/context/dataContext/useDataContext";
// React
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Para usar el mock:
import products from "@/mocks/products.json";

// Para el desplegable de FAQ:
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
      <div className=" flex w-auto mx-6 justify-items-start mt-4 ">

        <div className=" flex flex-col min-h-40 ">
          <h1 className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-bold mb-3 mx-6">
            {product.name}
          </h1>
          
          <div className="mx-2 sm:mt-0 items-end">
            <span className="bg-blue-600 font-semibold mx-6 px-1 text-white rounded-md w-[5%] flex justify-center">
              ⭐{product.rating}
            </span>
          </div>

          <div className="flex flex-row justify-between pt-4 mx-6 sm:mt-0 items-end w-1/2 font-semibold text-gray-600">
            <img src="/img/shop.webp" alt="Stock"/><span>En Stock</span>
            <img className="ml-3" src="/img/verify.webp" alt="Guarantee"/><span>Garantía</span>
            <img className="ml-3" src="/img/truck.webp" alt="Free shipping"/><span>Envío gratis</span>
          </div>
          
          <h2 className="mx-6 py-4 flex w-[80%] justify-end ">{product.description}</h2>
          <div className="mx-6 py-4 flex flex-wrap justify-start font-bold text-3xl"> $ {product.price}<span className="text-xl font-normal mx-2 py-1">/ Mensuales.</span></div>

          <div className="mx-6 py-4 flex w-[80%] justify-end "><ShareButton/></div>
        
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

          <div className="mx-6 py-4 flex flex-col justify-between font-semibold list-disc">
            {product.characteristics?.map((c, i) => (
            <li key={i}>{c.characteristic}</li>
            ))}
          </div>


          {/* MODAL Y GALERÍA */}
          <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
          {/* //TODO conectar con la api correctamente */}
          <Carousel images={product.images} />
          </ImgGalleryModal> 

      </div>   
      <div className="mx-6 w-1/2 h-full mt-10">
        <h1 className="text-3xl border-b-2 pb-4 flex flex-col mb-4 md:mb-8 ml-4 md:ml-6">
        FAQ
        </h1>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-blue-600">¿Puedo comprar productos de DH Technology mediante pagos a plazos?</AccordionTrigger>
              <AccordionContent>
                 Sí, DH Technology ofrece la opción de comprar productos mediante pagos en efectivo y a plazos. Esto te permite elegir el método de pago que se adapte a tus necesidades y presupuesto.
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-blue-600">¿Cómo puedo interactuar con el contenido de la revista en DH Technology?</AccordionTrigger>
              <AccordionContent>
                Puede interactuar activamente con el contenido de la revista dejando comentarios y participando en la sección de preguntas y respuestas. No dude en compartir sus pensamientos, hacer preguntas e interactuar con otros entusiastas de la tecnología en la comunidad.
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-blue-600">¿DH Technology ofrece garantía sobre sus productos?</AccordionTrigger>
              <AccordionContent>
                Sí, DH Technology ofrece una garantía para todos los productos elegibles. Los detalles específicos de la garantía pueden variar según el fabricante y la categoría del producto. Consulte la descripción del producto o comuníquese con nuestro servicio de atención al cliente para obtener más información.
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-blue-600">¿Es DH Technology una plataforma segura para compras online?</AccordionTrigger>
              <AccordionContent>
                Sí, DH Technology ofrece una garantía para todos los productos elegibles. Los detalles específicos de la garantía pueden variar según el fabricante y la categoría del producto. Consulte la descripción del producto o comuníquese con nuestro servicio de atención al cliente para obtener más información.
              </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-blue-600">¿Cómo puedo obtener ayuda con mi compra o cualquier otra consulta?</AccordionTrigger>
              <AccordionContent>
                Si necesita ayuda con su compra o tiene alguna pregunta, nuestro dedicado equipo de atención al cliente está aquí para ayudarlo. Puede comunicarse con nosotros a través de la página de contacto en nuestro sitio web y estaremos encantados de ayudarle de inmediato.
              </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>   
         

    </div>
  );
}
