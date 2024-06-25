import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ Children}) => {
    const [isAuthenticate, setIsAuthentices] = useState(false);
    return(
        <AuthContext.Provider value={{isAuthenticate, setIsAuthentices}}>
            {Children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}; 