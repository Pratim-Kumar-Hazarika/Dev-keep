import React, { useRef } from 'react'

export const Description: React.FC<{description:string}> = ({description}) => {

    return (
        <div className="card_text_box">
        <p >{description}</p>
     </div>
    )
}