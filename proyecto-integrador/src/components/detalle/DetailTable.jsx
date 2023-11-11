import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const DetailTable = ({ product }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 bg-slate-200 border-white border-b-[1px]">
            Nombre
          </TableHead>
          <TableHead className="w-96">Descripción</TableHead>
          <TableHead className="bg-slate-200 border-white border-b-[1px]">
            Precio
          </TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead className="bg-slate-200 border-white border-b-[1px]">
            Cantidad
          </TableHead>
          <TableHead>Puntuación</TableHead>
        </TableRow>
      </TableHeader>

      <TableHeader>
        <TableRow>
          <TableHead className="w-32 bg-slate-200">{product.name}</TableHead>
          <TableHead className="w-1/3">{product.description}</TableHead>
          <TableHead className="bg-slate-200">{product.price}</TableHead>
          <TableHead>{product.category}</TableHead>
          <TableHead className="bg-slate-200">{product.quantity}</TableHead>
          <TableHead>{product.rating}</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
};
