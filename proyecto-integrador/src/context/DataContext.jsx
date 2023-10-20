import { createContext, useContext, useReducer } from "react";;

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

//* ESTADO INICIAL

const initialState = {
    data: []
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

    //*Función para agregar productos desde el administrador
    const agregarProducto = (data) => {
        //TODO Mostrar mensaje de nombre ya utilizado usando TOAST
        if (!state.data.some(item => item.nombre === data.nombre)) {
            dispatch({ type: "AGREGAR_PRODUCTO", payload: data })
        } return
    }
    //*Función para eliminar productos desde el administrador
    const borrarProducto = (nombre) => {
        if (!state.data.some(item => item.nombre === nombre)) return;
        dispatch({ type: "BORRAR_PRODUCTO", payload: nombre })
    }

    return (
        <DataContext.Provider value={{ state, agregarProducto, borrarProducto }}>
            {children}
        </DataContext.Provider>
    )
}

//* Función para utilizarlo sin llamar al useContext todo el tiempo. Así nos enseño Julián pero no es
//* estrictamente necesario.
export const useDataContext = () => useContext(DataContext)


