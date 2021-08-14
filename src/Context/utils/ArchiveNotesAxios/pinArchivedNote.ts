import axios from "axios"
import { getUserLabelsFromServer } from "../LablesFromServer/getLabelsFromServer"
import { OthersNote } from "../PinnedNotesAxios/unpinNote"

export async function pinArchivedNotes({dispatch,id,token}:OthersNote){
    dispatch({type: "PIN_ARCHIVED_NOTE", payload: {id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/pinned`,{
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