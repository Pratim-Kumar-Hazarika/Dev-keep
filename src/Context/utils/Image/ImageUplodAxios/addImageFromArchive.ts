import { Dispatch, SetStateAction } from 'react';
import axios from "axios"

export type ImageUplod = {
   noteId:any;
   imageSrc:string;
   token:string;
   setImgSrc:Dispatch<SetStateAction<any>>
}

export async function addImageFromArchiveNote({noteId,imageSrc,token,setImgSrc}:ImageUplod){
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/image`,{
            image:imageSrc,
            noteId:noteId
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            console.log("image uplod sucessfully to pinned note")
            setImgSrc('')
        }
    } catch (error){
        return error;
    }
}