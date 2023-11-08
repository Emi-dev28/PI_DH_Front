import PrimaryButton from '@/components/custom-ui/PrimaryButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserEditionPage = () => {

    const { state, editUserInfoByUser } = useAuthStore()

    const navigate = useNavigate()
    const [userData, setUserData] = useState({id: state.uid})



    return (
        <div className="flex justify-center pt-4">
            <div className="w-1/2 flex flex-col items-center">
                <h2 className="text-2xl">Editar datos de usuario</h2>

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
                                setUserData({ ...userData, lastname: e.target.value })
                            }
                        />

                        <Label>Email actual: {state.email}</Label>
                        <Input
                            className=""
                            type="text"
                            placeholder="Nuevo email"
                            value={userData.email}
                            onChange={(e) =>
                                setUserData({ ...userData, email: e.target.value })
                            }
                        />

                        <Button
                            className="bg-indigo-700"
                            //onClick={() => editUserInfoByUser(userData)}
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
