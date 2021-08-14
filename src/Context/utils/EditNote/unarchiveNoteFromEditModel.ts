import { unarchiveNote } from '../ArchiveNotesAxios/unarchive';
import { ArchiveNoteFromEditModel } from './archiveNoteFromEditModel';
export function unarchiveNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    unarchiveNote({dispatch,id,token})
    navigate("/archive")
    setShowEditNoteModel("hidden");
    setKeepOpacity(false)
}