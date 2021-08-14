import { pinArchivedNotes } from '../ArchiveNotesAxios/pinArchivedNote';
import { pinNoteFromOthers } from '../OtherNotesAxios/pinNoteFromOthers';
import { ArchiveNoteFromEditModel } from './archiveNoteFromEditModel';
export async function pinNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate}:ArchiveNoteFromEditModel){
    if(from ==="card"){
    dispatch({type:"PIN_NOTE",payload:{id}})
     await  pinNoteFromOthers({dispatch,id,token})
     navigate("/home")
    }else if(from ==="archive"){
    dispatch({type:"PIN_ARCHIVED_NOTE",payload:{id}})
     await pinArchivedNotes({dispatch,id,token})
     navigate("/archive")
    }
    setShowEditNoteModel("hidden");
    setKeepOpacity(false) 
}
