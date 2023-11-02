import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import PrimaryButton from "../custom-ui/PrimaryButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

CardHome.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function CardHome({ product }) {
  return (
    <Card className="w-full sm:w-[400px] lg:w-[500px] h-[460px] relative flex flex-col p-6">
      <div className="flex justify-center">
        <img
          src={
            product.images[0]
              ? product.images[0].image
              : "http://dummyimage.com/283x430.png/5fa2dd/ffffff"
          }
          className="w-full h-[260px] object-cover"
        />
      </div>

      <Link to={"/detalle/" + product.id} className="absolute right-4 top-4">
        <FaEye className="text-2xl sm:text-4xl hover:text-green-600" />
      </Link>

      <div className="border"></div>

      <CardHeader className="flex flex-row justify-between mt-[-10px]">
        <div>
          <CardTitle className="text-lg mt-[5px]">{product.name}</CardTitle>
          <CardDescription className="text-lg">
            {"$" + product.price + " /semanal"}
          </CardDescription>
        </div>
        <div className="mt-2 sm:mt-0">⭐{product.rating}</div>
      </CardHeader>

      <PrimaryButton className="mt-auto">Alquilar</PrimaryButton>
    </Card>
  );
}
