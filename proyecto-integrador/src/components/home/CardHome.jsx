import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import PrimaryButton from '../custom-ui/PrimaryButton';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuthContext } from '@/context/authContext/useAuthContext';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import ShareButton from '@/components/custom-ui/WebShare';

export default function CardHome({ product, isFav }) {
  const { removeFromFavs, addToFavs } = useAuthContext();
  const { onRemoveFromFavs, onAddToFavs } = useAuthStore();
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    addToFavs(product);
    //onAddToFavs(product)
  };
  const handleRemoveFromFavorites = () => {
    removeFromFavs(product.id);
    //onRemoveFromFavs(product.id)
  };

  return (
    <Card className="flex h-[460px] w-full flex-col p-4 duration-300 hover:shadow-xl sm:w-[400px] lg:w-[500px] ">
      <div className="flex flex-col items-end py-0">
        <ShareButton />
      </div>
      <div className="flex justify-center">
        <img
          src={product.images ? product.images[0].image : '/img/drone2.webp'}
          className="h-[260px] w-full cursor-pointer object-cover"
          onClick={() => navigate('/detalle/' + product.id)}
        />
      </div>

      <div className="border"></div>

      <CardHeader className="mt-[-10px] flex flex-row justify-between">
        <div>
          <CardTitle className="mt-[5px] flex items-center text-lg">
            <span>{product.name}</span>
            {isFav ? (
              <MdFavorite
                className="ml-2 cursor-pointer text-xl text-red-600 duration-300"
                onClick={() => handleRemoveFromFavorites()}
              />
            ) : (
              <MdFavoriteBorder
                className="ml-2 cursor-pointer text-xl text-yellow-600 duration-300"
                onClick={() => handleAddToFavorites()}
              />
            )}
          </CardTitle>

          <CardDescription className="text-lg">
            {'$' + product.price + ' /semanal'}
          </CardDescription>
        </div>

        <div className="mt-2 flex flex-col items-end sm:mt-0">
          <span>⭐{product.rating}</span>
        </div>
      </CardHeader>

      <PrimaryButton className="mt-auto ">Alquilar</PrimaryButton>
    </Card>
  );
}
