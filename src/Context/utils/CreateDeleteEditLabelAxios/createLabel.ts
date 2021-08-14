import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../../reducer/actions';

export type AddLabelClickHandler = {
    e:any;
    btntext:string;
    dispatch:Dispatch<ACTION>;
    setBtnText:Dispatch<SetStateAction<string>>
    token:string
}
export async function addLabelClickHandler({e,btntext,dispatch,setBtnText,token}:AddLabelClickHandler){
    e.preventDefault()
    if(btntext!==""){
        dispatch({type:"ADD_LABEL",payload:{labelName:btntext,id:Math.random()}})
        setBtnText("");
        try{
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/labels`,{
                labelName:btntext
            },{
                headers: {
                    authorization: token
                }
            })
            if(response.status===200){
                console.log("label added sucessfully")
            }
        }catch{
            console.log("error occured while adding the label")
        }
    }
}
