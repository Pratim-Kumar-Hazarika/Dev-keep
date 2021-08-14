import React from 'react'
import { TwemojiRecyclingSymbol } from '../Svgs/Svg'

export const RestoreNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <TwemojiRecyclingSymbol />
            <span className="tooltiptext">Restore</span>
    </div>
    )
    }