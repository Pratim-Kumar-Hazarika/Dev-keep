// import "../Card/Card.css";
import "../../Css/ToolTip.css"
import React, { useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { BxBxImageAlt, HeroiconsSolidDotsVertical, IonColorPaletteOutline, MdiArchiveArrowDownOutline, MdiLightPin,
MdiPin, MdiTrashCanOutline } from '../../Svgs/Svgs'
import {ChangeColor} from "../Reusable/ChangeColor"
import AddImage from "../Reusable/AddImage"
import { ArchiveNote } from "../Reusable/ArchiveNote"
import { DeleteNote } from "../Reusable/DeleteNote"
import { UnpinNote } from "../Reusable/UnpinNote"
import {colorsData} from "../../Context/reducer/colors"
type CardProps = {
title:string;
description:string;
id:number;
color:string
}
function PinnedCard({title,description,id,color}:CardProps) {
// const [title,setTitle] = useState<string>('')
    // const [description,setDescription] = useState<string>('')
        const {dispatch,state} = useGoogleKeep()
        return (
        <div className="card_div" style={{backgroundColor:color}}>
            <form>
                <div className="card_title_pin">
                    <input style={{backgroundColor:color}} className="card_title_input" value={title} placeholder="Title" type="text" />
                    <UnpinNote onClick={()=>dispatch({type:"UNPIN_NOTE",payload:{id}})}/>
                </div>
                <br />
                <div className="card_text_box">
                    <textarea style={{backgroundColor:color}} cols={50} className="text_area" placeholder="Take a note..." name="text"
                        value={description}></textarea>
                </div>
                <div className="label">lololol</div>
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
                        <AddImage/>
                        <ArchiveNote onClick={()=>dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})}/>
                        <DeleteNote onClick={()=> dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})}/>
                        <button className="close_btn" type="submit">CLOSE</button>
                    </div>
                </div>
            </form>
        </div>
        )
        }

        export default PinnedCard