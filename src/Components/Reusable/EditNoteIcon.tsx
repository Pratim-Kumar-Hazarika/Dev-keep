import React from 'react'
import { FxemojiPushpin, MdiLightPin } from '../../Svgs/Svgs'
import { FxemojiPencil } from '../Svgs/Svg'

export const EditNoteIcon: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <FxemojiPencil className="pinned_icon"/>
            <span className="tooltiptext">Edit Note</span>
    </div>
    )
    }
    