import { Administracion } from "@/pages/Administracion";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "@/pages/Detalle";
import ListadoProductos from "@/pages/ListadoProductos";
import { LoginPage } from "@/auth/LoginPage";
import { RegisterPage } from "@/auth/RegisterPage";


export const AppRouter = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/auth/login" element={<LoginPage />}/>
      <Route path="/auth/register" element={<RegisterPage />}/>

      {/* Public routes */}
      <Route path="/*" element={<Home />}/>
      <Route path="/detalle/:id" element={<Detalle />}/>
      <Route
        path="/admin/listado-productos"
        element={<ListadoProductos />}
      />

      {/* Admin routes: */}
      <Route path="/admin" element={<Administracion />}/>
    </Routes>
  );
};
