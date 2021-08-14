import axios from 'axios';
import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';

export type DeleteNote = {
    id:number;
    dispatch:Dispatch<ACTION>;
    token:string
}
export async function deleteNoteForever({id,dispatch,token}:DeleteNote){
    dispatch({type:"DELETE_FOREVER",payload:{id}})
    try {
  
            const response = await axios.post("http://localhost:8080/user/trash/delete", {
             noteId:id
            }, {
                headers: {
                    authorization: token
                }
            });
            if (response.status === 200) {
                console.log("note deleted sucessfully");
    
            }
    } catch (error) {
        console.log("error while deleting the note")
    }
}