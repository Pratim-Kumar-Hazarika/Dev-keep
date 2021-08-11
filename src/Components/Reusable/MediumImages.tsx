import React from 'react'
import { NotoV1CrossMark } from '../Svgs/Svg'

export const MediumImages: React.FC<{image:string}> = ({image}) => {
    return (<>
            <img className="flex_medium_img" src={image}/>
          
            </>
    )
}