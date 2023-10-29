import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";

CardHome.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function CardHome({ product }) {
  return (
    <Card className="w-[500px] h-[460px] relative flex flex-col p-6">
      <div className="flex justify-center">
        <img
          src={
            product.images[0]
              ? product.images[0].image
              : "http://dummyimage.com/283x430.png/5fa2dd/ffffff"
          }
          className="w-[400px] h-[260px]"
        />
      </div>

      <Link to={"/detalle/" + product.id} className="absolute right-10">
        <FaEye className="text-4xl hover:text-green-600" />
      </Link>

      <div className="border"></div>

      <CardHeader className="flex flex-row justify-between mt-[-10px]">
        <div>
          <CardTitle className="text-lg mt-[5px]">{product.name}</CardTitle>
          <CardDescription className="text-lg">
            {"$" + product.price + " /semanal"}
          </CardDescription>
        </div>
        <div>⭐{product.rating}</div>
      </CardHeader>

      <Button
        className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
            rounded-md hover:text-gray-300 duration-400 focus:shadow-outline-grey 
            shadow-xl text-md mx-4"
      >
        Alquilar
      </Button>
    </Card>
  );
}
