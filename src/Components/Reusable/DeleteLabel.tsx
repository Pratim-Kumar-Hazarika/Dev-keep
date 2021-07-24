import React from 'react'
import { DashiconsTrash } from '../EditLabel/EditLabel'

export const DeleteLabel: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
           <DashiconsTrash />
        <span className="tooltiptext">Delete Label</span>
    </div>
    )
}