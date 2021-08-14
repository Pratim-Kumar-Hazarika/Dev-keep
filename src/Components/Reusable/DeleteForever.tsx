import React from 'react'
import { NotoV1Wastebasket } from '../Svgs/Svg'

export const DeleteForever: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <NotoV1Wastebasket />
        <span className="tooltiptext">Delete Forever</span>
    </div>
    )
}

