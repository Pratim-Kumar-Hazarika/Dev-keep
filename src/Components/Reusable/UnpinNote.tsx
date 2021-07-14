import React from 'react'
import { MdiPin } from '../../Svgs/Svgs'

export const UnpinNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
              <MdiPin/>
            <span className="tooltiptext">Unpin Note</span>
    </div>
    )
    }