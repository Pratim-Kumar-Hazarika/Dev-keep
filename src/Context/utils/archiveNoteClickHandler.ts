import { AddNoteHandler } from './addNoteHandler';



export function archiveClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel}:AddNoteHandler){
    if(title || description !== ''){
    dispatch({type:"ARCHIVE_NOTE_DIRECTLY",payload:{id:Math.random(),title:title,description:description,label:[],color:bgColor}})
    setTitle("");
    setDescription('')
    setBgColor("")
    }
}