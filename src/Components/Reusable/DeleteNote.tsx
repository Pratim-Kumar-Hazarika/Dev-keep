import React from 'react'
import { MdiTrashCanOutline } from '../../Svgs/Svgs'

export const DeleteNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <MdiTrashCanOutline />
        <span className="tooltiptext">Delete Note</span>
    </div>
    )
}

