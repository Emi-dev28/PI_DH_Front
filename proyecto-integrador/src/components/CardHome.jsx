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

CardHome.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function CardHome({ product }) {
  return (
    <div className="max-w-[500px] h-[360px] place-self-center">
      <Card>
        <div className="gap-3 flex flex-col p-6">
          <div className="flex justify-center h-[180px]">
            <img src="/monitor.png" />
          </div>
          <div className="border"></div>
          <div className="flex gap-5">
            <p>{product.title}</p>
          </div>
          <div className="flex items-center gap-5">
            <p>{product.price}</p>
            <Button>Alquilar</Button>
            <div>⭐{product.score}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
