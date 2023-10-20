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
      case 'AGREGAR-PRODUCTO':
        return { ...state, favs: [...state.favs, action.payload] };
  
      case 'REMOVER-PRODUCTO':
        return { ...state, favs: state.favs.filter(elem => elem.id !== action.payload) };
  
      default:
        return state;
    }
  };

//* CONTEXT API
const DataContext = createContext()

export const DataContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

//* Función para utilizarlo sin llamar al useContext todo el tiempo. Así nos enseño Julián pero no es
//* estrictamente necesario.
export const useDataContext = () => useContext(DataContext)


