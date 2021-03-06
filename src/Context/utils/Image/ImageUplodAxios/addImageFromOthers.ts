import { Dispatch, SetStateAction } from 'react';
import axios from "axios"

export type ImageUplod = {
   noteId:any;
   imageSrc:string;
   token:string;
   setImgSrc:Dispatch<SetStateAction<any>>
}

export async function addImageFromOthersNote({noteId,imageSrc,token,setImgSrc}:ImageUplod){
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes/image`,{
            image:imageSrc,
            noteId:noteId
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status === 200){
            setImgSrc('')
            return true;
        }
    }catch (error){
        return error;
    }
}