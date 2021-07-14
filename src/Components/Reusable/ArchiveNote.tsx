import React from 'react'
import { MdiArchiveArrowDownOutline } from '../../Svgs/Svgs'

export const ArchiveNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
    <MdiArchiveArrowDownOutline />
        <span className="tooltiptext">Archive</span>
</div>
    )
}

