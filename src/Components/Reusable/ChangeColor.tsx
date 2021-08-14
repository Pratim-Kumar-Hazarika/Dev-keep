import { NotoArtistPalette } from '../Svgs/Svg'
import "../../Css/ColorDivs.css"
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