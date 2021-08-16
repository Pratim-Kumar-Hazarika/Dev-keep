import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';
import { changeArchiveNotesBg } from '../ArchiveNotesAxios/changebgArchivedNote';
import { changeOtherNotesBg } from '../OtherNotesAxios/changeBgColorFromOthers';
import { changePinnedNotesBg } from '../PinnedNotesAxios/changeBgPinnedNote';

export async function changeColorFromEditModel(color:any,dispatch:Dispatch<ACTION>,id:any,from:string,token:string){
    if(from ==="card"){
         await changeOtherNotesBg({color,id,dispatch,token})
    }else if(from ==="pinnedCard"){
       await changePinnedNotesBg({color,id,dispatch,token})
    }else if(from ==="archive"){
       await changeArchiveNotesBg({color,id,dispatch,token})
    }
    
}