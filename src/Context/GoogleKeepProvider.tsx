
import { createContext } from "react";

const GoogleKeepContext = createContext({});

export function GoogleKeepProvider({children}:any){
    return (
        <GoogleKeepContext.Provider value={{}}>{children}</GoogleKeepContext.Provider>
    )
}