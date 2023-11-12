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

      <div className="grid grid-cols-1 gap-x-32 gap-y-12 md:grid-cols-2 ">
        {props.products.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>

      <div className="self-center flex items-center gap-6 mt-8">
        {props.currentPage !== 0 ? (
          <Button variant="outline" size="icon" onClick={props.prevHandler}>
            <MdChevronLeft className="text-3xl" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="invisible"
            onClick={props.prevHandler}
          ></Button>
        )}

        <span className=" h-9 w-9 border border-input inline-flex items-center justify-center rounded-md font-medium">
          {props.currentPage + 1}
        </span>

        <Button variant="outline" size="icon" onClick={props.nextHandler}>
          <MdChevronRight className="text-3xl" />
        </Button>
      </div>
    </div>
  );
}
