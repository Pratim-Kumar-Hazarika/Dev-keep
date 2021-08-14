import React from 'react'
import "../../Css/Image.css"
export const SmallImages: React.FC<{image:string}> = ({image}) => {
    return (
            <img className="flex_small_img" src={image} alt=""/> 
    )
}