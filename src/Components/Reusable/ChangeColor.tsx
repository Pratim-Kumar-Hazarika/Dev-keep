import React, { ReactChildren } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { IonColorPaletteOutline } from '../../Svgs/Svgs'

export const ChangeColor=( ) => {
return (
<div className="tooltip">
    <IonColorPaletteOutline />
    <span className="tooltiptext">Change color</span>
    <br />
</div>
)
}

// dispatch({type:"ADD_BG_COLOR",payload:{colorName:"green",id}})