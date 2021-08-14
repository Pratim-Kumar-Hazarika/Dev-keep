import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../../reducer/actions";

export type GetUserNotesFromServer = {
    dispatch :Dispatch<ACTION>;
    token:string;
}
export function getUserLabelsFromServer({dispatch,token}:GetUserNotesFromServer): void {
    (async function () {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/labels`,{
                headers:{
                    authorization:token
                }
            });
          const getLabels = response.data.getLables.labels.map((label:any)=>(
              {
                labelName:label.labelName,
                id:label._id 
              }
          ))
            if (response.status === 200) {
                dispatch({ type: "GET_LABLES_FROM_SERVER", payload: { allLabels:getLabels} });            
            }
            return response.data.videos;
        } catch (error) {
           return error;
        }
    })();
}