import axios from "axios"
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
            console.log("archive note pinned successfully")
        }
    } catch (error) {
        console.log("error occured while pinning archived note")
    }
   }