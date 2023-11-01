import { useToast } from "@/components/ui/use-toast"
import { useAuthContext } from "../useAuthContext"

//TODO: PONER LOS ENDPOINT CORRECTAMENTE
const URL = ""

export const useAuthStore = () => {

    const { loginUser, logoutUser, checkingAuthentication, state } = useAuthContext()
    const { status, name, errorMessage } = state

    const { toast } = useToast();


    //* Login
    const loginWithEmailAndPassword = async ({ email, password }) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        }

        try {

            const resp = await fetch(URL + "/auth/login", requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))

            loginUser(data)

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Error en la autenticación", variant: "destructive" })
        }

    }
    //************************************

    //* Registro
    const registeringUser = async ({ name, lastname, email, password }) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                email: email,
                password: password
            })
        }

        try {

            const resp = await fetch(URL + "/auth/login", requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))

            loginUser(data)

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Error en el registro", variant: "destructive" })
        }

    }
    //*****************************

    //* Revisar token para mantener sesión o cerrarla
    const checkAuthToken = async () => {
        const token = localStorage.getItem("token")
        if (!token) return logoutUser()

        const requestBody = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "token": token
            },
        }

        try {
            const resp = await fetch(URL + "/auth/validate", requestBody)
            const data = await resp.json()
            localStorage.setItem("token", JSON.stringify(data.token))

            loginUser(data)

        } catch (error) {
            console.log(error);
            logoutUser()
        }
    }
    //******************************** 

    //* Cerrar sesión
    const logoutSession = async () => {

        console.log("Cerrando sesión");
        // localStorage.clear()
        // logoutUser()

        //TODO: request para cerrar sesión

    }


    return {
        //* state
        status, name, errorMessage,

        //* Methods
        registeringUser,
        loginWithEmailAndPassword,
        logoutSession,
        checkAuthToken
    }
}



