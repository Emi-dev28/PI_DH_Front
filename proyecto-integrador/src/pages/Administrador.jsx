import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDataContext } from "@/context/useDataContext";
import { Label } from "@/components/ui/label";
import { subirImagen } from "@/helpers/subirImagen";

const initialProduct = {
  id: "",
  name: "",
  description: "",
  img: "",
};

export const Administrador = () => {
  //** Función para capturar el width y saber si se está accediendo desde celular
  const size = useWindowSize();

  const { state, agregarProducto } = useDataContext();
  const [newProduct, setNewProduct] = useState(initialProduct);

  const navigate = useNavigate();

  //* Función para subir imágenes a Cloudinary y colocarlas en el state local para luego enviarlas al reducer
  const subirImagenInput = async ({ target }) => {
    if (target.files === 0) return;

    //* Subir varias imágenes al mismo tiempo. Guardo todas las promesas en un arreglo.
    const promesasDeImagenesParaSubir = [];
    for (const file of target.files) {
      promesasDeImagenesParaSubir.push(subirImagen(file));
    }
    //* El Promise.all viene ya ej javascript y me sirve para disparar múltiples promesas de forma simultánea
    const imagenesUrls = await Promise.all(promesasDeImagenesParaSubir);

    setNewProduct({ ...newProduct, img: imagenesUrls });
  };

  //* Función para resetear los inputs una vez hecho el submit
  const submitAgregarProducto = (newProduct) => {
    // Buscamos el id más alto de los productos existentes
    const higherIdProducts = Math.max(
      ...state.data.map((product) => product.id)
    );

    // Hacemos una copia del producto creado y le agregamos el id más alto + 1 para que no coincida con el id de algún producto existente.
    const newProductWithId = { ...newProduct, id: higherIdProducts + 1 };

    // Agregamos el nuevo producto con su id y reiniciamos el producto a crearse
    agregarProducto(newProductWithId);
    setNewProduct(initialProduct);
  };

  if (size.width < 1024) {
    //*LO QUE SE DEVUELVE PARA CELULAR
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col border-2 border-slate-100 rounded-lg	p-7">
          <h2 className="text-2xl">No disponible para celular</h2>
        </div>
      </div>
    );
  } else {
    //*LO QUE SE DEVUELVE PARA ESCRITORIO
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col border-2 border-slate-100 rounded-lg	p-7">
          <h2 className="text-2xl">Panel de administración</h2>

          <Input
            className="my-5"
            type="text"
            placeholder="Nombre del producto"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />

          <Textarea
            className="mb-5"
            placeholder="Descripción del producto"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />

          <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
            <Label htmlFor="picture">Subir imágenes</Label>
            <Input
              className="hover:bg-slate-700"
              id="picture"
              type="file"
              multiple
              onChange={subirImagenInput}
            />
          </div>

          <Button
            className="text-lg bg-indigo-600 text-white hover:bg-indigo-500"
            onClick={() => submitAgregarProducto(newProduct)}
          >
            Agregar producto
          </Button>

          <hr className="border-cyan-100 mt-5" />

          <Button
            className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
            onClick={() => navigate("/lista-productos")}
            // onClick={() => agregarProducto(newProduct)}
          >
            Ir a la lista de productos
          </Button>
        </div>
      </div>
    );
  }
};
