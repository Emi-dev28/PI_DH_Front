import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/context/DataContext";

export const ListaDeProductos = () => {
  //TODO
  const { state, borrarProducto } = useDataContext();

  const navigate = useNavigate();

  return (
    <div className=" m-5 rounded-lg">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Lista de productos en venta</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate("/administrador")}
          // onClick={() => agregarProducto(newData)}
        >
          Regresar
        </Button>
      </div>

      <Table>
        <TableCaption>High Technologie Software Company</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button
                className="text-lg bg-red-600 text-white hover:bg-red-500"
                //TODO borrar producto
                //TODO Mensaje de confirmación al eliminar producto, paquete TOAST
                // onClick={() => borrarProducto(nombre)}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button
                className="text-lg bg-red-600 text-white hover:bg-red-500"
                // onClick={() => navigate("/administrador")}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button
                className="text-lg bg-red-600 text-white hover:bg-red-500"
                // onClick={() => navigate("/administrador")}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button
                className="text-lg bg-red-600 text-white hover:bg-red-500"
                // onClick={() => navigate("/administrador")}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">
              <Button
                className="text-lg bg-red-600 text-white hover:bg-red-500"
                // onClick={() => navigate("/administrador")}
              >
                Borrar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
