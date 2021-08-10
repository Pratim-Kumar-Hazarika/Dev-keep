import React from 'react'
import { EmojioneCrossMarkButton } from '../../Svgs/Svgs'

export const DisplayImage: React.FC<{image:string,onClick?:React.MouseEventHandler<HTMLElement>}> = ({image,onClick}) => {
    return (
        <>
        <div className="uplod_img_div">
                <img className="uplod_img" src={image}/>
            </div>
            </>
    )
}
{/* <div className="delete_img"onClick={onClick} >
{image && <EmojioneCrossMarkButton />} 
  </div> */}