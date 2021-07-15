import "./Card.css";
import "../../Css/ToolTip.css"
import React, { useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { BxBxImageAlt, HeroiconsSolidDotsVertical, IonColorPaletteOutline, MdiArchiveArrowDownOutline, MdiLightPin,
MdiPin, MdiTrashCanOutline } from '../../Svgs/Svgs'
import {ChangeColor} from "../Reusable/ChangeColor"
import AddImage from "../Reusable/AddImage";
import {ArchiveNote} from "../Reusable/ArchiveNote"
import{ DeleteNote }from "../Reusable/DeleteNote";
import { PinNote } from "../Reusable/PinNote";
type CardProps = {
title:string;
description:string;
id:number;
color:string
}
const colorsData = [
{
name:"Green",
color:"#ccff90"
},
{
name:"Red",
color:"#F28B82"
},
{
name:"Orange",
color:"#FBBC04"
},
{
name:"Yellow",
color:"#FFF475"
},
{
name:"Green",
color:"#CCFF90"
},
{
name:"Teal",
color:"#A7FFEB"
},
{
name:"Blue",
color:"#CBF0F8"
},
{
name:"Dark Blue",
color:"#AECBFA"
},
{
name:"Purple",
color:"#D7AEFB"
},
{
name:"Pink",
color:"#FDCFF8"
},
{
name:"Brown",
color:"#E6C9A8"
},
{
name:"Gray",
color:"#E8EAED"
}
]
function Card({title,description,id,color}:CardProps) {
// const [title,setTitle] = useState<string>('')
    // const [description,setDescription] = useState<string>('')
        const {dispatch,state} = useGoogleKeep()
        function deleteNote(e:any,id:number){
        e.preventDefault()
        dispatch({type:"DELETE_NOTE",payload:{id}})
        }
        function pinNote(id:number){
        dispatch({type:"PIN_NOTE",payload:{id}})
        }
        return (
        <div className="card_div" style={{background:color}}>
            <form>
                <div className="card_title_pin">
                    <input className="card_title_input" value={title} placeholder="Title" type="text" />
                    <PinNote onClick={()=>dispatch({type:"PIN_NOTE",payload:{id}})}/>
                </div>
                <br />
                <div className="card_text_box">
                    <textarea cols={50} className="text_area" placeholder="Take a note..." name="text"
                        value={description}></textarea>
                </div>
                <div className="label">lololol</div>
                <div className="card_icons_btns">
                    <div className="card_icons">
                        {/*
                        <ChangeColor /> */}
                        <div className="change_color_icon">
                           <ChangeColor/>
                            <div className="color_divs ">
                                {
                                colorsData.map((color:any)=>(
                                <div className="circle tooltip" style={{backgroundColor:color.color}} onClick={()=>dispatch({type:"ADD_BG_COLOR",payload:{colorName:color.name,id:id}})}>
                                    <span className="tooltiptext">{color.name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage />
                        <ArchiveNote onClick={()=>dispatch({type:"ARCHIVE_FROM_NOTES",payload:{id}})}/>
                            <DeleteNote onClick={()=> dispatch({type:"DELETE_NOTE",payload:{id}})}/>
                                <button className="close_btn" type="submit">CLOSE</button>
                    </div>
                </div>
            </form>
        </div>
        )
        }

        export default Card