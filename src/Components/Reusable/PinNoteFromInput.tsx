import React from 'react'
import { MdiLightPin } from '../../Svgs/Svgs'

export const PinNoteFromInput: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <MdiLightPin />
            <span className="tooltiptext">Pin Note</span>
    </div>
    )
    }
    