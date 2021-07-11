import { createContext,Dispatch, useContext, useReducer } from "react";
import { reducer ,initialState,ACTION} from "./reducer/googleKeepReducer";
import {ReducerInitialState} from "../../src/Context/types"

interface ContextType {
    state:ReducerInitialState;
    dispatch: Dispatch<ACTION>
}

const GoogleKeepContext = createContext({} as ContextType);

export function GoogleKeepProvider({children}:any){

    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <GoogleKeepContext.Provider value={{state,dispatch}}>{children}</GoogleKeepContext.Provider>
    )
}

export function useGoogleKeep(){
    return useContext(GoogleKeepContext)
}