import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors';
import { BxBxImageAlt} from '../../Svgs/Svgs'
import { ArchiveNote } from '../Reusable/ArchiveNote';
import { ChangeColor } from '../Reusable/ChangeColor';
import { PinNoteFromInput } from '../Reusable/PinNoteFromInput';
import { VerticalDots } from '../Reusable/VerticalDots';
import "./Input.css";
function Input() {
const {title,setDescription,setTitle,description,label,setLabel,setBgColor,bgColor} = useGoogleKeep()

function addNoteHandler(e:any){
e.preventDefault()
    if(title || description !== ''){
    dispatch({type:"ADD_NOTE",payload:{id:Math.random(),title:title,description:description,label:label,color:bgColor}})
    setTitle("");
    setDescription('')
    setBgColor("")
    }
}
const {dispatch,state} = useGoogleKeep()

function archiveClickHandler(){
    if(title || description !== ''){
    dispatch({type:"ARCHIVE_NOTE_DIRECTLY",payload:{id:Math.random(),title:title,description:description,label:label,color:bgColor}})
    setTitle("");
    setDescription('')
    setBgColor("")
    }
}
function pinClickHandler(){
    if(title || description !==''){
    dispatch({type:"PIN_NOTE_DIRECTLY",payload:{id:Math.random(),title:title,description:description,label:label,color:bgColor}})
    setTitle("");
    setDescription('')
    setBgColor("")
    }
}
return (
<div className="input_div" style={{backgroundColor:bgColor}}>
    <form>
        <div className="title_pin">
            <input style={{backgroundColor:bgColor}} className="title_input" value={title} placeholder="Title"
                type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <PinNoteFromInput onClick={pinClickHandler} />
        </div>
        <br />
        <div className="text_box">
            <textarea style={{backgroundColor:bgColor}} cols={50} className="text_area" placeholder="Take a note..."
                name="text" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
        </div>
        <div className="text_box_icons_btns">
            <div className="text_box_icons">
                <div className="change_color_icon">
                    <ChangeColor />
                    <div className="color_divs ">
                        {
                        colorsData.map((color:any)=>(
                        <div className="circle tooltip" style={{backgroundColor:color.color}} onClick={()=>
                            setBgColor(color.color)} >
                            <span className="tooltiptext">{color.name}</span>
                        </div>
                        ))
                        }
                    </div>
                </div>
                <BxBxImageAlt />
                <ArchiveNote onClick={archiveClickHandler } />
              
            </div>
            <div className="text_box_btns">
                <button className="addNote_btn" onClick={addNoteHandler} type="submit">Add Note</button>
                <VerticalDots/>
            </div>
        </div>
    </form>
</div>
)
}

export default Input