// Shadcn components
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// Context
import { useDataContext } from "@/context/useDataContext";
// React
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Detalle = () => {
  const { state: products } = useDataContext();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  //* Esto hay que utilizarlos para obtener los datos específicos de cada producto
  //* guardados en la Api, pero todavía no la tenemos
  const { id } = useParams();

  useEffect(() => {
    const selectedProductId = parseInt(id);

    const selectedProduct = products.data.find(
      (product) => product.id === selectedProductId
    );

    setProduct(selectedProduct);
  }, [id, products.data]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-3xl">Detalle del producto</span>

        <Button
          className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
          onClick={() => navigate(-1)}
        >
          Regresar
        </Button>
      </div>

      {product ? (
        <Table>
          {/* <TableCaption>High Technologie Software Company</TableCaption> */}

          <TableHeader>
            <TableRow>
              <TableHead className="w-32 bg-slate-200 border-white border-b-[1px]">
                Nombre
              </TableHead>
              <TableHead className="w-96">Descripción</TableHead>
              <TableHead className="bg-slate-200 border-white border-b-[1px]">
                Categoría
              </TableHead>
              <TableHead>Precio</TableHead>
              <TableHead className="bg-slate-200 border-white border-b-[1px]">
                Cantidad
              </TableHead>
              <TableHead>Puntuación</TableHead>
            </TableRow>
          </TableHeader>

          <TableHeader>
            <TableRow>
              <TableHead className="w-32 bg-slate-200">
                {product.name}
              </TableHead>
              <TableHead className="w-1/3">{product.description}</TableHead>
              <TableHead className="bg-slate-200">{product.price}</TableHead>
              <TableHead>{product.category}</TableHead>
              <TableHead className="bg-slate-200">{product.quantity}</TableHead>
              <TableHead>{product.rating}</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      ) : (
        <div className="ml-4 mt-10 text-2xl">El producto no existe</div>
      )}

      {/* Renderizar las imágenes y un Link que lleve a una página aparte <GaleriaDeImagenes/>  */}
      <div className="flex items-center mt-4">
        <div className="w-1/2">
          <img src="/img/drone2.png" alt="product-img" className="w-full border-0 rounded-lg" />
        </div>

        <div className="flex flex-wrap w-1/2 justify-center gap-4">
          <img src="/img/drone2.png" alt="product-img" className="w-[45%] border-0 rounded-lg" />
          <img src="/img/drone2.png" alt="product-img" className="w-[45%] border-0 rounded-lg" />
          <img src="/img/drone2.png" alt="product-img" className="w-[45%] border-0 rounded-lg" />
          <img src="/img/drone2.png" alt="product-img" className="w-[45%] border-0 rounded-lg" />
        </div>
      </div>

      <Button
        className="bg-gradient-to-b from-btnPink to-btnPinkDarker text-white 
        px-4 py-2 rounded-md mr-8 hover:text-gray-300 duration-400 focus:shadow-outline-grey shadow-xl
        place-self-end"
      >
        Ver galería de imágenes
      </Button>

    </div>
  );
};
