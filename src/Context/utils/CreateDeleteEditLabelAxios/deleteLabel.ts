import { Visibility } from '../../types';
import { Dispatch, SetStateAction } from 'react';
import axios from "axios"
import { ACTION } from '../../reducer/actions';

export type DeleteLabel = {
    labelName:string;
    id:any;
    dispatch:Dispatch<ACTION>;
    setShowDeleteModel:Dispatch<SetStateAction<Visibility>>;
    setShowLabelModel:Dispatch<SetStateAction<Visibility>>;
    setKeepOpacity:Dispatch<SetStateAction<boolean>>;
    token:string
}
export async function deleteLabelHandler({labelName,id,dispatch,setShowDeleteModel,setShowLabelModel,setKeepOpacity,token}:DeleteLabel){
    dispatch({type:"DELETE_LABELS",payload:{labelName:labelName,id:id}})
    setShowDeleteModel("hidden")
    setShowLabelModel("hidden")
    setKeepOpacity(false)
    try {
        const response = await axios.post("http://localhost:8080/user/labels/delete",{
            labelId:id
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status==200){
            console.log("label deleted sucessfully")
        }
    } catch (error) {
        console.log("error while deleting the label")
    }
}