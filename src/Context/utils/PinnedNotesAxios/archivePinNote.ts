import axios from "axios"
import { OthersNote } from "./unpinNote"


export async function archivePinNote({dispatch,id,token}:OthersNote){
    dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/archive`,{
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