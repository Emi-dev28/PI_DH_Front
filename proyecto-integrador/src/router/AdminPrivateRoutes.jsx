import SidebarMenu from "@/components/admin/SidebarMenu";
import { useAuthContext } from "@/context/authContext/useAuthContext";
import { useWindowSize } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

AdminPrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default function AdminPrivateRoutes(props) {
  const { state } = useAuthContext();

  //** Función para capturar el width y saber si se está accediendo desde celular
  const size = useWindowSize();

  return state.rol === 2 ? (
    size.width > 900 ? (
      <div className="flex">
        <SidebarMenu />
        <main className="w-screen m-5">{props.children}</main>
      </div>
    ) : (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col border-2 border-slate-100 rounded-lg	p-7">
          <h2 className="text-2xl">No disponible para celular</h2>
        </div>
      </div>
    )
  ) : (
    <Navigate to={"/"} />
  );
}
