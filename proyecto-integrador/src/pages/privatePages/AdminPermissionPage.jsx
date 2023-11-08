import { useEffect, useState } from "react"
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"


export const AdminPermissionPage = () => {

    const { editUserInfo } = useAuthStore()
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newRol, setNewRol] = useState({})

    //* Traer todos los usuarios
    const fetchForUsers = async () => {
        setIsLoading(true)
        try {
            const resp = fetch("http://localhost:8080/api/v1/users")
            const data = resp.json()

            setUsers(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }


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

                            ? <Progress value={66} />

                            : users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">1</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.lastname}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <select
                                            className={`text-lg font-semibold px-2 border-none rounded-sm ${user.role === "1" ? "bg-green-300" : "bg-yellow-400"}`}
                                            name="select"
                                            defaultValue={user.role}
                                            value={newRol}
                                            onChange={({ target }) => setNewRol({ id: user.id, role: target.value })}
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
