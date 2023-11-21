import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import PrimaryButton from "../custom-ui/PrimaryButton";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthContext } from "@/context/authContext/useAuthContext";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function CardHome({ product, isFav }) {

  const { removeFromFavs, addToFavs } = useAuthContext()
  const { onRemoveFromFavs, onAddToFavs } = useAuthStore()
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    addToFavs(product)
    //onAddToFavs(product)
  }
  const handleRemoveFromFavorites = () => {
    removeFromFavs(product.id)
    //onRemoveFromFavs(product.id)
  }

  return (
    <Card
      className="w-full sm:w-[400px] lg:w-[500px] h-[460px] flex flex-col p-6 hover:shadow-xl duration-300 "
    >
      <div className="flex justify-center">
        <img
          src={product.images ? product.images[0].image : "/img/drone2.webp"}
          className="w-full h-[260px] object-cover cursor-pointer"
          onClick={() => navigate("/detalle/" + product.id)}
        />
      </div>

      <div className="border"></div>

      <CardHeader className="flex flex-row justify-between mt-[-10px]">
        <div>

          <CardTitle className="text-lg mt-[5px] flex items-center">
            <span>{product.name}</span>
            {
              isFav
                ? <MdBookmarkAdded
                  className="text-green-600 ml-2 text-xl cursor-pointer hover:text-2xl duration-300"
                  onClick={() => handleRemoveFromFavorites()}
                />
                : <MdBookmarkAdd
                  className="text-yellow-600 ml-2 text-xl cursor-pointer hover:text-2xl duration-300"
                  onClick={() => handleAddToFavorites()}
                />
            }
          </CardTitle>

          <CardDescription className="text-lg">
            {"$" + product.price + " /semanal"}
          </CardDescription>

        </div>

        <div className="mt-2 sm:mt-0 flex flex-col items-end">
          <span>⭐{product.rating}</span>
        </div>

      </CardHeader>

      <PrimaryButton className="mt-auto">Alquilar</PrimaryButton>

    </Card>
  );
}
