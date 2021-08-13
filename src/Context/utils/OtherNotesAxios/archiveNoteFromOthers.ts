import axios from "axios"
import { OthersNote } from "./pinNoteFromOthers"

export async function archiveNoteFromOthers({dispatch,id,token}:OthersNote){
    dispatch({type:"ARCHIVE_FROM_NOTES",payload:{id}})
    try {
        const response = await axios.post("http://localhost:8080/user/notes/archive",{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("note archive successfully")
        }
    } catch (error) {
        console.log("error occured while archiving note")
    }
   }