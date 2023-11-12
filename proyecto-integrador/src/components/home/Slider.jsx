import PropTypes from "prop-types";
import CardSlider from "@/components/home/CardSlider";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import { Button } from "@/components/ui/button";

Slider.propTypes = {
  categories: PropTypes.array,
  handleClickFilterProducts: PropTypes.func,
};

export default function Slider({ categories, handleClickFilterProducts }) {
  const slider = document.getElementById("slider");

  const slideLeft = () => {
    slider.scrollLeft -= 300;
  };

  const slideRight = () => {
    slider.scrollLeft += 300;
  };

  return (
    <div className="w-full h-full mt-10">
      <div className="text-3xl border-b-2 pb-4 flex flex-col mb-4 md:mb-8 ml-4 md:ml-24">
        Categorias
      </div>

      <div className="relative flex items-center justify-center mx-2">
        <Button
          variant="icon"
          size="icon"
          onClick={slideLeft}
          className="opacity-50 cursor-pointer hover:opacity-100"
        >
          <MdArrowCircleLeft className="text-4xl" />
        </Button>

        <div
          id="slider"
          className="w-full h-full overflow-hidden whitespace-nowrap scroll-smooth max-w-[1410px]"
        >
          {categories.map((category) => (
            <CardSlider
              handleClickFilterProducts={handleClickFilterProducts}
              key={category.id}
              category={category}
            />
          ))}
        </div>

        <Button
          variant="icon"
          size="icon"
          onClick={slideRight}
          className="opacity-50 cursor-pointer hover:opacity-100"
        >
          <MdArrowCircleRight className="text-4xl" />
        </Button>
      </div>
    </div>
  );
}
