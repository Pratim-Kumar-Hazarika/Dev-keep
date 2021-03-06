import React from 'react'
import { TeenyiconsTickOutline } from '../Svgs/Svg'

export const CreateLabel: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <TeenyiconsTickOutline/>
        <span className="tooltiptext">Create Label</span>
    </div>
    )
}
