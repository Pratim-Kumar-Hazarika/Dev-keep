import axios from "axios"
import { OthersNote } from "./pinNoteFromOthers"

export async function deleteNoteFromOthers({dispatch,id,token}:OthersNote){
    dispatch({type:"DELETE_NOTE",payload:{id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes/delete`,{
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