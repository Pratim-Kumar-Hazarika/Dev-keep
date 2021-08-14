import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthProvider';
import { useGoogleKeep } from '../../Context/GoogleKeepProvider';
import { addImageFromArchiveNote } from '../../Context/utils/Image/ImageUplodAxios/addImageFromArchive';
import { addImageFromOthersNote } from '../../Context/utils/Image/ImageUplodAxios/addImageFromOthers';
import { addImageFromPinnedNote } from '../../Context/utils/Image/ImageUplodAxios/addImageFromPinnedNote';
import {FxemojiFramewithpicture} from '../Svgs/Svg'
import "../../Css/Image.css"
export type PropsTypes = {
  from :string
  noteId?:number
}
function AddImage({from,noteId}:PropsTypes) {
   const { setPreviewImageSource,dispatch} = useGoogleKeep()
   const [imageSrc,setImgSrc] = useState<any>()
   const {token} = useAuth()
    function handeInputChange(e:any) {
        const file = e.target.files[0];
        previewFile(file);
      }
      function previewFile(file:any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          // setPreviewImageSource(reader.result);
          if(from === "input"){
          setPreviewImageSource(reader.result);
          }else{
            setImgSrc(reader.result)
          }
        
        };     
  
      }
      useEffect(()=>{
       ( async function (){
         if(imageSrc!=="" && imageSrc !== undefined){
          if(from==="card" ){
            dispatch({type:"ADD_IMAGE_TO_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
            await  addImageFromOthersNote({noteId,imageSrc,token,setImgSrc})
          }else if(from==="pinnedCard"){
            dispatch({type:"ADD_IMAGE_TO_PINNED_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
            await  addImageFromPinnedNote({noteId,imageSrc,token,setImgSrc})
          }else{
            dispatch({type:"ADD_IMAGE_TO_ARCHIVED_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
            await  addImageFromArchiveNote({noteId,imageSrc,token,setImgSrc})
          }
          setPreviewImageSource("")
          setImgSrc("")
         }    
        })()
        // eslint-disable-next-line 
      },[imageSrc])
     
    return (
      <>
        <div className="tooltip">
            <label style={{cursor:"pointer"}}>
                <FxemojiFramewithpicture/>
                <input
                 onChange={handeInputChange}
                    type="file"
                    style={{
                    display: "none",

                }}/>
            </label>
            <span className="tooltiptext">Add image</span>
        </div>
        </>
    )
}

export default AddImage