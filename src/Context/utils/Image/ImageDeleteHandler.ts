import { Dispatch } from 'react';
import { ACTION } from '../../reducer/actions';
import { deleteImageFromArchive } from "./ImageDeleteAxios/deleteImageFromArchive"
import { deleteImageFromOthers } from "./ImageDeleteAxios/deleteImageFromOthers"
import { deleteImageFromPinnedNotes } from "./ImageDeleteAxios/deleteImageFromPinned"

export type deleteImage = {
    image:string;
    imageId:string | number | undefined;
    from:string;
    id:number
    dispatch:Dispatch<ACTION>;
    token:string
}
export async function deleteImageHandler({image,imageId,from,id,dispatch,token}:deleteImage){
    dispatch({type:"DELETE_IMAGE",payload:{noteId:id,imageId:image}})
    if(from ==="card"){
     await deleteImageFromOthers(imageId, id, token)
    }else if(from ==="pinnedCard"){
        await deleteImageFromPinnedNotes(imageId, id, token)
    }else if(from ==="archive"){
        await deleteImageFromArchive(imageId, id, token)
    }
  }