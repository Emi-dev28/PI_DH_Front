
import { useState } from "react"
import { MdHome, MdInterests, MdMenu, MdSettings, MdShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/img/logo/logo-letters.svg";

export default function SidebarMenu() {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex flex-col h-screen p-3 bg-navColorDark shadow duration-700">
      <div
        className={open ? "w-72" : "w-18"}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between p-2">
            {open ? <img src={logo} alt="Logo" className="h-10 h w-auto object-contain mr-2" /> : null}

            <button onClick={() => setOpen(!open)}>
              <MdMenu className="w-7 h-7 text-primary" />
            </button>
          </div>

          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {/* HOME */}
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdHome className="w-6 h-6 text-primary" />
                  {open ? <span className="text-primary">Inicio</span> : null}
                </Link>
              </li>
              {/* LISTADO DE CATEGORÍAS */}
              <li className="rounded-sm">
                <Link
                  to="/listado-categorias"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdInterests className="w-6 h-6 text-primary" />
                  {open ? <span className="text-primary">Categorías</span> : null}
                </Link>
              </li>
              {/* LISTADO DE PRODUCTOS */}
              <li className="rounded-sm">
                <Link
                  to="/admin/listado-productos"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdShoppingBag className="w-6 h-6 text-primary" />
                  {open ? <span className="text-primary">Productos</span> : null}
                </Link>
              </li>
              {/* CONFIGURACIÓN */}
              <li className="rounded-sm">
                <Link
                  to="/settings"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdSettings className="w-6 h-6 text-primary" />
                  {open ? <span className="text-primary">Configuraciones</span> : null}

                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}