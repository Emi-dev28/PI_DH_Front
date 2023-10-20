import { Administrador } from "@/pages/Administrador"
import { Home } from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import { Detalle } from "@/pages/Detalle"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home/>}></Route>
            <Route path="/detalle" element={<Detalle/>}></Route>
            <Route path="/administrador" element={<Administrador/>}></Route>
        </Routes>
    )
}
