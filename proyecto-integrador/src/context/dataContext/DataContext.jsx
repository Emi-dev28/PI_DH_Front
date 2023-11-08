// React
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
// Shadcn components
import { useToast } from "@/components/ui/use-toast";
// Mock products
import products from "@/mocks/products.json";
// Mock categories
import categories from "@/mocks/categories.json";

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
  isLoading: false,
  data: products,
  categories: categories
};

//* FUNCIÓN REDUCER PARA MANEJAR LA DATA, DESPUÉS VEMOS COMO INTEGRAMOS TODO.

const reducer = (state, action) => {
  switch (action.type) {
    case "CARGAR_PRODUCTOS":
      return {
        ...state,
        isLoading: false,
        data: [action.payload]
      };

    case "CARGAR_CATEGORIAS":
      return {
        ...state,
        isLoading: false,
        categories: [action.payload]
      };

    case "AGREGAR_PRODUCTO":
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload]
      };

    case "BORRAR_PRODUCTO":
      return {
        ...state,
        data: state.data.filter((elem) => elem.id !== action.payload),
      };

    case "AGREGAR_CATEGORIA":
      return { ...state, categories: [...state.categories, action.payload] };

    case "BORRAR_CATEGORIA":
      return {
        ...state,
        categories: state.categories.filter((elem) => elem.id !== action.payload),
      };

    case "IS_LOADING":
      return { ...state, isLoading: true }

    default:
      return state;
  }
};

//* CONTEXT API
export const DataContext = createContext();

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //* Alertas propias del shadcn
  const { toast } = useToast();

  //* Función para cargar productos desde el back
  const handleFetchProducts = (data) => {
      dispatch({ type: "CARGAR_PRODUCTOS", payload: data });
  };

  //* Función para cargar categorias desde el back
  const handleFetchCategories = (data) => {
      dispatch({ type: "CARGAR_CATEGORIAS", payload: data });
  };

  //* Función para agregar productos desde el administrador
  const agregarProducto = (data) => {
    if (!state.data.some((item) => item.id === data.id)) {
      dispatch({ type: "AGREGAR_PRODUCTO", payload: data });
      toast({ description: "El producto se ha guardado" });
    } else {
      toast({ description: "Este producto ya existe", variant: "destructive" });
    }
  };

  //* Función para eliminar productos desde el administrador
  const borrarProducto = (id) => {
    if (!state.data.some((item) => item.id === id)) {
      toast({ description: "Este producto no existe", variant: "destructive" });
    } else {
      dispatch({ type: "BORRAR_PRODUCTO", payload: id });
      toast({ description: "Producto eliminado" });
    }
  };

  //* Controlar el loading
  const handleLoading = () => {
    dispatch({ type: "IS_LOADING" })
  }

  //* Función para agregar categorías desde el administrador
  const agregarCategoria = (data) => {
    if (!state.categories.some((item) => item.id === data.id)) {
      dispatch({ type: "AGREGAR_CATEGORIA", payload: data });
      toast({ description: "La categoría se ha guardado" });
    } else {
      toast({ description: "Este categoría ya existe", variant: "destructive" });
    }
  };

  //* Función para eliminar categorías desde el administrador
  const borrarCategoria = (id) => {
    if (!state.categories.some((item) => item.id === id)) {
      toast({ description: "Esta categoría no existe", variant: "destructive" });
    } else {
      dispatch({ type: "BORRAR_CATEGORIA", payload: id });
      toast({ description: "Categoría eliminada" });
    }
  };


  return (
    <DataContext.Provider value={{
      state,
      categories,
      agregarProducto,
      borrarProducto,
      agregarCategoria,
      borrarCategoria,
      handleLoading,
      handleFetchProducts,
      handleFetchCategories
    }}>
      {children}
    </DataContext.Provider>
  );
}

