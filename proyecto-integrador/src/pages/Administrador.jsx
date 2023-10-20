import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useDataContext } from '@/context/DataContext'



export const Administrador = () => {

  const { agregarProducto } = useDataContext()
  const [newData, setNewData] = useState({})


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col border-2 border-slate-100 rounded-lg	p-7'>

        <h2 className='text-2xl'>Panel de administración</h2>

        <Input
          className="my-5"
          type="text"
          placeholder="Título"
        />

        <Textarea
          className="mb-5"
          placeholder="Descripción del producto"
        />

        <Button
          className="text-lg bg-indigo-600 text-white"
          onClick={() => agregarProducto(newData)}
        >
          Agregar producto
        </Button>


      </div>
    </div>
  )
}
