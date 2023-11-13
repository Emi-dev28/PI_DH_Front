import { useDataContext } from "@/context/dataContext/useDataContext";
import { useDataStore } from "@/context/dataContext/hooks/useDataStore";
import { TableCell, TableRow, Table, TableCaption, TableHead, TableHeader, TableBody } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

export default function ListadoProductos() {
  const { categories, borrarCategoria } = useDataContext();
  const { state } = useDataStore()

  const categoryKeys = ["Titulo", "Descripción", "Imagen"];

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center p-5 pb-8">
        <span className="text-2xl">Lista de categorías</span>

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
            {categoryKeys.map((key, i) => (
              <TableHead key={i}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            state.isLoading
              ? <TableRow>
                <TableCell className="text-2xl">Cargando...</TableCell>
                </TableRow>
              : categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="p-3">{category.name} </TableCell>
                  <TableCell className="p-3">{category.description} </TableCell>
                  <TableCell className="p-3">
                    <img
                      src={category.image}
                      className="h-14"
                      alt="Imagen categoría"
                    />
                  </TableCell>
                  <TableCell className="text-center p-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => borrarCategoria(category.id)}
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
