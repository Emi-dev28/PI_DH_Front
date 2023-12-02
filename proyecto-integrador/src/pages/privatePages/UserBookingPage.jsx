import PrimaryButton from '@/components/custom-ui/PrimaryButton';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';

export const UserBookingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-x-2">
      <div className="flex min-w-[330px] flex-col gap-y-4 rounded-lg border-2 border-slate-100 p-7 ">
        <h2 className="place-self-start text-2xl">Historial de Reservas</h2>

        <PrimaryButton onClick={() => navigate('/')}>Salir</PrimaryButton>
      </div>

      <Table>
        <TableCaption>Historial de reservas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Producto</TableHead>
            <TableHead>Fecha inicial</TableHead>
            <TableHead>Fecha límite</TableHead>
            <TableHead className="text-left">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Nombre</TableCell>
            <TableCell>----</TableCell>
            <TableCell>----</TableCell>
            <TableCell className="text-left">$---</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
