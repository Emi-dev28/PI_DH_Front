import { useAuthContext } from "@/context/authContext/useAuthContext"
import { Navigate } from "react-router-dom"

export const AdminPrivateRoutes = ({ children }) => {

    const { state } = useAuthContext()


    return (state.rol === 2)
        ? children
        : <Navigate to={"/"}/>
}
