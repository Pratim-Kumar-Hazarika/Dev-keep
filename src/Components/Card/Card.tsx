import "./Card.css";
import "../../Css/ToolTip.css"
import React, { useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { BxBxImageAlt, HeroiconsSolidDotsVertical, IonColorPaletteOutline, MdiArchiveArrowDownOutline, MdiLightPin,
MdiPin, MdiTrashCanOutline } from '../../Svgs/Svgs'
type CardProps = {
title:string;
description:string;
id:number;
}
function Card({title,description,id}:CardProps) {
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
        <div className="card_div">
            <form>
                <div className="card_title_pin">
                    <input className="card_title_input" value={title} placeholder="Title" type="text" />
                    <div className="tooltip">
                        <MdiLightPin className="pinned_icon" onClick={()=>pinNote(id)}/>
                            <span className="tooltiptext">Pin Note</span>
                    </div>
                </div>
                <br />
                <div className="card_text_box">
                    <textarea cols={50} className="text_area" placeholder="Take a note..." name="text"
                        value={description}></textarea>
                </div>
                <div className="label">lololol</div>
                <div className="card_icons_btns">
                    <div className="card_icons">
                        <div className="tooltip">
                             <IonColorPaletteOutline />
                                <span className="tooltiptext">Change color</span>
                        </div>
                        <div className="tooltip">
                                <BxBxImageAlt />
                                <span className="tooltiptext">Add image</span>
                        </div>
                        <div className="tooltip">
                                <MdiArchiveArrowDownOutline onClick={()=>dispatch({type:"ARCHIVE_FROM_NOTES",payload:{id}})}/>
                                <span className="tooltiptext">Archive</span>
                        </div>
                        <div className="tooltip">
                                <MdiTrashCanOutline onClick={(e)=>deleteNote(e,id)}/>
                                <span className="tooltiptext">Delete Note</span>
                        </div>
                        <button className="close_btn" type="submit">CLOSE</button>
                    </div>
                </div>
            </form>
        </div>
        )
        }

        export default Card