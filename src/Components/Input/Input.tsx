import { useRef, useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors';
import { addNoteHandler } from '../../Context/utils/addNoteHandler';
import { archiveClickHandler } from '../../Context/utils/archiveNoteClickHandler';
import { pinClickHandler } from '../../Context/utils/PinClickHandler';
import { BxBxImageAlt, EmojioneCrossMarkButton} from '../../Svgs/Svgs'
import AddImage from '../Reusable/AddImage';
import { ArchiveNote } from '../Reusable/ArchiveNote';
import { ChangeColor } from '../Reusable/ChangeColor';
import { PinNoteFromInput } from '../Reusable/PinNoteFromInput';
import { ShowImage } from '../Reusable/ShowImage';
import { FxemojiFramewithpicture } from '../Svgs/Svg';
import "./Input.css";
function Input() {
const {title,setDescription,setTitle,description,setLabel,setBgColor,bgColor,dispatch,previewImage,setPreviewImageSource} = useGoogleKeep()
const [overflow,setOverflow] = useState("");
const [height,setHeight] = useState("");
function formExtendClickHandler(){
    setOverflow("visible ")
    // setHeight("8rem")
}
const textRef = useRef<any>()
function inputDescription(e:any){
    setDescription(e.target.value)
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "2px";
    textRef.current.style.height = `${target.scrollHeight}px`;
}
const {token} = useAuth()
return (
<div className="input_div" style={{backgroundColor:bgColor,overflow:overflow,height:height}} onClick={formExtendClickHandler}>
  <ShowImage/>
    <form className="form">
        <div className="title_pin">
            <input  style={{backgroundColor:bgColor}} className="title_input" value={title} placeholder="Title.."
                type="text" onChange={(e)=>setTitle(e.target.value)}/>
           <PinNoteFromInput onClick={(e)=>pinClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource,textRef,token})} />
        </div>
        <br />
        <div className="text_box">
            <textarea style={{backgroundColor:bgColor}} ref={textRef}  className="text_area" placeholder="Take a note..."
                name="text" value={description} onChange={(e)=>inputDescription(e)} ></textarea>
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
                <AddImage from={"input"} />
                <ArchiveNote onClick={(e)=>archiveClickHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource,textRef,token}) } />             
            </div>
            <div className="text_box_btns">
                <button className="addNote_btn" onClick={(e)=>addNoteHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource,textRef,token})} type="submit">Add Note</button>
                {/* <VerticalDots noteId={Math.random()}/> */}
            </div>
        </div>
    </form>
</div>
)
}

export default Input