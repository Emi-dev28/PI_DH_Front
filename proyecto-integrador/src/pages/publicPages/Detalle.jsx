import PropTypes from 'prop-types';
import { ImgGalleryModal } from '@/components/detalle/ImgGalleryModal';
import { Carousel } from '@/components/detalle/Carousel';
import { Button } from '@/components/ui/button';
import ShareButton from '@/components/custom-ui/WebShare';
import { Calendar } from '@/components/ui/calendar';
import { addDays, format } from 'date-fns';
// Context
import { useDataContext } from '@/context/dataContext/useDataContext';
// React
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Para usar el mock:
import products from '@/mocks/products.json';

// Para el desplegable de FAQ:
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  MdControlCamera,
  MdCyclone,
  MdOutlineElectricBolt,
  MdOutlineMemory,
  MdOutlineStar,
  MdOutlineWater,
} from 'react-icons/md';
import PrimaryButton from '@/components/custom-ui/PrimaryButton';

Detalle.propTypes = {
  product: PropTypes.object,
};

export default function Detalle() {
  // const { products } = useDataContext();
  const [product, setProduct] = useState({});

  //* State para abrir o cerrar el modal
  const [isOpen, setIsOpen] = useState(false);

  const [date, setDate] = useState(new Date());
  const disabledRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const selectedProductId = parseInt(id);

    const selectedProduct = products.find(
      (product) => product.id === selectedProductId,
    );

    setProduct(selectedProduct);
  }, [id]);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="mx-6 mb-3 flex items-center justify-end py-2">
        <Button
          className="mt-4 bg-cyan-600 text-lg text-white hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>

      <div className=" mx-4 flex justify-between ">
        <div className=" min-h-40 flex w-1/4 flex-col p-2 ">
          <h1 className="text-xl font-bold">{product.name}</h1>

          <div
            className="flex w-14 items-center justify-center rounded-md 
                bg-blue-600 px-1 font-semibold text-white "
          >
            <MdOutlineStar className="mr-[3px] text-xl text-yellow-400" />
            <span>{product.rating}</span>
          </div>

          <div className="flex gap-6 pt-4 font-semibold text-gray-600">
            <div className="flex gap-1">
              <img src="/img/shop.webp" alt="Stock" />
              <span>En Stock</span>
            </div>
            <div className="flex gap-1">
              <img className="" src="/img/verify.webp" alt="Guarantee" />
              <span>Garantía</span>
            </div>
            <div className="flex gap-1">
              <img className="" src="/img/truck.webp" alt="Free shipping" />
              <span>Envío gratis</span>
            </div>
          </div>

          <h2 className="py-4">{product.description}</h2>

          <div className="mt-4 flex items-center text-3xl font-bold">
            ${product.price}
            <span className="ml-2 text-xl font-normal">/ Día.</span>
          </div>

          <div className=" flex justify-end py-4 ">
            <ShareButton />
          </div>
        </div>

        {/* IMÁGENES  */}
        <div className="flex rounded-md border-none bg-white">
          <img
            src={product.images ? product.images[0].image : '/img/drone2.webp'}
            alt="product-img"
            className="w-[350px] rounded-lg border-0"
          />

          <div className="flex w-full flex-col justify-center gap-4">
            <img
              src={
                product.images ? product.images[1].image : '/img/drone2.webp'
              }
              alt="product-img"
              className="h-28 w-36 rounded-lg border-0"
            />
            <img
              src={
                product.images ? product.images[2].image : '/img/drone2.webp'
              }
              alt="product-img"
              className="h-28 w-36 rounded-lg border-0"
            />
            <img
              src={
                product.images ? product.images[3].image : '/img/drone2.webp'
              }
              alt="product-img"
              className="h-28 w-36 rounded-lg border-0"
            />
          </div>

          {/* <span
            className="place-self-end text-blue-600 hover:cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Ver más...
          </span> */}
        </div>

        <div className="flex flex-col gap-6 rounded-md border-none">
          <Calendar
            mode="single"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays
            fixedWeeks
            disabled={disabledRange}
            modifiersStyles={{
              disabled: { backgroundColor: 'red', color: 'white' },
              selected: { backgroundColor: 'rgb(37 99 235)' },
            }}
          />

          <PrimaryButton className="">Reservar</PrimaryButton>
        </div>
      </div>

      {/* Characteristics */}
      <div className="mt-10 h-full w-full">
        <h2 className="mb-4 ml-4 flex border-b-2 pb-2 text-2xl md:mb-8 md:ml-6">
          Características
        </h2>

        <div className="mx-4 flex gap-10">
          <div className="flex items-center gap-2">
            <MdOutlineMemory className="text-xl" />
            <span>Dos motores</span>
          </div>
          <div className="flex items-center gap-2">
            <MdCyclone className="text-xl" />
            <span>Cuatro aspas</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineWater className="text-xl" />
            <span>Resistente al agua</span>
          </div>
          <div className="flex items-center gap-2">
            <MdControlCamera className="text-xl" />
            <span>Control remoto</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineElectricBolt className="text-xl" />
            <span>Luces led</span>
          </div>
        </div>

        {/* <div className="mx-6 py-4 flex flex-col justify-between font-semibold list-disc">
          {product.characteristics?.map((c, i) => (
            <li key={i}>{c.characteristic}</li>
          ))}
        </div> */}
      </div>

      {/* MODAL Y GALERÍA */}
      <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
        {/* //TODO conectar con la api correctamente */}
        <Carousel images={product.images} />
      </ImgGalleryModal>

      <div className=" mx-4 mt-10">
        <h1 className="flex flex-col border-b-2 text-xl ">FAQ</h1>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-600">
                ¿Puedo comprar productos de DH Technology mediante pagos a
                plazos?
              </AccordionTrigger>
              <AccordionContent>
                Sí, DH Technology ofrece la opción de comprar productos mediante
                pagos en efectivo y a plazos. Esto te permite elegir el método
                de pago que se adapte a tus necesidades y presupuesto.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-600">
                ¿Cómo puedo interactuar con el contenido de la revista en DH
                Technology?
              </AccordionTrigger>
              <AccordionContent>
                Puede interactuar activamente con el contenido de la revista
                dejando comentarios y participando en la sección de preguntas y
                respuestas. No dude en compartir sus pensamientos, hacer
                preguntas e interactuar con otros entusiastas de la tecnología
                en la comunidad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-600">
                ¿DH Technology ofrece garantía sobre sus productos?
              </AccordionTrigger>
              <AccordionContent>
                Sí, DH Technology ofrece una garantía para todos los productos
                elegibles. Los detalles específicos de la garantía pueden variar
                según el fabricante y la categoría del producto. Consulte la
                descripción del producto o comuníquese con nuestro servicio de
                atención al cliente para obtener más información.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-600">
                ¿Es DH Technology una plataforma segura para compras online?
              </AccordionTrigger>
              <AccordionContent>
                Sí, DH Technology ofrece una garantía para todos las compras
                online. Los detalles específicos de los medios de pago pueden
                variar según el metodo y la forma del pago. Consulte la
                descripción de los pagos o comuníquese con nuestro servicio de
                atención al cliente para obtener más información.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-blue-600">
                ¿Cómo puedo obtener ayuda con mi compra o cualquier otra
                consulta?
              </AccordionTrigger>
              <AccordionContent>
                Si necesita ayuda con su compra o tiene alguna pregunta, nuestro
                dedicado equipo de atención al cliente está aquí para ayudarlo.
                Puede comunicarse con nosotros a través de la página de contacto
                en nuestro sitio web y estaremos encantados de ayudarle de
                inmediato.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="relative  w-[100%] py-12 pb-0 saturate-150">
        <img src="/img/detalles-footer.webp" alt="Bottom-detail-img" />
      </div>
    </div>
  );
}
