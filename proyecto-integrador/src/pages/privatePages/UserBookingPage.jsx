import PrimaryButton from '@/components/custom-ui/PrimaryButton'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"



export const UserBookingPage = () => {

   
  
   

    return (


    <div className="flex justify-center items-center gap-x-2">
        <div className="flex flex-col min-w-[330px] gap-y-4 border-2 border-slate-100 rounded-lg p-7 ">
            <h2 className="text-2xl place-self-start">Historial de Reservas</h2>  

             <PrimaryButton onClick={() => navigate("/")}>
                Salir
             </PrimaryButton>
        </div>

                    <Table>
                    <TableCaption>Historial de reservas.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Producto</TableHead>
                        <TableHead>Fecha inicial</TableHead>
                        <TableHead>Fecha límite</TableHead>
                        <TableHead className="text-left">Precio</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium">Nombre</TableCell>
                        <TableCell>----</TableCell>
                        <TableCell>----</TableCell>
                        <TableCell className="text-left">$---</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>                   
        </div>

            
        
    )
}
