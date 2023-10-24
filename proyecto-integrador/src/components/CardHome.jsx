import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

CardHome.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function CardHome({ product }) {
  return (
    <div className="w-[500px] h-[360px] place-self-center">
      <Card>
        <div className="gap-3 flex flex-col p-6">
          <div className="flex justify-center h-[180px]">
            <img
              src={
                product.images[0]
                  ? product.images[0].image
                  : "http://dummyimage.com/283x430.png/5fa2dd/ffffff"
              }
            />
          </div>
          <div className="border"></div>
          <div className="flex gap-5">
            <p>{product.name}</p>
          </div>
          <div className="flex items-center gap-5">
            <p>{product.price}</p>
            <Button>Alquilar</Button>
            <div>⭐{product.rating}</div>
            <Link to={"/detalle/" + product.nombre}>Ver detalle</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
