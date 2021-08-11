// import "../Card/Card.css";
import "../../Css/ToolTip.css"
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import {ChangeColor} from "../Reusable/ChangeColor"
import AddImage from "../Reusable/AddImage"
import { ArchiveNote } from "../Reusable/ArchiveNote"
import { DeleteNote } from "../Reusable/DeleteNote"
import { UnpinNote } from "../Reusable/UnpinNote"
import {colorsData} from "../../Context/reducer/colors"
import { VerticalDots } from "../Reusable/VerticalDots"
import { Image, NoteLabelTypes } from "../../Context/types"
import { DisplayImage } from "../Reusable/DisplayImage"
import { SmallImages } from "../Reusable/SmallImages"
import { EditNote } from "../EditNote/EditNote"
import { NoteImages } from "../Reusable/NoteImages"
import { Description } from "../Reusable/Description"
import { ShowLabels } from "../Reusable/ShowLabels"
import { EditNoteIcon } from "../Reusable/EditNoteIcon"
import {Link} from "react-router-dom"

type CardProps = {
title:string;
description:string;
id:number;
color:string
from:string;
image:Image[] | undefined;
label:NoteLabelTypes[]
}
function PinnedCard({title,description,id,color,from,image,label}:CardProps) {
        const {dispatch,setShowEditNoteModel,setKeepOpacity} = useGoogleKeep()
        function openNoteInEditModeHandler(){
            console.log("from card",from)
            // setKeepOpacity(true)
            setShowEditNoteModel("visible")
        }
        return (
            <>
              {/* <EditNote title={title} description={description} color={color} image={image} id={id} label={label} from={from}/> */}
            <div className="card_div" style={{backgroundColor:color}} >
            <NoteImages image={image} id={id}/>
            <form>
                <div className="card_title_pin">
                <span>{title}</span>
                   
                    <div className="pin_edit_icons">
                    <UnpinNote onClick={()=>dispatch({type:"UNPIN_NOTE",payload:{id}})}/>
                        <Link  to={{
                            pathname: `/home/pinnedCard/${id}`,
                          
                        }}
                           >
                               <EditNoteIcon />
                           </Link>
                    
                        </div>
                </div>
                <br />
                <Description description={description}/>
                <ShowLabels label={label}/>
                <div className="card_icons_btns">
                    <div className="card_icons">
                        <div className="change_color_icon">
                            <ChangeColor />
                            <div className="color_divs ">
                                {
                                colorsData.map((color:any)=>(
                                <div className="circle tooltip" style={{backgroundColor:color.color}} onClick={()=>
                                    dispatch({type:"CHANGE_PINNED_NOTES_BG",payload:{colorName:color.color,id:id}})}>
                                    <span className="tooltiptext">{color.name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage from="pinnedCard" noteId={id}/>
                        <ArchiveNote onClick={()=>dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})}/>
                            <DeleteNote onClick={()=> dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})}/>
                            <VerticalDots noteId={id} from={from}/>
                    </div>
                </div>
            </form>
        </div>
        </>
        )
        }

        export default PinnedCard