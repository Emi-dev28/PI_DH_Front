import { createContext, useContext, useEffect, useReducer } from "react";;
import { useToast } from "@/components/ui/use-toast"

//* EN ESTE FUNCTIONAL COMPONENT MANEJAMOS EL ESTADO Y EL CONTEXT, PROBABLEMENTE TAMBIÉN
//* LA CONEXIÓN A BASE DE DATOS PARA RECUPERAR LA DATA Y LAS FUNCIONES PRINCIPALES.
//* EL FETCH PARA TRAER LA DATA SE PUEDE HACER APARTE CON UN CUSTOM HOOK, QUE ES LO QUE SE SUELE HACER.
//* TAMBIÉN PODRÍAMOS TRABAJAR CON useState Y NO useReducer, VEMOS.

//*****************
//***************
//************
//**********
//********
//******

//* GUARDANDO LA DATA EN EL LOCALSTORAGE PROVISORIAMENTE SOLO PARA HACER ARRANCAR AL HOME, LUEGO HAY QUE CONECTAR AL BACK

const guardarProductoEnStorage = (producto) => {
    localStorage.setItem("productos", JSON.stringify(producto));
}

const productosGuardados = JSON.parse(localStorage.getItem("productos"))
const iniciarStateDeProductos = productosGuardados ? productosGuardados : []

//* ESTADO INICIAL

const initialState = {
    // isLoading: true,
    data: iniciarStateDeProductos
}

//* FUNCIÓN REDUCER PARA MANEJAR LA DATA, DESPUÉS VEMOS COMO INTEGRAMOS TODO.

const reducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO':
            return { ...state, data: [...state.data, action.payload] };

        case 'BORRAR_PRODUCTO':
            return { ...state, data: state.data.filter(elem => elem.nombre !== action.payload) };

        default:
            return state;
    }
};

//* CONTEXT API
export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    //* Alertas propias del shadcn
    const { toast } = useToast()

    //* Función para agregar productos desde el administrador
    const agregarProducto = (data) => {
        if (!state.data.some(item => item.nombre === data.nombre)) {
            dispatch({ type: "AGREGAR_PRODUCTO", payload: data })
            toast({ description: "El producto se ha guardado" })
        } else {
            toast({ description: "Este producto ya existe", variant: "destructive" })
        }
    }

    //* Función para eliminar productos desde el administrador
    const borrarProducto = (nombre) => {
        if (!state.data.some(item => item.nombre === nombre)) {
            toast({ description: "Este producto no existe", variant: "destructive" })
        } else {
            dispatch({ type: "BORRAR_PRODUCTO", payload: nombre })
            toast({ description: "Producto eliminado" })
        }
    }

    useEffect(() => {
        guardarProductoEnStorage(state.data)
    }, [state.data])


    return (
        <DataContext.Provider value={{ state, agregarProducto, borrarProducto }}>
            {children}
        </DataContext.Provider>
    )
}

//* Función para utilizarlo sin llamar al useContext todo el tiempo. Así nos enseño Julián pero no es
//* estrictamente necesario.
export const useDataContext = () => useContext(DataContext)


