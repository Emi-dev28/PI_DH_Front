import { Link } from "react-router-dom";
import PrimaryButton from "../custom-ui/PrimaryButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardHome({ product }) {
  return (
    <Card className="w-full sm:w-[400px] lg:w-[500px] h-[460px] flex flex-col p-6">
      <div className="flex justify-center">
        <img
          src={
            product.imagenes
              ? product.imagenes[0].imageUrl
              : "/img/drone2.webp"
          }
          className="w-full h-[260px] object-cover"
        />
      </div>

      <div className="border"></div>

      <CardHeader className="flex flex-row justify-between mt-[-10px]">
        <div>
          <CardTitle className="text-lg mt-[5px]">{product.name}</CardTitle>
          <CardDescription className="text-lg">
            {"$" + product.price + " /semanal"}
          </CardDescription>
        </div>
        <div className="mt-2 sm:mt-0 flex flex-col items-end">
          <span>⭐{product.rating}</span>
          <Link to={"/detalle/" + product.id}>
            <span className="text-blue-600">Ver más...</span>
          </Link>
        </div>
      </CardHeader>

      <PrimaryButton className="mt-auto">Alquilar</PrimaryButton>
    </Card>
  );
}
