import { Dispatch } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';


export type OthersNote = {
    dispatch :Dispatch<ACTION>;
    id: number;
    token:string
}
export async function pinNoteFromOthers({dispatch,id,token}:OthersNote){
    dispatch({type:"PIN_NOTE",payload:{id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes/pinned`,{
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