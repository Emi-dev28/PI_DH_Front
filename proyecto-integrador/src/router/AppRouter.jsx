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
import { AdminPrivateRoutes } from "./AdminPrivateRoutes";
import { UserPrivateRoutes } from "./UserPrivateRoutes";


export const AppRouter = () => {


  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<Home />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/detalle/:id" element={<Detalle />} />


      {/* Admin private routes: solo se puede entrar si el rol es 2*/}
      <Route path="/admin/*" element={
        <AdminPrivateRoutes>
          <Routes>
            <Route path="/" element={<Administracion />} />
            <Route path="/listado-productos" element={<ListadoProductos />} />
          </Routes>
        </AdminPrivateRoutes>
      } />

      {/* User private routes: solo se puede entrar si el rol es 1*/}
      <Route path="/user/*" element={
        <UserPrivateRoutes>
          <Routes>
            <Route path="/edit" element={<UserEditionPage/>}/>
          </Routes>
        </UserPrivateRoutes>
      } />
    </Routes>
  );
};
