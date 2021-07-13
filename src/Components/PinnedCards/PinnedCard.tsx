// import "../Card/Card.css";
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
function PinnedCard({title,description,id}:CardProps) {
// const [title,setTitle] = useState<string>('')
    // const [description,setDescription] = useState<string>('')
        const {dispatch,state} = useGoogleKeep()
        return (
        <div className="card_div">
            <form>
                <div className="card_title_pin">
                    <input className="card_title_input" value={title} placeholder="Title" type="text" />
                    <div className="tooltip">
                        <MdiPin onClick={()=>dispatch({type:"UNPIN_NOTE",payload:{id}})}/>
                            <span className="tooltiptext">Unpin Note</span>
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
                        <IonColorPaletteOutline />
                        <BxBxImageAlt />
                        <MdiArchiveArrowDownOutline  onClick={()=>dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})} />
                        {/*
                        <HeroiconsSolidDotsVertical /> */}
                        <div className="tooltip">
                            <MdiTrashCanOutline onClick={(e)=>dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})}/>
                                <span className="tooltiptext">Delete Note</span>
                        </div>
                        <button className="close_btn" type="submit">CLOSE</button>
                    </div>
                </div>
            </form>
        </div>
        )
        }

        export default PinnedCard