import { IonColorPaletteOutline } from '../../Svgs/Svgs'
import { NotoArtistPalette } from '../Svgs/Svg'

export const ChangeColor=( ) => {
return (
<div className="tooltip">
    <NotoArtistPalette />
    <span className="tooltiptext">Change color</span>
    <br />
</div>
)
}

// dispatch({type:"ADD_BG_COLOR",payload:{colorName:"green",id}})