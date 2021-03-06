import axios from "axios";
import { Dispatch } from "react";
import { ACTION } from "../../reducer/actions";

export type GetUserNotesFromServer = {
    dispatch :Dispatch<ACTION>;
    token:string;
}
export function getUserArchivedFromServer({dispatch,token}:GetUserNotesFromServer): void {
    (async function () {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote`,{
                headers:{
                    authorization:token
                }
            });
            const allNotes = response.data.getUserNotes.archiveNotes.map(({images,label,title,_id,color,description}:any)=>({
                images:images.map((image:any)=>({
                    image:image.imageUrl,
                    id:image._id
                }))
                ,
                title:title,
                description:description,
                label :label.map((label:any)=>(
                    {
                      labelName:label.labelName,
                      id:label._id 
                    }
                )),
                id:_id ,
                color:color,
            }))
            if (response.status === 200) {
              return  dispatch({ type: "GET_ARCHIVED_NOTES_FROM_SERVER", payload: { allNotes:allNotes} });            
            }

        } catch (error) {
           return error;
        }
    })();
}