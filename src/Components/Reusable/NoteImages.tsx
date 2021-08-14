import React from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { Image } from '../../Context/types'
import { DisplayImage } from './DisplayImage'
import { SmallImages } from './SmallImages'
import "../../Css/Image.css"
export type NoteImages = {
    image:Image[] | undefined;
    id:number
}
// eslint-disable-next-line
export const NoteImages: React.FC<NoteImages> = ({image,id}) => {
    const {dispatch} = useGoogleKeep()

    return (
        <>
            {
                    image?.slice(0,1).map((image)=>(

                        <DisplayImage key={image.id } image={image.image} onClick={()=>dispatch({type:"DELETE_IMAGE",payload:{noteId:id,imageId:image.image}})}/>

                    ))
                }
               <div className="img_flex">
               {
                image?.slice(1).map((image)=>(
                            <SmallImages key={image.id }  image={image.image}/>
                        ))
                }
                </div> 
        </>
    )
}