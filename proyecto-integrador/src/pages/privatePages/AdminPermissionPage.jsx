import { useEffect, useState } from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"


export const AdminPermissionPage = () => {

    const [newRol, setNewRol] = useState({})
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()

    //* Traer usuarios de la base de datos
    const fetchUserData = async () => {

        setIsLoading(true)

        const resp = await fetch("/api/v1/users")
        const data = await resp.json()

        setUserData(data)
        setIsLoading(false)
    }

    //* Editar con petición PUT
    //* Esta petición probablemente esté mal hecha, revisar qué recibe el endpoint y qué información enviar
    const editUserInfo = async () => {

        const requestBody = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRol)
        }

        try {
            const resp = await fetch("/api/v1/user/edit", requestBody)
            const data = await resp.json()

            toast({ description: "Se han dado permisos de admin al usuario" });
        } catch (error) {
            console.log(error);
            toast({ description: "No se ha podido realizar la acción", variant: "destructive" })
        }

    }

    // useEffect(() => {
    //   fetchUserData()
    // }, [])



    return (

        <div className="p-2">
            <h2 className="text-3xl mt-4">Usuarios registrados</h2>

            <Table className="mt-2">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Apellido</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rol</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {
                        isLoading

                            ? <Progress value={33} />

                            : userData.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">1</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.lastname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <select
                                            className={`text-lg font-semibold px-2 border-none rounded-sm ${user.rol === "1" ? "bg-green-300" : "bg-yellow-400"}`}
                                            name="select"
                                            defaultValue={user.rol}
                                            value={newRol}
                                            onChange={({ target }) => setNewRol({ id: user.id, rol: target.value })}
                                        >
                                            <option value="1" className="bg-white">User</option>
                                            <option value="2" className="bg-white">Admin</option>
                                        </select>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>

        </div>
    )
}
