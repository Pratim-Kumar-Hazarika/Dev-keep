import React, { useEffect, useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider';
import {BxBxImageAlt} from '../../Svgs/Svgs'
import {FxemojiFramewithpicture} from '../Svgs/Svg'

export type PropsTypes = {
  from :string
  noteId?:number
}
function AddImage({from,noteId}:PropsTypes) {
   const {previewImage, setPreviewImageSource,dispatch} = useGoogleKeep()
   const [imageSrc,setImgSrc] = useState<any>()
    function handeInputChange(e:any) {
        const file = e.target.files[0];
        previewFile(file);
      }
      function previewFile(file:any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if(from === "input"){
          setPreviewImageSource(reader.result);
          }
          setImgSrc(reader.result)
        };     
  
      }
      useEffect(()=>{
       ( function (){
         if(imageSrc!=="" && imageSrc !== undefined){
          if(from==="card" ){
            dispatch({type:"ADD_IMAGE_TO_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
          }else if(from==="pinnedCard"){
            dispatch({type:"ADD_IMAGE_TO_PINNED_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
          }else{
            dispatch({type:"ADD_IMAGE_TO_ARCHIVED_NOTE",payload:{noteId:noteId,images:{image:imageSrc}}})
          }
          setPreviewImageSource("")
          setImgSrc("")
         }    
        })()
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