import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/context/useDataContext";
import TableRowLocal from "@/components/TableRowLocal";

export const ListaDeProductos = () => {
  const { state, borrarProducto } = useDataContext();

  const navigate = useNavigate();

  return (
    <div className=" m-5 rounded-lg">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Lista de productos en venta</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate("/administrador")}
        >
          Regresar
        </Button>
      </div>

      <Table>
        <TableCaption>High Technologie Software Company</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {state.data.map((product) => (
            <TableRowLocal
              key={product.id}
              product={product}
              handleClickDeleteProduct={borrarProducto}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
