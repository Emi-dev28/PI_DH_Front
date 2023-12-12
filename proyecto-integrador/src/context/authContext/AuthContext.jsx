import { createContext, useReducer } from 'react';

//* Si quieren entrar a /user pongan role: "USER" o "ADMIN"
const initialState = {
  status: 'authenticated', //checking, not-authenticated, authenticated
  name: 'User',
  lastname: 'Ser',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        status: 'authenticated',
        uid: action.payload.uid,
        email: action.payload.email,
        name: action.payload.name,
        lastname: action.payload.lastname,
        role: action.payload.role,
        favorites: action.payload.reserves,
        reserves: action.payload.favorites,
      };

    case 'LOGOUT':
      return {
        status: 'not-authenticated',
        uid: null,
        email: null,
        name: '',
        lastname: null,
        role: null,
        favorites: null,
        reserves: null,
      };

    case 'CHECKING_CREDENTIALS':
      return { ...state, status: 'checking' };

    case 'ADD_FAV':
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };

    case 'REMOVE_FAV':
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
      };

    case 'ADD_BOOK':
      return {
        ...state,
        book: [...state.book, action.payload],
      };

    case 'REMOVE_BOOK':
      return {
        ...state,
        book: state.book.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //* Functions
  const loginUser = (payload) => {
    dispatch({ type: 'LOGIN', payload: payload });
  };

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const checkingAuthentication = () => {
    dispatch({ type: 'CHECKING_CREDENTIALS' });
  };

  const addToFavs = (product) => {
    dispatch({ type: 'ADD_FAV', payload: product });
  };

  const removeFromFavs = (id) => {
    dispatch({ type: 'REMOVE_FAV', payload: id });
  };

  const addToBook = (product) => {
    dispatch({ type: 'ADD_BOOK', payload: product });
  };

  const removeFromBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };

  console.log(state);
  //*******************************************/
  return (
    <AuthContext.Provider
      value={{
        state,
        loginUser,
        logoutUser,
        checkingAuthentication,
        addToFavs,
        removeFromFavs,
        addToBook,
        removeFromBook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
