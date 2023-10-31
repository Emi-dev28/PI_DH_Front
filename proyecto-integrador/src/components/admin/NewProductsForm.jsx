import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PrimaryButton from "../PrimaryButton";

NewProductsForm.propTypes = {
  newProduct: PropTypes.object.isRequired,
  setNewProduct: PropTypes.func,
  submitAgregarProducto: PropTypes.func,
  subirImagenInput: PropTypes.func,
};

export default function NewProductsForm({
  newProduct,
  setNewProduct,
  submitAgregarProducto,
  subirImagenInput,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center pt-4">
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-2xl">Panel de administración</h2>

        <div className="flex gap-x-2">
          <div className="flex flex-col gap-y-4 border-2 border-slate-100 rounded-lg p-7 ">
            <Input
              className=""
              type="text"
              placeholder="Nombre del producto"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <Textarea
              className=""
              placeholder="Descripción"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />

            <Input
              className=""
              type="text"
              placeholder="Precio"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <Input
              className=""
              type="text"
              placeholder="Categoría"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />

            <Input
              className=""
              type="text"
              placeholder="Cantidad"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
            />

            <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
              <Label htmlFor="picture">Subir imágenes</Label>
              <Input
                className="hover:bg-slate-700"
                id="picture"
                type="file"
                multiple
                onChange={subirImagenInput}
              />
            </div>

            <PrimaryButton onClick={() => submitAgregarProducto(newProduct)}>
              Agregar producto
            </PrimaryButton>
          </div>

          <div>
            <img
              src="/img/contactus2.webp"
              alt=""
              className="h-[420px] mt-6 border-0 rounded-xl"
            />
          </div>
        </div>

        <Button
          className="text-lg bg-indigo-600 text-white mt-2 hover:bg-cyan-500 w-2/3"
          onClick={() => navigate("/admin/listado-productos")}
          // onClick={() => agregarProducto(newProduct)}
        >
          Ir a la lista de productos
        </Button>
      </div>
    </div>
  );
}
