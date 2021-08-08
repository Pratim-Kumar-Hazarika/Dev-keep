import React, { useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider';
import {BxBxImageAlt} from '../../Svgs/Svgs'
import {FxemojiFramewithpicture} from '../Svgs/Svg'

export type PropsTypes = {
  from :string
  noteId?:number
}
function AddImage({from,noteId}:PropsTypes) {
  console.log({from})
  console.log({noteId})
  console.log("clicked")
   const {previewImage, setPreviewImageSource} = useGoogleKeep()
    function handeInputChange(e:any) {
        const file = e.target.files[0];
        previewFile(file);
      }
      function previewFile(file:any) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewImageSource(reader.result);
        };
      }
    return (
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
    )
}

export default AddImage