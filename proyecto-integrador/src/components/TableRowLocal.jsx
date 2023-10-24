import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "./ui/button";

export const TableRowLocal = ({producto, borrarProducto}) => {
    return (

        <TableRow>
            <TableCell>{producto.nombre}</TableCell>
            <TableCell>{producto.descripcion}</TableCell>
            <TableCell className="text-right">
                <Button
                    className="text-lg bg-red-600 text-white hover:bg-red-500"
                    onClick={() => borrarProducto(producto.nombre)}
                >
                    Borrar
                </Button>
            </TableCell>
        </TableRow>

    )
}
