import "./Card.css";
import "../../Css/ToolTip.css"
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import {ChangeColor} from "../Reusable/ChangeColor"
import AddImage from "../Reusable/AddImage";
import {ArchiveNote} from "../Reusable/ArchiveNote"
import{ DeleteNote }from "../Reusable/DeleteNote";
import { PinNote } from "../Reusable/PinNote";
import {colorsData} from "../../Context/reducer/colors"
import { VerticalDots } from "../Reusable/VerticalDots";
import { Image, NoteLabelTypes } from "../../Context/types";
import { DisplayImage } from "../Reusable/DisplayImage";
import { SmallImages } from "../Reusable/SmallImages";
import { EditNote } from "../EditNote/EditNote";
import { EditModel } from "../ShowEditModel/EditModel";
import { NoteImages } from "../Reusable/NoteImages";
import { Description } from "../Reusable/Description";
import { ShowLabels } from "../Reusable/ShowLabels";
import { FxemojiPencil } from "../Svgs/Svg";
import { EditNoteIcon } from "../Reusable/EditNoteIcon";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthProvider";
import { pinNoteFromOthers } from "../../Context/utils/OtherNotesAxios/pinNoteFromOthers";
import { archiveNoteFromOthers } from "../../Context/utils/OtherNotesAxios/archiveNoteFromOthers";
import { deleteNoteFromOthers } from "../../Context/utils/OtherNotesAxios/deleteNoteFromOthers";
import { changeOtherNotesBg } from "../../Context/utils/OtherNotesAxios/changeBgColorFromOthers";


type CardProps = {
title:string;
description:string;
id:number;
color:string;
from :string;
image:Image[] | undefined;
label:NoteLabelTypes[]

}
function Card({title,description,id,color,from,image,label}:CardProps) {
        const {dispatch,previewImage,keepOpacity,setKeepOpacity,setShowEditNoteModel} = useGoogleKeep()
        // function openNoteInEditModeHandler(id:number){
        //     console.log("from card",from)
        //     // setKeepOpacity(true)
        //     setShowEditNoteModel("visible")
        //     setId(id)
        // }
        const {token} = useAuth()

        return (
            <>
           
        <div className="card_div" style={{backgroundColor:color}} >
        <NoteImages image={image} id={id}/>
       
                <div className="card_title_pin">
                        <span>{title}</span>
                        <div className="pin_edit_icons">
                        <PinNote onClick={()=>pinNoteFromOthers({dispatch,id,token})}/>
                        <Link  to={{
                            pathname: `/home/card/${id}`,
                          
                        }}
                        >
                        <EditNoteIcon />
                        </Link>
                        </div>
                </div>
                <Description description={description}/>
                <ShowLabels label={label}/>
                <div className="card_icons_btns">
                    <div className="card_icons">
                        <div className="change_color_icon">
                            <ChangeColor />
                            <div className="color_divs ">
                                {
                                colorsData.map(({color,name}:any)=>(
                             <div className="circle tooltip" style={{backgroundColor:color}} onClick={()=>changeOtherNotesBg({color,id,dispatch,token})}>
                                    <span className="tooltiptext">{name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage from="card" noteId={id}/>
                        <ArchiveNote onClick={()=>archiveNoteFromOthers({dispatch,id,token})}/>
                            <DeleteNote onClick={()=> deleteNoteFromOthers({dispatch,id,token})}/>
                               <VerticalDots noteId={id} from={from}/>
                    </div>
                </div>
        </div>
        </>
        )
        }

        export default Card