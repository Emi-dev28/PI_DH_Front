
import { useEffect } from "react"
import { useDataContext } from "../useDataContext"

//TODO: PONER LOS ENDPOINT CORRECTAMENTE
const URL = "http://localhost:8080/api/v1"

export const useDataStore = () => {

    const { state, handleFetchProducts, handleLoading, handleFetchCategories } = useDataContext()
    const { status } = state

    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForProducts = async () => {
        handleLoading()

        try {
            const resp = await fetch(URL + "/productos")
            const data = await resp.json()
            handleFetchProducts(data)

        } catch (error) {
            console.log(error);
        }
    }

    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForCastegories = async () => {
        handleLoading()

        try {
            const resp = await fetch(URL + "/categorias")
            const data = await resp.json()

            handleFetchCategories(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchForProducts()
    }, [])

    return {
        //* state
        state,
        status,

        //* Methods
        fetchForProducts,
        fetchForCastegories
    }
}