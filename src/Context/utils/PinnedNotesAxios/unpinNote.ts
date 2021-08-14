import { Dispatch } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';

export type OthersNote = {
    dispatch :Dispatch<ACTION>;
    id: number;
    token:string
}
export async function unpinNote({dispatch,id,token}:OthersNote){
    dispatch({type:"UNPIN_NOTE",payload:{id}})
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/note`,{
            noteId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("note unpinned successfully")
        }
    } catch (error) {
        console.log("error while unpinning")
    }
}