import React from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { EmojioneCrossMarkButton } from '../../Svgs/Svgs'
import "../../Css/Image.css"
export const ShowImage: React.FC<{}> = () => {
    const {previewImage,setPreviewImageSource} = useGoogleKeep()
    function removeImageFromInput(){
        setPreviewImageSource("")
    }
    return (
        <div className="uplod_img_div">
        <img className="uplod_img" src={previewImage} alt=""/>
        {
            previewImage &&<div className="delete_img" onClick={removeImageFromInput}>
            <EmojioneCrossMarkButton/>
        </div>
        }        
    </div>
    )
}