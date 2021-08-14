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
  
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/trash/delete`, {
             noteId:id
            }, {
                headers: {
                    authorization: token
                }
            });
            if (response.status === 200) {
                return true;
    
            }
    } catch (error) {
        return error;
    }
}