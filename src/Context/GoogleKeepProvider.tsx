import { createContext,Dispatch,SetStateAction, useContext, useReducer, useState } from "react";
import { reducer ,initialState,ACTION} from "./reducer/googleKeepReducer";
import {ReducerInitialState} from "../../src/Context/types"

interface ContextType {
    state:ReducerInitialState;
    dispatch: Dispatch<ACTION>
    title:string;
    setDescription:Dispatch<SetStateAction<string>>;
    setTitle:Dispatch<SetStateAction<string>>;
    setLabel:Dispatch<SetStateAction<string>>;
    description:string;
    label:string;
    bgColor:string;
    setBgColor: Dispatch<SetStateAction<string>>;
}

const GoogleKeepContext = createContext({} as ContextType);

export function GoogleKeepProvider({children}:any){

    const [state,dispatch] = useReducer(reducer,initialState);
    const [title,setTitle] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [label,setLabel] = useState<string>('')
    const [bgColor,setBgColor] = useState<string>('')
    return (
        <GoogleKeepContext.Provider value={{bgColor,setBgColor,state,dispatch,title,setDescription,setTitle,description,label,setLabel}}>{children}</GoogleKeepContext.Provider>
    )
}

export function useGoogleKeep(){
    return useContext(GoogleKeepContext)
}