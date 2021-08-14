import React from 'react'
import {  OpenmojiCrossMark } from '../Svgs/Svg'
import "../../Css/Image.css"
export const NoteMediumImages: React.FC<{image:string,onClick?:React.MouseEventHandler<HTMLElement>}> = ({image,onClick}) => {
    return (<>

            <div className="uplod_img_div">
                <img className="flex_medium_img" src={image} alt=""/>
                <div className="delete_img"  onClick={onClick}> 
                    <OpenmojiCrossMark/>
                </div>
            </div>
            </>
    )
}