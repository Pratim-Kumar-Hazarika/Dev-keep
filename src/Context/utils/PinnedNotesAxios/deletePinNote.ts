import axios from "axios"
import { OthersNote } from "./unpinNote"

export async function deleteNoteFromPinnedNotes({dispatch,id,token}:OthersNote){
    dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/delete`,{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            return true;
        }
    } catch (error) {
        return error;
    }
}