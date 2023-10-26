import CardHome from "@/components/CardHome";
import PropTypes from "prop-types";

import { Button } from "@/components/ui/button";

Wrapper.propTypes = {
  products: PropTypes.array,
  prevHandler: PropTypes.func,
  nextHandler: PropTypes.func,
  currentPage: PropTypes.number,
};

export default function Wrapper(props) {
  return (
    <div className="mb-16 flex flex-col items-center mt-36">
      <div className="flex place-self-start flex-col mb-12 ml-24">
        <button
          className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
                    px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl"
        >
          Our products
        </button>
        <i className="fa-solid fa-arrow-right-long text-rose-500 text-3xl"></i>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-5/6">
        {/* Tenemos que ver cómo crear los id, por ahora sirve el nombre porque no se pueden repetir */}
        {props.products.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>

      <div className="self-center flex items-center gap-8 mt-8">
        <Button
          onClick={props.prevHandler}
          className="w-32 bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl"
        >
          Prev
        </Button>

        <span>Página {props.currentPage + 1}</span>

        <Button
          onClick={props.nextHandler}
          className="w-32 bg-gradient-to-b from-btnPink to-btnPinkDarker text-white px-4 py-2 rounded-md mr-2 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
