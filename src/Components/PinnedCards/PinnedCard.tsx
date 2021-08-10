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
        return (
            <div className="card_div" style={{backgroundColor:color}}>
            {
                  image?.slice(1,2).map((image)=>(
                      <>
                      <DisplayImage image={image.image} onClick={()=>dispatch({type:"DELETE_IMAGE",payload:{noteId:id,imageId:image.image}})}/>
                      </>
                  ))
              }
             <div className="img_flex">
             {
              image?.slice(2).map((image)=>(
                          <SmallImages image={image.image}/>
                      ))
              }
              </div>
            <form>
                <div className="card_title_pin">
                    <input style={{backgroundColor:color}} className="card_title_input" value={title}
                        placeholder="Title" type="text"
                        onChange={(e)=>dispatch({type:"CHANGE_PINNED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})}
                    />
                    <UnpinNote onClick={()=>dispatch({type:"UNPIN_NOTE",payload:{id}})}/>
                </div>
                <br />
                <div className="card_text_box">
                    <textarea style={{backgroundColor:color}} cols={50} className="text_area"
                        placeholder="Take a note..." name="text" value={description}
                        onChange={(e)=>dispatch({type:"CHANGE_PINNED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})}></textarea>
                </div>
                <div className="label__flex">
             
               {
                   label.map((label)=>(
                       <div className="label">{label.labelName}</div>
                   ))
               }
             </div>
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
        )
        }

        export default PinnedCard