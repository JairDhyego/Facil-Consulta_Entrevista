import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [estados, setEstados] = useState([]);
  const [city, setCity] = useState([]);
  const [stateSelected, setStateSelected] = useState("");
  const [profissional, setProfissional] = useState("");
  const [skil, setSkil] = useState([]);
  const [valorInserido, setValorInserido] = useState();

  return (
    <UserContext.Provider
      value={{
        estados,
        setEstados,
        city,
        setCity,
        stateSelected,
        setStateSelected,
        profissional,
        setProfissional,
        skil,
        setSkil,
        valorInserido,
        setValorInserido,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
