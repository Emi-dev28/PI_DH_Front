import {
  TableCell,
  TableRow,
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableBody,
} from "@/components/ui/table";
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
import { useNavigate } from "react-router-dom";
import { useDataContext } from "@/context/dataContext/useDataContext";
import { MdDelete } from "react-icons/md";
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ListadoProductos() {
  const { state, borrarProducto } = useDataContext();

  const productKeys = [
    "Nombre",
    "Descripción",
    "Categoría",
    "Precio",
    "Cantidad",
  ];

  const navigate = useNavigate();

  // Form Dialog create product
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // createProduct({ email: values.email, password: values.password });
    console.log(values);
  }

  return (
    <>
      <div className="flex justify-between items-center mb-3 mx-3">
        <span className="text-2xl">Lista de productos</span>
        {/* Dialog Form Crear Producto */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-base bg-primary text-white">Crear</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo producto</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
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
                        <Input placeholder="shadcn" {...field} />
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
          {state.data.map((product) => (
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
