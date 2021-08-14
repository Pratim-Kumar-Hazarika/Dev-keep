import { ReducerInitialState } from '../../types';
import { idInLabelCheckHandler } from "./checkBoxIdLabelHandler"

export function checkBoxHandler(labelName:string,id:any,state:ReducerInitialState,from:string,noteId:any){
    if(from ==="pinnedCard"){
        const getNote = state.pinnedNotes.filter((note)=>note.id === noteId) 
        const checkForId = idInLabelCheckHandler(getNote, id) || {}
        if(checkForId[0]?.id === id){
            return true
        }return false
    }else if(from ==="card"){
        const getNote = state.notes.filter((note)=>note.id === noteId) 
        const checkForId = idInLabelCheckHandler(getNote, id) || {}
        if(checkForId[0]?.id === id){
            return true
        }return false
    }else{
        const getNote = state.archive.filter((note)=>note.id === noteId) 
        const checkForId = idInLabelCheckHandler(getNote, id) || {}
        if(checkForId[0]?.id === id){
            return true
        }return false
    }
}