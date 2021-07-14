import React from 'react'
import { MdiLightPin } from '../../Svgs/Svgs'

export const PinNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <MdiLightPin className="pinned_icon"/>
            <span className="tooltiptext">Pin Note</span>
    </div>
    )
    }
    