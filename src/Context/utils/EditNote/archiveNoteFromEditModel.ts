import { NavigateFunction } from 'react-router';
import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';
import { Visibility } from '../../types';
import { unarchiveNote } from "../ArchiveNotesAxios/unarchive";
import { archiveNoteFromOthers } from "../OtherNotesAxios/archiveNoteFromOthers";
import { archivePinNote } from "../PinnedNotesAxios/archivePinNote";

export type ArchiveNoteFromEditModel = {
    from:string;
    dispatch:Dispatch<ACTION>;
    id:number;
    token:string,
    setShowEditNoteModel:React.Dispatch<React.SetStateAction<Visibility>>
    setKeepOpacity: React.Dispatch<React.SetStateAction<boolean>>
    navigate:NavigateFunction
}

export async function achiveNoteFromEditModel({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    if(from ==="card"){
        await archiveNoteFromOthers({dispatch,id,token})
        navigate("/home")
    }else if(from =="pinnedCard"){
      await archivePinNote({dispatch,id,token})
      navigate("/home")
    }
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)
}