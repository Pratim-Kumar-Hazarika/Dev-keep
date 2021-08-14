import { NavigateFunction } from 'react-router';
import { Visibility } from "../../types";
import { archiveNoteTitleDescriptionHandler, cardTitleDescriptionHandler, pinnedNoteTitleDescriptionHandler } from "../DescriptionTitle/titleDesriptionHandlers";

export type SaveNote = {
    e:any;
    from:string;
    id:number;
    token:string,
    setShowEditNoteModel:React.Dispatch<React.SetStateAction<Visibility>>
    setKeepOpacity: React.Dispatch<React.SetStateAction<boolean>>
    navigate:NavigateFunction;
    description:string;
    title:string
}

export async function saveNote({e,from,id,token,setShowEditNoteModel,setKeepOpacity,navigate,description,title}:SaveNote){
    e.preventDefault();
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)
    if(from ==="archive"){
        navigate("/archive")
      return  await archiveNoteTitleDescriptionHandler(id, description, token, title)
    }else if(from ==="pinnedCard"){
        navigate("/home")
      return await pinnedNoteTitleDescriptionHandler(id, description, token, title)
    }else if(from ==="card"){
        navigate("/home")
       return await cardTitleDescriptionHandler(id, description, token, title)
    }   
}