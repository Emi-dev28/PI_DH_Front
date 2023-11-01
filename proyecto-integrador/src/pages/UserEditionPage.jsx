import PrimaryButton from '@/components/custom-ui/PrimaryButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthContext } from '@/context/authContext/useAuthContext'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserEditionPage = () => {

    //* Quedan por hacer las peticiones PUT.
    //* Todas las request se hacen en el useAuthStore.js
    const { state } = useAuthContext()

    const navigate = useNavigate()
    const [userData, setUserData] = useState({})


    return (
        <div className="flex justify-center pt-4">
            <div className="w-1/2 flex flex-col items-center">
                <h2 className="text-2xl">Panel de edición</h2>

                <div className="flex gap-x-2 ">

                    <div className="flex flex-col min-w-[330px] gap-y-4 border-2 border-slate-100 rounded-lg p-7 ">
                        <Label>Nombre actual: {state.name}</Label>
                        <Input
                            className=""
                            type="text"
                            placeholder="Nuevo nombre"
                            value={userData.name}
                            onChange={(e) =>
                                setUserData({ ...userData, name: e.target.value })
                            }
                        />

                        <Label>Apellido actual: {state.lastname}</Label>
                        <Input
                            className=""
                            type="text"
                            placeholder="Nuevo apellido"
                            value={userData.lastname}
                            onChange={(e) =>
                                setUserData({ ...userData, price: e.target.value })
                            }
                        />

                        <Label>Email actual: {state.emial}</Label>
                        <Input
                            className=""
                            type="text"
                            placeholder="Nuevo email"
                            value={userData.email}
                            onChange={(e) =>
                                setUserData({ ...userData, category: e.target.value })
                            }
                        />

                        <Button
                            className="bg-indigo-700"
                            onClick={() => console.log("working")}
                        >
                            Editar
                        </Button>

                        <PrimaryButton onClick={() => navigate("/")}>
                            Salir
                        </PrimaryButton>
                    </div>

                    <div>
                        <img
                            src="/img/contactus2.webp"
                            alt=""
                            className="h-[420px] mt-6 border-0 rounded-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
