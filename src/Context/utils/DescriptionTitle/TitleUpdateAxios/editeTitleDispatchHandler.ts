import { Dispatch } from 'react';
import { ACTION } from '../../../reducer/actions';
export type EditNoteTitle = {
    e:any;
    from:string;
    dispatch:Dispatch<ACTION>;
    id:any
}

export async  function editNoteTitle({e,from,dispatch,id}:EditNoteTitle){
    if(from ==="card"){
        dispatch({type:"CHANGE_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})    
    } 
     else if(from === "pinnedCard"){
        dispatch({type:"CHANGE_PINNED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})      
    } 
     else if(from ==="archive"){
        dispatch({type:"CHANGE_ARCHIVED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})       
    }
    }
   