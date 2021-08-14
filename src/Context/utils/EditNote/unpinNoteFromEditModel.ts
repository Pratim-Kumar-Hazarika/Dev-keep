import { ArchiveNoteFromEditModel } from './archiveNoteFromEditModel';
import { unpinNote } from "../PinnedNotesAxios/unpinNote";

export function unpinNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    unpinNote({dispatch,id,token})
    navigate("/home")
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)
}