import React from 'react'

export const MediumImages: React.FC<{image:string}> = ({image}) => {
    return (
            <img className="flex_medium_img" src={image}/> 
    )
}