import { Dispatch } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';

export type BgColor = {
    color:string;
    dispatch :Dispatch<ACTION>;
    id: number;
    token:string
}

export async function changeOtherNotesBg({color,id,dispatch,token}:BgColor){
    dispatch({type:"CHANGE_OTHER_NOTES_BG",payload:{colorName:color,id:id}})
    try {
        const response = await axios.post("http://localhost:8080/user/notes/color",{
            noteId:id,
            newColor:color
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("color updated successfully")
        }
    } catch (error) {
        console.log("error occured while updating color from others")
    }
}