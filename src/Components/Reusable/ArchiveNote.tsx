import React from 'react'
import { MdiArchiveArrowDownOutline } from '../../Svgs/Svgs'
import { OpenmojiArchive } from '../Svgs/Svg'

export const ArchiveNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
    <OpenmojiArchive  />
        <span className="tooltiptext">Archive</span>
</div>
    )
}

