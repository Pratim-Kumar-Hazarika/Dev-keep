import React from 'react'
import { EmojioneCrossMarkButton } from '../../Svgs/Svgs'
import { NotoV1CrossMark } from '../Svgs/Svg'

export const DisplayImage: React.FC<{image:string,onClick?:React.MouseEventHandler<HTMLElement>}> = ({image,onClick}) => {
    return (
        <>
        <div className="uplod_img_div">
                <img className="uplod_img" src={image}/>
                
            </div>
            </>
    )
}
