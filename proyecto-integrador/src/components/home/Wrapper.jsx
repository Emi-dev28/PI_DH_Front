import CardHome from "@/components/home/CardHome";
import PropTypes from "prop-types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Button } from "@/components/ui/button";

Wrapper.propTypes = {
  products: PropTypes.array,
  prevHandler: PropTypes.func,
  nextHandler: PropTypes.func,
  currentPage: PropTypes.number,
};

export default function Wrapper(props) {
  return (
    <div className="mb-16 flex flex-col items-center mt-16">
      <div className="text-3xl border-b-2 pb-4  flex place-self-start flex-col mb-12 ml-24">
        Recomendados
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {/* Tenemos que ver cómo crear los id, por ahora sirve el nombre porque no se pueden repetir */}
        {props.products.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>

      <div className="self-center flex items-center gap-6 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={props.prevHandler}
          className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white  hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl"
        >
          <MdChevronLeft className="text-3xl" />
        </Button>

        <span className=" py-[6px] px-6 bg-gradient-to-b from-stone-100 to-stone-300 border-none rounded-md ">
          Página {props.currentPage + 1}
        </span>

        <Button
          variant="outline"
          size="icon"
          onClick={props.nextHandler}
          className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl"
        >
          <MdChevronRight className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}
