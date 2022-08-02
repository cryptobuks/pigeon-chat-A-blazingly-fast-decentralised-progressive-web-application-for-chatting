import { useContext, createContext } from "react";
import useAuthState from "./useAuthState";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthState()}>
      {children}
    </AuthContext.Provider>
  );
};
