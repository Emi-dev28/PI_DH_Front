import { createContext, useReducer } from "react";


const initialState = {
    status: "authenticated", //checking, not-authenticated, authenticated
    uid: null,
    email: null,
    name: null,
    lastname: null,
    rol: 2
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                status: "authenticated",
                uid: action.payload.uid,
                email: action.payload.email,
                name: action.payload.name,
                lastname: action.payload.lastname,
                rol: 1
            }

        case "LOGOUT":
            return {
                status: "not-authenticated",
                uid: null,
                email: null,
                name: null,
                lastname: null,
                rol: 0
            }

        case "CHECKING_CREDENTIALS":
            return { ...state, status: "checking" }

        default:
            return state;
    }
}

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    //TODO: llamar el tercer argumento del reducer, el init, con el checkAuthToken
    const [state, dispatch] = useReducer(reducer, initialState)

    //* Functions
    const loginUser = (payload) => {
        dispatch({type: "LOGIN", payload: payload})
    }

    const logoutUser = () => {
        dispatch({type: "LOGOUT"})
    }

    const checkingAuthentication = () => {
        dispatch({type: "CHECKING_CREDENTIALS"})
    }


    //*******************************************/
    return (
        <AuthContext.Provider value={{state, loginUser, logoutUser, checkingAuthentication}}>
            {children}
        </AuthContext.Provider>
    )
}