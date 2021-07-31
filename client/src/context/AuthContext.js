import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "6103c18595677b3ac01ae604",
    username: "adminTest",
    email: "admin2@cypherbreak.com",
    profilePicture: "",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false 
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return(
    <AuthContext.Provider value={{
      user: state.user, 
      isFetching:state.isFetching, 
      error: state.error, 
      dispatch
      }}>

      {children}
    </AuthContext.Provider>
  );
};