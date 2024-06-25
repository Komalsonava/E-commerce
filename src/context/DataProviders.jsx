import React,{ createContext, useState }  from "react";

export const Data = createContext()


const DataProviders = ({children}) => {
    const[count, setCount] = useState(0);
    return(
        <Data.Provider value={{count, setCount}}>{children}</Data.Provider>
    )
}

export default DataProviders