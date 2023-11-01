import { MdHome } from "react-icons/md"
import { Link } from "react-router-dom"


export const AuthLayout = ({ children, title = "" }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-rose-950">

            <div className="flex flex-col mx-4">

                <Link to={"/"} className="flex items-center justify-end">
                    <span className="text-white">Regresar al inicio</span>
                    <MdHome className="text-white text-xl ml-[2px]" />
                </Link>

                <div className="bg-white p-4 border-none rounded-lg w-[450px]">
                    <h3 className="mb-4 text-2xl">{title}</h3>
                    {children}
                </div>

            </div>
            
        </div>
    )
}
