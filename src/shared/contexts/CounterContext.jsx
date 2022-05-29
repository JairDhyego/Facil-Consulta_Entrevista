import { createContext } from "react";



export const CounterContext = createContext();



function UserProvider({ children }) {
  
     

 
  return (

    <CounterContext.Provider value={{ loadStates }} >
      {children}
    </CounterContext.Provider>
  );
}

export default UserProvider; 