import { Administracion } from "@/pages/Administracion";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "@/pages/Detalle";
import ListadoProductos from "@/pages/ListadoProductos";

//import { ThemeToggle } from "@/components/theme/theme-toogle"

export const AppRouter = () => {
  //const {theme} = useContext(ThemeToggle)
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<Home />}></Route>
      <Route path="/detalle/:id" element={<Detalle />}></Route>
      <Route
        path="/admin/listado-productos"
        element={<ListadoProductos />}
      ></Route>

      {/* Admin routes: */}
      <Route path="/admin" element={<Administracion />}></Route>
    </Routes>
  );
};
