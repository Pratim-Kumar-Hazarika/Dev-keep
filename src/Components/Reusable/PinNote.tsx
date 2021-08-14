import React from 'react'
import { FxemojiPushpin } from '../../Svgs/Svgs'

export const PinNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <FxemojiPushpin className="pinned_icon"/>
            <span className="tooltiptext">Pin Note</span>
    </div>
    )
    }
    