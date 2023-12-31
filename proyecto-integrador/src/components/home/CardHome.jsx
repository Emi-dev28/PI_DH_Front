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
  const { removeFromFavs, addToFavs, state } = useAuthContext();
  const { onRemoveFromFavs, onAddToFavs } = useAuthStore();
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    addToFavs(product);
    //onAddToFavs(product.id, state.uid)
  };
  const handleRemoveFromFavorites = () => {
    removeFromFavs(product.id);
    //onRemoveFromFavs(product.id, state.uid)
  };

  return (
    <Card className="flex w-full flex-col p-4 duration-300 hover:shadow-xl sm:w-[400px] lg:w-[500px] ">

      <div className="flex flex-col items-end mb-2">
        <ShareButton />
      </div>

      <div className="flex items-center justify-center">
        <img
          src={product.imagenes[0] ? product.imagenes[0].imageUrl : '/img/drone2.webp'}
          className="h-[260px] w-full cursor-pointer object-contain"
          onClick={() => navigate('/detalle/' + product.id)}
        />
      </div>

      <div className="border"></div>

      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="mt-[5px] flex items-center text-lg">
            <span>{product.name}</span>
            {state.status === "authenticated" 
              ? isFav 
                ? 
                <MdFavorite
                  className="ml-2 cursor-pointer text-xl text-red-600 duration-300"
                  onClick={() => handleRemoveFromFavorites()}
                />
               : 
                <MdFavoriteBorder
                  className="ml-2 cursor-pointer text-xl text-yellow-600 duration-300"
                  onClick={() => handleAddToFavorites()}
                />
             : "" }
          </CardTitle>

          <CardDescription className="text-lg">
            {'$' + product.price + ' /Diario'}
          </CardDescription>
        </div>

        <div className="mt-2 flex flex-col items-end sm:mt-0">
          <span>⭐{product.rating}</span>
        </div>
      </CardHeader>

      {/* <PrimaryButton
        onClick={() => navigate('/detalle/' + product.id)}
      >
        Reservar
      </PrimaryButton> */}
    </Card>
  );
}
