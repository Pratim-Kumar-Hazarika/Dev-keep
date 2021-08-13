import axios from "axios"
import { OthersNote } from "./pinNoteFromOthers"

export async function deleteNoteFromOthers({dispatch,id,token}:OthersNote){
    dispatch({type:"DELETE_NOTE",payload:{id}})
    try {
        const response = await axios.post("http://localhost:8080/user/notes/delete",{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("note deleted successfully")
        }
    } catch (error) {
        console.log("error occured while deleting  note from others")
    }
}