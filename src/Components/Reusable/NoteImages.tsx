import React from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { Image } from '../../Context/types'
import { DisplayImage } from './DisplayImage'
import { SmallImages } from './SmallImages'

export type NoteImages = {
    image:Image[] | undefined;
    id:number
}
export const NoteImages: React.FC<NoteImages> = ({image,id}) => {
    const {dispatch} = useGoogleKeep()

    return (
        <>
            {
                    image?.slice(1,2).map((image)=>(
                        <>
                        <DisplayImage image={image.image} onClick={()=>dispatch({type:"DELETE_IMAGE",payload:{noteId:id,imageId:image.image}})}/>
                        </>
                    ))
                }
               <div className="img_flex">
               {
                image?.slice(2).map((image)=>(
                            <SmallImages image={image.image}/>
                        ))
                }
                </div> 
        </>
    )
}