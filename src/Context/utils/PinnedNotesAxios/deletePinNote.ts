import axios from "axios"
import { OthersNote } from "./unpinNote"

export async function deleteNoteFromPinnedNotes({dispatch,id,token}:OthersNote){
    dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})
    try {
        const response = await axios.post("http://localhost:8080/user/pinnedNote/delete",{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("pinned note deleted successfully")
        }
    } catch (error) {
        console.log("error occured while deleting  pinned note from others")
    }
}