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
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "@/context/DataContext";

export const Detalle = () => {

  const { state } = useDataContext();

  const navigate = useNavigate();

  //* Esto hay que utilizarlos para obtener los datos específicos de cada producto
  //* guardados en la Api, pero todavía no la tenemos
  const { nombre } = useParams()


  return (
    <div className=" m-5 rounded-lg">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Detalle del producto</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>


      <Table>

        <TableCaption>High Technologie Software Company</TableCaption>

        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">ID</TableHead> */}
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>xxxxx</TableHead>
            <TableHead>xxxxx</TableHead>
            <TableHead>xxxxx</TableHead>
            <TableHead>xxxxx</TableHead>
          </TableRow>
        </TableHeader>


        <TableBody>
          {
            state.data.map(producto => (

              <TableRow key={producto.nombre}>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.descripcion}</TableCell>
                <TableCell>xxxxx</TableCell>
                <TableCell>xxxxx</TableCell>
                <TableCell>xxxxx</TableCell>
                <TableCell>xxxxx</TableCell>
              </TableRow>
            ))
          }
        </TableBody>

      </Table>

      {/* Renderizar las imágenes y un Link que lleve a una página aparte <GaleriaDeImagenes/> */}
      {/* <div>
        <img src={state.data[0].img} alt="" />
      </div> */}

    </div>
  )
};
