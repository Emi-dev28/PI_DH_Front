import { useToast } from "@/components/ui/use-toast";
import { createContext, useReducer } from "react";


const initialState = {
    status: "not-authenticated", //checking, not-authenticated, authenticated
    uid: null,
    email: null,
    name: null,
    lastname: null,
    errorMessage: null,
}

const reducer = (state, { payload }) => {
    switch (action.type) {
        case "LOGIN":
            return {
                status: "authenticated",
                uid: payload.uid,
                email: payload.email,
                name: payload.name,
                lastname: payload.lastname,
                errorMessage: null,
            }

        case "LOGOUT":
            return {
                status: "not-authenticated",
                uid: null,
                email: null,
                name: null,
                lastname: null,
                errorMessage: null,
            }

        case "CHECKING_CREDENTIALS":
            return { ...state, status: "checking" }

        default:
            return state;
    }
}

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { toast } = useToast();

    //* Functions
    const loginUser = (payload) => {
        dispatch({type: "LOGIN", payload: payload})
    }

    const logoutUser = () => {
        dispatch({type: "CHECKING_CREDENTIALS"})

    }

    const checkingAuthentication = () => {
        dispatch({type: "LOGOUT"})
    }


    //*******************************************/
    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}