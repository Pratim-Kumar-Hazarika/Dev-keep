import React from 'react'
import { MdiTrashCanOutline } from '../../Svgs/Svgs'

export const DeleteForever: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <MdiTrashCanOutline />
        <span className="tooltiptext">Delete Forever</span>
    </div>
    )
}

