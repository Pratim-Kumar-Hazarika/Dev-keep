import React from 'react'
import { BxBxArchiveOut } from '../../Svgs/Svgs'

export const UnarchiveNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <BxBxArchiveOut />
            <span className="tooltiptext">Unarchive</span>
    </div>
    )
}