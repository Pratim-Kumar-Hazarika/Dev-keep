import React from 'react'
import { NoteLabelTypes } from '../../Context/types'

export const ShowLabels: React.FC<{label:NoteLabelTypes[]}> = ({label}) => {
    return (
        <div className="label__flex">
             
               {
                   label.map((label)=>(
                       <div className="label">{label.labelName}</div>
                   ))
               }
             </div>
    )
}