import { AddNoteHandler } from './addNoteHandler';


export function pinClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel}:AddNoteHandler){
    if(title || description !==''){
    dispatch({type:"PIN_NOTE_DIRECTLY",payload:{id:Math.random(),title:title,description:description,label:[],color:bgColor}})
    setTitle("");
    setDescription('')
    setBgColor("")
    }
}