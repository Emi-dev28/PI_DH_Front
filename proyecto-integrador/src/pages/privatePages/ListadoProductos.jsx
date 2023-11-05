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

  const productKeys = ['Nombre', 'Descripción', 'Categoría', 'Precio', 'Cantidad']

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-2xl">Lista de productos</span>

        <Button
          className="text-base bg-primary text-white"
          onClick={() => navigate("/admin")}
        >
          Crear
        </Button>
      </div>

      <Table>
        <TableCaption>DH Technology</TableCaption>

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
              <TableCell className="p-3">{product.category} </TableCell>
              <TableCell className="text-center p-3">{product.price} </TableCell>
              <TableCell className="text-center p-3">{product.quantity} </TableCell>
              <TableCell className="text-center p-3">
                <Button variant="ghost" size="icon" onClick={() => borrarProducto(product.id)}>
                  <MdDelete className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
