import { Administrador } from "@/pages/Administrador"
import { Home } from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import { Detalle } from "@/pages/Detalle"
import { ListaDeProductos } from "@/pages/ListaDeProductos"
import Footer from "@/components/Footer"
//import { ThemeToggle } from "@/components/theme/theme-toogle"

export const AppRouter = () => {

    //const {theme} = useContext(ThemeToggle)
    return (
        <div>
        <Routes>
            <Route path="/*" element={<Home/>}></Route>
            <Route path="/detalle" element={<Detalle/>}></Route>
            <Route path="/administrador" element={<Administrador/>}></Route>
            <Route path="/lista-productos" element={<ListaDeProductos/>}></Route>
        </Routes>
        <Footer/>
        </div>
    )
}
