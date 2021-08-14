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
import { NoteImages } from "../Reusable/NoteImages"
import { Description } from "../Reusable/Description"
import { ShowLabels } from "../Reusable/ShowLabels"
import { EditNoteIcon } from "../Reusable/EditNoteIcon"
import {Link} from "react-router-dom"
import { unpinNote } from "../../Context/utils/PinnedNotesAxios/unpinNote"
import { useAuth } from "../../Context/AuthProvider"
import { archivePinNote } from "../../Context/utils/PinnedNotesAxios/archivePinNote"
import { deleteNoteFromPinnedNotes } from "../../Context/utils/PinnedNotesAxios/deletePinNote"
import { changePinnedNotesBg } from "../../Context/utils/PinnedNotesAxios/changeBgPinnedNote"

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
        const {dispatch} = useGoogleKeep()
        const {token} = useAuth()
        return (
            <>
            <div className="card_div" style={{backgroundColor:color}} key={id} >
            <NoteImages image={image} id={id}/>
            <form>
                <div className="card_title_pin">
                <span>{title}</span>
                   
                    <div className="pin_edit_icons">
                    <UnpinNote onClick={()=>unpinNote({dispatch,id,token})}/>
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
                                colorsData.map(({color,name}:any)=>(
                                <div className="circle tooltip" style={{backgroundColor:color}} key={color} onClick={()=>
                                    changePinnedNotesBg({color,id,dispatch,token})}>
                                    <span className="tooltiptext">{name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage from="pinnedCard" noteId={id}/>
                        <ArchiveNote onClick={()=>archivePinNote({dispatch,id,token})}/>
                            <DeleteNote onClick={()=> deleteNoteFromPinnedNotes({dispatch,id,token})}/>
                            <VerticalDots noteId={id} from={from}/>
                    </div>
                </div>
            </form>
        </div>
        </>
        )
        }

        export default PinnedCard