import axios from "axios"
import { OthersNote } from "../PinnedNotesAxios/unpinNote"

export async function unarchiveNote({dispatch,id,token}:OthersNote){
    dispatch({type: "UNARCHIVE", payload: {id}})
    try {
        const response = await axios.post("http://localhost:8080/user/archiveNote/note",{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("note unarchived successfully")
        }
    } catch (error) {
        console.log("error occured while unarchiving note")
    }
   }