import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [estados, setEstados] = useState([]);
  const [city, setCity] = useState([]);
  const [stateSelected, setStateSelected] = useState("");
  const [profissional, setProfissional] = useState("");
  const [skil, setSkil] = useState([]);
  const [valorInserido, setValorInserido] = useState();

  const [formData, setFormData ] = useState({});

  console.log(formData)


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
        formData,
        setFormData
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
