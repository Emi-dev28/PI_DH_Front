import { Administrador } from "@/pages/Administrador"
import { Home } from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import { Detalle } from "@/pages/Detalle"
import { ListaDeProductos } from "@/pages/ListaDeProductos"
//import { ThemeToggle } from "@/components/theme/theme-toogle"

export const AppRouter = () => {

    //const {theme} = useContext(ThemeToggle)
    return (
        <div>
<<<<<<< HEAD
        <Routes>
            <Route path="/*" element={<Home/>}></Route>
            <Route path="/detalle" element={<Detalle/>}></Route>
            <Route path="/administrador" element={<Administrador/>}></Route>
            <Route path="/lista-productos" element={<ListaDeProductos/>}></Route>
        </Routes>
    
=======
            <Routes>
                <Route path="/*" element={<Home />}></Route>
                <Route path="/detalle" element={<Detalle />}></Route>
                <Route path="/administrador" element={<Administrador />}></Route>
                <Route path="/lista-productos" element={<ListaDeProductos />}></Route>
            </Routes>
>>>>>>> e41d257d5b1f24f8549752926ec30363f4203796
        </div>
    )
}
