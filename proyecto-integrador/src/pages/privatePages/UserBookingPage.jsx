import { useAuthContext } from '@/context/authContext/useAuthContext';
import { useNavigate } from 'react-router-dom';

import { CancelBookAlert } from '@/components/book/CancelBookAlert';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const UserBookingPage = () => {
  
  const { state } = useAuthContext();

  return (
    <div className="mx-6 my-4 flex min-h-screen gap-x-2">
      <div className="flex min-w-[235px] flex-col justify-between border-r-[1px] border-r-red-200">
        <h2 className="text-2xl">Historial de Reservas</h2>
      </div>

      <Table>
        {state.book.length === 0 ? (
          <TableCaption className="mt-48 text-2xl">
            No tienes ninguna reserva.
          </TableCaption>
        ) : (
          <TableCaption>Historial de reservas.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Producto</TableHead>
            <TableHead>Fecha inicial</TableHead>
            <TableHead>Fecha límite</TableHead>
            <TableHead className="text-left">Precio</TableHead>
            <TableHead className="text-left">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {state.book.map((item) => (
            <TableRow key={item.product.id}>
              <TableCell className="p-3 flex">
                <img
                  src={
                    item.product.images
                      ? item.product.images[0].image
                      : '/img/icons/favicon_32x32.webp'
                  }
                  alt="product-img"
                  className="h-6 w-6 rounded-lg border-0 mr-2"
                />
                <span>{item.product.name}</span>
              </TableCell>
              <TableCell className="p-3">{item.date.from} </TableCell>
              <TableCell className="p-3">{item.date.to} </TableCell>
              <TableCell className="p-3 text-center">
                {item.product.price}{' '}
              </TableCell>
              <TableCell className="p-3 text-center">
                {/* Botón eliminar */}
                <CancelBookAlert productId={item.product.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
