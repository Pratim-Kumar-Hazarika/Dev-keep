import { ArchiveNoteFromEditModel } from './archiveNoteFromEditModel';
import { deleteArchivedNotes } from "../ArchiveNotesAxios/deleteArchiveNote"
import { deleteNoteFromOthers } from "../OtherNotesAxios/deleteNoteFromOthers"
import { deleteNoteFromPinnedNotes } from "../PinnedNotesAxios/deletePinNote"


export async function deleteNoteFromEditModel({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    if(from ==="card"){
        navigate("/home")
        await deleteNoteFromOthers({dispatch,id,token})
    }else if(from ==="pinnedCard"){
        navigate("/home")
       await deleteNoteFromPinnedNotes({dispatch,id,token})
    }else if(from ==="archive"){
        navigate("/archive")
        await deleteArchivedNotes({dispatch,id,token})
    }
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)

}
