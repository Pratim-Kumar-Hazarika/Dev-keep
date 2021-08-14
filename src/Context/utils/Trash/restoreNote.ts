import axios from 'axios';
import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';
import { DeleteNote } from './deleteNoteForever';

export async function restoreNote({id,dispatch,token}:DeleteNote){
    dispatch({type:"RESTORE_NOTE",payload:{id}})
    try {
  
            const response = await axios.post("http://localhost:8080/user/trash/restore", {
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