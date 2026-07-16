import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);
  return <MyStore.Provider value={{active,setActive,id,setId}}>{children}</MyStore.Provider>;
};
