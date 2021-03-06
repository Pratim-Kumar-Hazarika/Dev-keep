import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer ,initialState} from "./reducer/googleKeepReducer";
import { ContextType } from "./Context.types";
import { Visibility } from "./types";
import { useAuth } from "./AuthProvider";
import { getUserNotesFromServer } from "./utils/GetNotesFromServer/getUserNotes";
import { getUserPinnedNotesFromServer } from "./utils/GetNotesFromServer/getUserPinnedNotes";
import { getUserArchivedFromServer } from "./utils/GetNotesFromServer/getUserArchivedNotes";
import { getUserLabelsFromServer } from "./utils/LablesFromServer/getLabelsFromServer";
import { trashNotesFromServer } from "./utils/GetNotesFromServer/getUserTrashNotes";
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
    const [previewImage, setPreviewImageSource] = useState<any>("");
    const [showEditNoteModel,setShowEditNoteModel] = useState<Visibility>("hidden")
    const [sidebar, setSidebar] = useState(false);
    const {token} = useAuth()

    useEffect(()=>{
        getUserNotesFromServer({dispatch,token})
        getUserPinnedNotesFromServer({dispatch,token})
        getUserArchivedFromServer({dispatch,token})
        getUserLabelsFromServer({dispatch,token})
        trashNotesFromServer({dispatch,token})
    },[token])


    return (
        <GoogleKeepContext.Provider value={{showDeleteModel,setShowDeleteModel,showLabelModel,setShowLabelModel,
            bgColor,setBgColor,state,dispatch,title,setDescription,setTitle,description,label,
            setLabel,keepOpacity,setKeepOpacity,previewImage, setPreviewImageSource,showEditNoteModel,setShowEditNoteModel,sidebar, setSidebar}}>{children}</GoogleKeepContext.Provider>
    )
}

export function useGoogleKeep(){
    return useContext(GoogleKeepContext)
}