
import { useDataContext } from "../useDataContext"

//TODO: PONER LOS ENDPOINT CORRECTAMENTE
const URL = "http://localhost:8080/api/v1"

export const useAuthStore = () => {

    const { state, handleFetchProducts, handleLoading, handleFetchCategories } = useDataContext()
    const { status, name } = state

    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForProducts = () => {
        handleLoading()

        try {
            const resp = fetch(URL + "/productos")
            const data = resp.json()

            handleFetchProducts(data)

        } catch (error) {
            console.log(error);
        }
    }

    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForCastegories = () => {
        handleLoading()

        try {
            const resp = fetch(URL + "/categorias")
            const data = resp.json()

            handleFetchCategories(data)

        } catch (error) {
            console.log(error);
        }
    }

    return {
        //* state
        state,
        status,

        //* Methods
        fetchForProducts,
        fetchForCastegories
    }
}