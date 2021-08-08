import { useState } from 'react';
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors';
import { addNoteHandler } from '../../Context/utils/addNoteHandler';
import { archiveClickHandler } from '../../Context/utils/archiveNoteClickHandler';
import { pinClickHandler } from '../../Context/utils/PinClickHandler';
import { BxBxImageAlt} from '../../Svgs/Svgs'
import { ArchiveNote } from '../Reusable/ArchiveNote';
import { ChangeColor } from '../Reusable/ChangeColor';
import { PinNoteFromInput } from '../Reusable/PinNoteFromInput';
import { FxemojiFramewithpicture } from '../Svgs/Svg';
import "./Input.css";
function Input() {
const {title,setDescription,setTitle,description,setLabel,setBgColor,bgColor,dispatch} = useGoogleKeep()
const [overflow,setOverflow] = useState("");
const [height,setHeight] = useState("");
function formExtendClickHandler(){
    setOverflow("visible ")
    setHeight("8rem")
}

return (
<div className="input_div" style={{backgroundColor:bgColor,overflow:overflow,height:height}} onClick={formExtendClickHandler}>
    <form>
        <div className="title_pin">
            <input  style={{backgroundColor:bgColor}} className="title_input" value={title} placeholder={height ?"Title":"Take a note..."}
                type="text" onChange={(e)=>setTitle(e.target.value)}/>
           {height  && <PinNoteFromInput onClick={(e)=>pinClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel})} /> } 
        </div>
        <br />
        <div className="text_box">
            <textarea style={{backgroundColor:bgColor}} cols={50} className="text_area" placeholder="Take a note..."
                name="text" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
        </div>
        {/* <div className="label">lololol</div> */}
        <div className="text_box_icons_btns" >
            <div className="text_box_icons">
                <div className="change_color_icon">
                    <ChangeColor />
                    <div className="color_divs ">
                        {
                        colorsData.map((color:any)=>(
                        <div key={color.color} className="circle tooltip" style={{backgroundColor:color.color}} onClick={()=>
                            setBgColor(color.color)} >
                            <span className="tooltiptext">{color.name}</span>
                        </div>
                        ))
                        }
                    </div>
                </div>
                <FxemojiFramewithpicture />
                <ArchiveNote onClick={(e)=>archiveClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel}) } />             
            </div>
            <div className="text_box_btns">
                <button className="addNote_btn" onClick={(e)=>addNoteHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel})} type="submit">Add Note</button>
                {/* <VerticalDots noteId={Math.random()}/> */}
            </div>
        </div>
    </form>
</div>
)
}

export default Input