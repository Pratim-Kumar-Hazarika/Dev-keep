import React from 'react'
import { FxemojiPushpin, MdiLightPin } from '../../Svgs/Svgs'

export const PinArchivedNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>,pinText:string}> = ({onClick,pinText}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <FxemojiPushpin className="pinned_icon"/>
            <span className="tooltiptext">{pinText}</span>
    </div>
    )
    }
    