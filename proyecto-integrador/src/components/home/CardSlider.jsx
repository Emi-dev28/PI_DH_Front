import PrimaryButton from "../custom-ui/PrimaryButton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardSlider({ product }) {
  return (
    <Card className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-[460px] relative flex flex-col p-4 md:p-6">
      <div className="flex justify-center items-center mb-2">
        <img
          src={
            product.images[0]
              ? product.images[0].image
              : "http://dummyimage.com/283x430.png/5fa2dd/ffffff"
          }
          className="w-full h-[240px] object-cover"
          alt={product.name}
        />
      </div>

      <CardHeader className="flex justify-between">
        <div>
          <CardTitle className="text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg mt-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
            {product.name}
          </CardTitle>
        </div>
      </CardHeader>

      <PrimaryButton className="mt-2 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">Categoria</PrimaryButton>
    </Card>
  );
}
