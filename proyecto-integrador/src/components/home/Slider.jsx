import React, { useState } from 'react';
import CardSlider from '@/components/home/CardSlider';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Button } from '@/components/ui/button';

Slider.propTypes = {
  products: PropTypes.array,
};

export default function Slider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Ajusta la cantidad de tarjetas por página según tus necesidades

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  const nextHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % products.length);
  };

  const prevHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + products.length) % products.length);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <div className="text-3xl border-b-2 pb-4 flex place-self-start flex-col mb-4 md:mb-8 ml-4 md:ml-24">
        Categorias
      </div>

      <div className="flex items-center overflow-x-auto max-w-screen-xl mx-auto px-4 relative space-x-4">
        {visibleProducts.map((product) => (
          <CardSlider key={product.id} product={product} className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4" />
        ))}

        <Button variant="icon" size="icon" onClick={prevHandler} className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <MdChevronLeft className="text-3xl" />
        </Button>

        <Button variant="icon" size="icon" onClick={nextHandler} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <MdChevronRight className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}

