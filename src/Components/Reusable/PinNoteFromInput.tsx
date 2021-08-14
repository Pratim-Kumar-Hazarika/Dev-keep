import React from 'react'
import { FxemojiPushpin } from '../../Svgs/Svgs'

export const PinNoteFromInput: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <FxemojiPushpin className="size"/>
            <span className="tooltiptext">Pin Note</span>
    </div>
    )
    }
    