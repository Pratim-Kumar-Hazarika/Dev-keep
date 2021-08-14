import axios from 'axios';
import { DeleteNote } from './deleteNoteForever';

export async function restoreNote({id,dispatch,token}:DeleteNote){
    dispatch({type:"RESTORE_NOTE",payload:{id}})
    try {
  
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/trash/restore`, {
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
        return error;
    }
}