import React from 'react'
import "../../Css/Image.css"

export const DisplayImage: React.FC<{image:string,onClick?:React.MouseEventHandler<HTMLElement>}> = ({image,onClick}) => {
    return (
        <>
        <div className="uplod_img_div" key={image}>
                <img className="uplod_img" src={image} alt=""/> 
            </div>
            </>
    )
}
