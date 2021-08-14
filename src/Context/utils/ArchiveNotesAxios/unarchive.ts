import axios from "axios"
import { OthersNote } from "../PinnedNotesAxios/unpinNote"

export async function unarchiveNote({dispatch,id,token}:OthersNote){
    dispatch({type: "UNARCHIVE", payload: {id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/note`,{
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