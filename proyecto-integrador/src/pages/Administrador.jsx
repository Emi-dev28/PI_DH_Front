import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import { NewProductsForm } from "@/components/NewProductsForm";

import { useDataContext } from "@/context/useDataContext";
import { subirImagen } from "@/helpers/subirImagen";

const initialProduct = {
  id: "",
  name: "",
  description: "",
  price: "",
  category: "",
  quantity: "",
  img: ""
};

export const Administrador = () => {
  //** Función para capturar el width y saber si se está accediendo desde celular
  const size = useWindowSize();

  const { state, agregarProducto } = useDataContext();
  const [newProduct, setNewProduct] = useState(initialProduct);


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
        <NewProductsForm 
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        submitAgregarProducto={submitAgregarProducto}
        subirImagenInput={subirImagenInput}
        />
    );
  }
};
