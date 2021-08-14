import React from 'react'
import { FxemojiPushpin } from '../../Svgs/Svgs'

export const PinFromModel: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <FxemojiPushpin style={{fontSize:"1rem"}}/>
            <span className="tooltiptext">Pin Note</span>
    </div>
    )
    }
    