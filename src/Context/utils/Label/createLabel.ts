import { Dispatch } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';
import { getUserLabelsFromServer } from '../LablesFromServer/getLabelsFromServer';


export type CreateLabel = {
    dispatch:Dispatch<ACTION>;
    newLabel:string;
    setNewLabel:React.Dispatch<React.SetStateAction<string>>;
    token:string,
    setShowIcon:React.Dispatch<React.SetStateAction<"hidden" | "visible">>
}

export async function createLabelClickHandler({dispatch,newLabel,setNewLabel,token,setShowIcon}:CreateLabel){
    if(newLabel !== ""){
        dispatch({type:"ADD_LABEL",payload:{labelName:newLabel,id:Math.random()}})
        setNewLabel("")
        setShowIcon("hidden")
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
    }return;  
    }