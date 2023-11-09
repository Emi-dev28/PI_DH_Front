import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
//
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDataContext } from "@/context/dataContext/useDataContext";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  price: z.string().min(2, {
    message: "price must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "category must be at least 2 characters.",
  }),
  stock: z.string().min(1, {
    message: "stock must be at least 1 characters.",
  }),
});

export const DialogCreateProduct = () => {
  const { products, agregarProducto } = useDataContext();
  const [newProduct, setNewProduct] = useState({});

  //* Función para subir imágenes a Cloudinary y colocarlas en el state local para luego enviarlas al reducer
  /*const subirImagenInput = async ({ target }) => {
        if (target.files === 0) return;

        //* Subir varias imágenes al mismo tiempo. Guardo todas las promesas en un arreglo.
        const promesasDeImagenesParaSubir = [];
        for (const file of target.files) {
            promesasDeImagenesParaSubir.push(subirImagen(file));
        }
        //* El Promise.all viene ya ej javascript y me sirve para disparar múltiples promesas de forma simultánea
        const imagenesUrls = await Promise.all(promesasDeImagenesParaSubir);

        setNewProduct({ ...newProduct, img: imagenesUrls });
    };*/

  /*const submitAgregarProducto = (newProduct) => {
        // Buscamos el id más alto de los productos existentes
        const higherIdProducts = Math.max(
            ...products.map((product) => product.id)
        );

        // Hacemos una copia del producto creado y le agregamos el id más alto + 1 para que no coincida con el id de algún producto existente.
        const newProductWithId = { ...newProduct, id: higherIdProducts + 1 };

        // Agregamos el nuevo producto con su id y reiniciamos el producto a crearse
        agregarProducto(newProductWithId);
        setNewProduct(initialProduct);
    };*/

  // Form Dialog create product
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // createProduct({ email: values.email, password: values.password });
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-base bg-primary text-white">Crear</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo producto</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imágenes</FormLabel>
                  <FormControl className="hover:cursor-pointer">
                    <Input type="file" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Crear</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
