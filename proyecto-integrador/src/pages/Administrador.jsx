import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useDataContext } from '@/context/DataContext'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '@uidotdev/usehooks'



export const Administrador = () => {

  //** Función para capturar el width y saber si se está accediendo desde celular
  const size = useWindowSize()

  const { agregarProducto } = useDataContext()
  const [newData, setNewData] = useState({
    nombre: "",
    descripcion: "",
    img: ""
  })

  const navigate = useNavigate()


  if (size.width < 1024) {
    //*LO QUE SE DEVUELVE PARA CELULAR
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col border-2 border-slate-100 rounded-lg	p-7'>

          <h2 className='text-2xl'>No disponible para celular</h2>

        </div>
      </div>
    )
  } else {
    //*LO QUE SE DEVUELVE PARA ESCRITORIO
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col border-2 border-slate-100 rounded-lg	p-7'>

          <h2 className='text-2xl'>Panel de administración</h2>

          <Input
            className="my-5"
            type="text"
            placeholder="Nombre del producto"
            value={newData.nombre}
            onChange={(e) => setNewData({ ...newData, nombre: e.target.value })}
          />

          <Textarea
            className="mb-5"
            placeholder="Descripción del producto"
            value={newData.descripcion}
            onChange={(e) => setNewData({ ...newData, descripcion: e.target.value })}
          />

          <Button
            className="text-lg bg-indigo-600 text-white hover:bg-indigo-500"
            onClick={() => agregarProducto(newData)}
          >
            Agregar producto
          </Button>

          <hr className='border-cyan-100 mt-5' />

          <Button
            className="text-lg bg-cyan-600 text-white mt-5 hover:bg-cyan-500"
            onClick={() => navigate("/lista-productos")}
          // onClick={() => agregarProducto(newData)}
          >
            Ir a la lista de productos
          </Button>


        </div>
      </div>
    )
  }
}
