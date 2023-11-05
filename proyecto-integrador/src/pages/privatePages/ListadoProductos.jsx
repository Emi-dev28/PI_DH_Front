import {
  TableCell,
  TableRow,
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/context/dataContext/useDataContext";
import { MdDelete } from "react-icons/md";

export default function ListadoProductos() {
  const { state, borrarProducto } = useDataContext();

  const productKeys = ['Nombre', 'Descripción', 'Precio', 'Cantidad', 'Categoría']

  const navigate = useNavigate();

  return (
    <div className=" m-5 w-screen rounded-lg">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Lista de productos en venta</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate("/admin")}
        >
          Regresar
        </Button>
      </div>

      <Table>
        <TableCaption>High Technologie Software Company</TableCaption>

        <TableHeader>
          <TableRow>
            {productKeys.map((key, i) => <TableHead key={i}>{key}</TableHead>)}

          </TableRow>
        </TableHeader>

        <TableBody>
          {state.data.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="p-3">{product.name} </TableCell>
              <TableCell className="p-3">{product.description} </TableCell>
              <TableCell className="text-center p-3">{product.price} </TableCell>
              <TableCell className="text-center p-3">{product.quantity} </TableCell>
              <TableCell className="text-center p-3">{product.category} </TableCell>
              <TableCell className="text-center p-3">
                <Button variant="ghost" size="icon" onClick={() => borrarProducto(product.id)}>
                  <MdDelete className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
