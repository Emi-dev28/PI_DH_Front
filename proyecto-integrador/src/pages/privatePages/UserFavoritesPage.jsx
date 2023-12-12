import CardHome from '@/components/home/CardHome';
import { useAuthContext } from '@/context/authContext/useAuthContext';

export const UserFavoritesPage = () => {
  const { state } = useAuthContext();

  return (
    <div className="m-4">
      <h2 className="ml-16 text-3xl">Favoritos</h2>
      <div className="mb-6 mt-6 flex flex-wrap justify-center gap-x-32 gap-y-12">
        {state.favorites.length > 0 ? (
          state.favorites.map((fav) => (
            <CardHome
              key={fav.id}
              isFav={state.favorites.some((product) => product.id === fav.id)}
              product={fav}
            />
          ))
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="/img/sinfav-transp.webp"
              alt="robot"
              className="h-full w-full" // Ajusta el tamaño según tus necesidades
            />
          </div>
        )}
      </div>
    </div>
  );
};
