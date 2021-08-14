import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';
import { changeArchiveNotesBg } from '../ArchiveNotesAxios/changebgArchivedNote';
import { changeOtherNotesBg } from '../OtherNotesAxios/changeBgColorFromOthers';
import { changePinnedNotesBg } from '../PinnedNotesAxios/changeBgPinnedNote';

export async function changeColorFromEditModel(color:any,dispatch:Dispatch<ACTION>,id:any,from:string,token:string){
    if(from ==="card"){
        dispatch({type:"CHANGE_OTHER_NOTES_BG",payload:{colorName:color,id:id}})
         await changeOtherNotesBg({color,id,dispatch,token})
    }else if(from ==="pinnedCard"){
        dispatch({type:"CHANGE_PINNED_NOTES_BG",payload:{colorName:color,id:id}})
       await changePinnedNotesBg({color,id,dispatch,token})
    }else if(from ==="archive"){
        dispatch({type:"CHANGE_ARCHIVED_NOTES_BG",payload:{colorName:color,id:id}})
       await changeArchiveNotesBg({color,id,dispatch,token})
    }
    
}