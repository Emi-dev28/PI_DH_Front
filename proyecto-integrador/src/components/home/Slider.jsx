import PropTypes from "prop-types";
import { useState } from "react";
import CardSlider from "@/components/home/CardSlider";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import { Button } from "@/components/ui/button";

Slider.propTypes = {
  categories: PropTypes.array,
};

export default function Slider({ categories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const nextHandler = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerPage) % categories.length
    );
  };

  const prevHandler = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + categories.length) % categories.length
    );
  };

  return (
    <div className="w-full h-full mt-10 flex flex-col justify-center items-center cursor-pointer overflow-hidden">
      <div className="text-3xl border-b-2 pb-4 flex place-self-start flex-col mb-4 md:mb-8 ml-4 md:ml-24">
        Categorias
      </div>

      <div className="flex items-center overflow-x-auto max-w-screen-xl mx-auto px-4 relative space-x-4">
        {visibleCategories.map((category) => (
          <CardSlider
            key={category.id}
            category={category}
            className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4"
          />
        ))}
        {/*  
        <Button variant="icon" size="icon" onClick={prevHandler} className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <MdArrowCircleLeft className="text-4xl" />
        </Button>

        <Button variant="icon" size="icon" onClick={nextHandler} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <MdArrowCircleRight className="text-4xl" />
        </Button>

      */}
      </div>
    </div>
  );
}
