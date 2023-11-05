import { Administracion } from "@/pages/privatePages/Administracion";
import Home from "../pages/publicPages/Home";
import { Route, Routes } from "react-router-dom";
import { Detalle } from "@/pages/publicPages/Detalle";
import ListadoProductos from "@/pages/privatePages/ListadoProductos";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegisterPage";
import { UserEditionPage } from "@/pages/privatePages/UserEditionPage";
import { AdminPrivateRoutes } from "./AdminPrivateRoutes";
import { UserPrivateRoutes } from "./UserPrivateRoutes";
import { AdminPermissionPage } from "@/pages/privatePages/AdminPermissionPage";


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
            <Route path="/listado-productos" element={<ListadoProductos />} />
            <Route path="/permission" element={<AdminPermissionPage />} />
          </Routes>
        </AdminPrivateRoutes>
      } />

      {/* User private routes: solo se puede entrar si el rol es 1*/}
      <Route path="/user/*" element={
        <UserPrivateRoutes>
          <Routes>
            <Route path="/edit" element={<UserEditionPage />} />
          </Routes>
        </UserPrivateRoutes>
      } />
    </Routes>
  );
};
