import { ArchiveNoteFromEditModel } from './archiveNoteFromEditModel';
import { deleteArchivedNotes } from "../ArchiveNotesAxios/deleteArchiveNote"
import { deleteNoteFromOthers } from "../OtherNotesAxios/deleteNoteFromOthers"
import { deleteNoteFromPinnedNotes } from "../PinnedNotesAxios/deletePinNote"


export async function deleteNoteFromEditModel({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    if(from ==="card"){
        dispatch({type:"DELETE_NOTE",payload:{id}})
        navigate("/home")
        await deleteNoteFromOthers({dispatch,id,token})
    }else if(from =="pinnedCard"){
        dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})
        navigate("/home")
        await deleteNoteFromPinnedNotes({dispatch,id,token})
    
    }else if(from ==="archive"){
        dispatch({type:"DELETE_ARCHIVED_NOTE",payload:{id}})
        navigate("/archive")
        await deleteArchivedNotes({dispatch,id,token})
    }
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)
}
