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
import { useDataContext } from "@/context/dataContext/useDataContext";
import { MdDelete } from "react-icons/md";
import { DialogCreateProduct } from "../../components/admin/DialogCreateProduct";

export default function ListadoProductos() {
  const { products, borrarProducto } = useDataContext();

  const productKeys = [
    "Nombre",
    "Descripción",
    "Categoría",
    "Precio",
    "Cantidad",
  ];

  return (
    <>
      {/* Dialog Form Crear Producto */}
      <div className="flex justify-between items-center p-5 pb-8">
        <span className="text-2xl">Lista de productos</span>
        <DialogCreateProduct />
      </div>

      {/* Tabla de productos */}
      <Table>
        <TableCaption>DH Technology</TableCaption>

        <TableHeader>
          <TableRow>
            {productKeys.map((key, i) => (
              <TableHead key={i}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="p-3">{product.name} </TableCell>
              <TableCell className="p-3">{product.description} </TableCell>
              <TableCell className="p-3">{product.category} </TableCell>
              <TableCell className="text-center p-3">
                {product.price}{" "}
              </TableCell>
              <TableCell className="text-center p-3">
                {product.quantity}{" "}
              </TableCell>
              <TableCell className="text-center p-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => borrarProducto(product.id)}
                >
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
