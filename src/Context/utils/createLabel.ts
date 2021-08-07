import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../reducer/actions';

export type AddLabelClickHandler = {
    e:any;
    btntext:string;
    dispatch:Dispatch<ACTION>;
    setBtnText:Dispatch<SetStateAction<string>>
}
export function addLabelClickHandler({e,btntext,dispatch,setBtnText}:AddLabelClickHandler){
    e.preventDefault()
    if(btntext!==""){
        dispatch({type:"ADD_LABEL",payload:{labelName:btntext,id:Math.random()}})
        setBtnText("");
    }
}
