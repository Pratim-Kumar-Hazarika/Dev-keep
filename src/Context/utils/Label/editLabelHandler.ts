import { Dispatch } from 'react';
import axios from 'axios';
import { ACTION } from '../../reducer/actions';
import { getUserLabelsFromServer } from '../LablesFromServer/getLabelsFromServer';
import { getUserNotesFromServer } from '../GetNotesFromServer/getUserNotes';
import { getUserPinnedNotesFromServer } from '../GetNotesFromServer/getUserPinnedNotes';
import { getUserArchivedFromServer } from '../GetNotesFromServer/getUserArchivedNotes';


export type EditLabel = {
    labelId:number;
    labelName:string;
    setNewLabel:React.Dispatch<React.SetStateAction<string>>
    token:string;
    dispatch:Dispatch<ACTION>
}
export async  function editLabelHandler({labelId,labelName,setNewLabel,token,dispatch}:EditLabel){
    setNewLabel("")

    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/labels/edit`,{
            newLabel:labelName,
            labelId:labelId
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status===200){
            getUserLabelsFromServer({dispatch,token})
            getUserNotesFromServer({dispatch,token})
            getUserPinnedNotesFromServer({dispatch,token})
            getUserArchivedFromServer({dispatch,token})
        }
    } catch (error) {
       return error;
    }
}