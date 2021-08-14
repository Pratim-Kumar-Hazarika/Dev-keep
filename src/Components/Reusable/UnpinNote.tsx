import React from 'react'
import { FxemojiPushpin } from '../../Svgs/Svgs'

export const UnpinNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
              <FxemojiPushpin style={{fontSize:"0.9rem"}}/>
            <span className="tooltiptext">Unpin Note</span>
    </div>
    )
    }