import React from 'react'
import {  OpenmojiCrossMark } from '../Svgs/Svg'

export const EditNoteImage: React.FC<{image:string,onClick?:React.MouseEventHandler<HTMLElement>}> = ({image,onClick}) => {
    return (
        <>
        <div className="uplod_img_div">
                <img className="uplod_img" src={image}/>
                <div className="delete_img" onClick={onClick}> 
                    <OpenmojiCrossMark/>
                </div>
            </div>
            </>
    )
}
