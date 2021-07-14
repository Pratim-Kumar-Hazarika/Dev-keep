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
    name:"red",
    color:"#EF4444"
    },
    {
    name:"yellow",
    color:"#FDE68A"
    },
    {
    name:"blue",
    color:"#1D4ED8"
    },
    {
    name:"indigo",
    color:"#6366F1"
    },
    {
    name:"purple",
    color:"#C4B5FD"
    },
    {
    name:"pink",
    color:"#F9A8D4"
    },
    {
    name:"gray",
    color:"#F9FAFB"
    },
    {
    name:"white",
    color:"#fff"
    },
    {
    name:"violet",
    color:"#A78BFA"
    },
    {
    name:"dark pink",
    color:"#DB2777"
    },
    {
    name:"black",
    color:"#111827"
    },
    {
    name:"silver",
    color:"#D1D5DB"
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
        <div className="card_div" style={{backgroundColor:color}}>
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
                        {/* <ChangeColor /> */}
                        <div className="">
            {
            colorsData.map((color:any)=>(
            <div className="circle tooltip" style={{backgroundColor:color.color}} onClick={()=>dispatch({type:"ADD_BG_COLOR",payload:{colorName:color.name,id}})} >
                <span className="tooltiptext">{color.name}</span>
            </div>
            ))
            }
        </div>
                        <AddImage/>
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