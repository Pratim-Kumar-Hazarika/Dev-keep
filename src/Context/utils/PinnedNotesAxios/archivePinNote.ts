import axios from "axios"
import { OthersNote } from "./unpinNote"


export async function archivePinNote({dispatch,id,token}:OthersNote){
    dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})
    try {
        const response = await axios.post("http://localhost:8080/user/pinnedNote/archive",{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("pinned note archive successfully")
        }
    } catch (error) {
        console.log("error occured while archiving pinned note")
    }
   }