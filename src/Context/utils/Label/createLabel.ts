import { Dispatch } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';
import { getUserLabelsFromServer } from '../LablesFromServer/getLabelsFromServer';


export type CreateLabel = {
    dispatch:Dispatch<ACTION>;
    newLabel:string;
    setNewLabel:React.Dispatch<React.SetStateAction<string>>;
    token:string
}

export async function createLabelClickHandler({dispatch,newLabel,setNewLabel,token}:CreateLabel){
    dispatch({type:"ADD_LABEL",payload:{labelName:newLabel,id:Math.random()}})
    setNewLabel("")
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/labels`,{
            labelName:newLabel
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status===200){
            getUserLabelsFromServer({dispatch,token})
        }
    } catch (error) {
        return error;
    }
    }