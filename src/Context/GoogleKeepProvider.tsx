import { createContext, useContext, useReducer, useState } from "react";
import { reducer ,initialState} from "./reducer/googleKeepReducer";
import { ContextType } from "./Context.types";
import { Visibility } from "./types";

const GoogleKeepContext = createContext({} as ContextType);

export function GoogleKeepProvider({children}:any){

    const [state,dispatch] = useReducer(reducer,initialState);
    const [title,setTitle] = useState<string>('')
    const [description,setDescription] = useState<string>('')
    const [label,setLabel] = useState<string>('')
    const [bgColor,setBgColor] = useState<string>('')
    const [showLabelModel,setShowLabelModel]= useState<Visibility>('hidden')
    const [showDeleteModel,setShowDeleteModel]= useState<Visibility>('hidden')
    const [keepOpacity,setKeepOpacity] = useState(false)
    const [previewImage, setPreviewImageSource] = useState<any>("")
    return (
        <GoogleKeepContext.Provider value={{showDeleteModel,setShowDeleteModel,showLabelModel,setShowLabelModel,
            bgColor,setBgColor,state,dispatch,title,setDescription,setTitle,description,label,
            setLabel,keepOpacity,setKeepOpacity,previewImage, setPreviewImageSource}}>{children}</GoogleKeepContext.Provider>
    )
}

export function useGoogleKeep(){
    return useContext(GoogleKeepContext)
}