import SidebarMenu from "@/components/admin/SidebarMenu"
import { useAuthContext } from "@/context/authContext/useAuthContext"
import { Navigate } from "react-router-dom"

export const AdminPrivateRoutes = ({ children }) => {

    const { state } = useAuthContext()


    return (state.rol === 2)
        ? <div className="flex">
            <SidebarMenu />
            {children}
        </div>
        : <Navigate to={"/"} />
}
