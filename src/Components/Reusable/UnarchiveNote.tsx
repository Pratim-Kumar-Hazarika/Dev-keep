import React from 'react'
import { FxemojiOutbox } from '../Svgs/Svg'

export const UnarchiveNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <FxemojiOutbox />
            <span className="tooltiptext">Unarchive</span>
    </div>
    )
}