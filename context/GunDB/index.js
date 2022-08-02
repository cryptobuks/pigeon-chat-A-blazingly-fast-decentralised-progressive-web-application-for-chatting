import { useContext, createContext } from "react";
import useGunDBState from "./useGunDBState";

const GunDBContext = createContext({});

export const useGunDB = () => useContext(GunDBContext);

export const GunDBProvider = ({ children }) => {
  return (
    <GunDBContext.Provider value={useGunDBState()}>
      {children}
    </GunDBContext.Provider>
  );
};
