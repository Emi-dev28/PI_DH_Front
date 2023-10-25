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
import products from "@/mocks/products.json";


export const Detalle = () => {

  const { state } = useDataContext();

  const navigate = useNavigate();

  //* Esto hay que utilizarlos para obtener los datos específicos de cada producto
  //* guardados en la Api, pero todavía no la tenemos
  const { nombre } = useParams()


  return (
    <div>

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
            <TableHead className="w-32 bg-slate-200 border-white border-b-[1px]">Nombre</TableHead>
            <TableHead className="w-96">Descripción</TableHead>
            <TableHead className="bg-slate-200 border-white border-b-[1px]">Categoría</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead className="bg-slate-200 border-white border-b-[1px]">Cantidad</TableHead>
            <TableHead>Puntuación</TableHead>
          </TableRow>
        </TableHeader>

        <TableHeader>
          <TableRow>
            <TableHead className="w-32 bg-slate-200">{products[0].name}</TableHead>
            <TableHead className="w-1/3">{products[0].description}</TableHead>
            <TableHead className="bg-slate-200">{products[0].price}</TableHead>
            <TableHead>{products[0].category}</TableHead>
            <TableHead className="bg-slate-200">{products[0].quantity}</TableHead>
            <TableHead>{products[0].rating}</TableHead>
          </TableRow>
        </TableHeader>

      </Table>

      {/* Renderizar las imágenes y un Link que lleve a una página aparte <GaleriaDeImagenes/> */}
      {/* <div>
        <img src={state.data[0].img} alt="" />
      </div> */}

    </div>
  )
};
