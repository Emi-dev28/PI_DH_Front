import PrimaryButton from '@/components/custom-ui/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export const UserBookingPage = () => {


    const navigate = useNavigate()
   

    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2 flex flex-col items-center ">

                <div className="flex justify-center items-center gap-x-2">

                    <div className="flex flex-col min-w-[330px] gap-y-4 border-2 border-slate-100 rounded-lg p-7 ">

                        <h2 className="text-2xl place-self-start">Historial de Reservas</h2>

                        
                        

                        <PrimaryButton onClick={() => navigate("/")}>
                            Salir
                        </PrimaryButton>
                    </div>

                    <div>
                        <img
                            src="/img/girlEdit.svg"
                            alt=""
                            className="h-[420px] mt-6 border-0 rounded-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
