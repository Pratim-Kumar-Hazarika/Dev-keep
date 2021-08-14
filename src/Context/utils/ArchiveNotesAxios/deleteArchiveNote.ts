import axios from "axios"
import { OthersNote } from "../PinnedNotesAxios/unpinNote"


export async function deleteArchivedNotes({dispatch,id,token}:OthersNote){
    dispatch({type: "DELETE_ARCHIVED_NOTE", payload: { id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/delete`,{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            return true;
        }
    }  catch (error){
        return error;
    }
}