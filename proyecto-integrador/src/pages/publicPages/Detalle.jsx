import { useDataContext } from '@/context/dataContext/useDataContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ImgGalleryModal } from '@/components/detalle/ImgGalleryModal';
import { Carousel } from '@/components/detalle/Carousel';
import { Calendar } from '@/components/ui/calendar';
import { addDays, format } from 'date-fns';

// Para usar el mock:
import products from '@/mocks/products.json';

import PrimaryButton from '@/components/custom-ui/PrimaryButton';
import { AccordionDetail } from '@/components/detalle/AccordionDetail';
import { ImagesDetail } from '@/components/detalle/ImagesDetail';
import { Characteristics } from '@/components/detalle/Characteristics';
import { ProductDetail } from '@/components/detalle/ProductDetail';

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

  return (
    <div className="flex flex-col mx-2">

      <div className="my-4 mr-2 flex justify-end">
        <PrimaryButton onClick={() => navigate(-1)}> Regresar </PrimaryButton>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">

        <ProductDetail product={product}/>

        {/* IMÁGENES  */}
        <ImagesDetail images={product.images} setIsOpen={setIsOpen}/>

        {/* MODAL Y GALERÍA */}
        <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
          <Carousel images={product.images} />
        </ImgGalleryModal>

        {/* Calender */}
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
          />

          <PrimaryButton className="">Reservar</PrimaryButton>
        </div>
      </div>

      {/* Characteristics */}
      <Characteristics/>

      {/* Accordion */}
      <div className=" mx-4 mt-10">
        <h1 className="flex flex-col border-b-2 text-xl ">FAQ</h1>
        <AccordionDetail />
      </div>

      <div className="relative  w-[100%] py-12 pb-0 saturate-150">
        <img src="/img/detalles-footer.webp" alt="Bottom-detail-img" />
      </div>

    </div >
  );
}
