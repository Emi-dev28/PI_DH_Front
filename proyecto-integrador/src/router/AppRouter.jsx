import { Administrador } from "@/pages/Administrador";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "@/pages/Detalle";
import { ListaDeProductos } from "@/pages/ListaDeProductos";
//import { ThemeToggle } from "@/components/theme/theme-toogle"

export const AppRouter = () => {
  //const {theme} = useContext(ThemeToggle)
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<Home />}></Route>
      <Route path="/detalle" element={<Detalle />}></Route>
      <Route path="/lista-productos" element={<ListaDeProductos />}></Route>

      {/* Admin routes: */}
      <Route path="/administrador" element={<Administrador />}></Route>
    </Routes>
  );
};
