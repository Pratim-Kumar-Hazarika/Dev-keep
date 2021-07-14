import React from 'react'
import { MdiDeleteRestore } from '../../Svgs/Svgs'

export const RestoreNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
    <div className="tooltip" onClick={onClick}>
        <MdiDeleteRestore />
            <span className="tooltiptext">Restore</span>
    </div>
    )
    }