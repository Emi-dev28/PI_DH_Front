import { useEffect } from "react";
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";

import { Administracion } from "@/pages/Administracion";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "@/pages/Detalle";
import ListadoProductos from "@/pages/ListadoProductos";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegisterPage";
import { UserEditionPage } from "@/pages/UserEditionPage";


export const AppRouter = () => {

  //TODO: En principio el validación de sesión iría acá, pero podría cambiar el lugar
  //TODO: Manjear el acceso a las rutas dependiente del status
  // const { status, checkAuthToken } = useAuthStore()

  // useEffect(() => {
  //   checkAuthToken()
  // }, [])



  return (
    <Routes>
      {/* Authentication */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Public routes */}
      <Route path="/*" element={<Home />} />
      <Route path="/detalle/:id" element={<Detalle />} />
      <Route path="/admin/listado-productos" element={<ListadoProductos />} />
      <Route path="/user/edit" element={<UserEditionPage />} />

      {/* Admin routes: */}
      <Route path="/admin" element={<Administracion />} />
    </Routes>
  );
};
