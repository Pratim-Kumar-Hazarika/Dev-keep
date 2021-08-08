import React from 'react'
import { MdiTrashCanOutline } from '../../Svgs/Svgs'
import { NotoV1Wastebasket } from '../Svgs/Svg'

export const DeleteNote: React.FC<{onClick?:React.MouseEventHandler<HTMLElement>}> = ({onClick}) => {
    return (
        <div className="tooltip" onClick={onClick}>
        <NotoV1Wastebasket />
        <span className="tooltiptext">Delete Note</span>
    </div>
    )
}

