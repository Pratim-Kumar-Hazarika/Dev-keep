import React, { useState } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { BxBxImageAlt, HeroiconsSolidDotsVertical, IonColorPaletteOutline, MdiArchiveArrowDownOutline, MdiLightPin } from '../../Svgs/Svgs'
import "./Input.css";
function Input() {
    const {title,setDescription,setTitle,description,label,setLabel} = useGoogleKeep()
    function addNoteHandler(e:any){
        e.preventDefault()
        dispatch({type:"ADD_NOTE",payload:{id:Math.random(),title:title,description:description,label:label,color:""}})
        setTitle("");
        setDescription('')
    }

    const {dispatch,state} = useGoogleKeep()


    return (
        <div className="input_div">
            <form>
                <div className="title_pin">
                <input className="title_input" value={title} placeholder="Title" type="text" onChange={(e)=>setTitle(e.target.value)}/> 
                <MdiLightPin/>
                </div>
            <br/>
            <div className="text_box">
                <textarea cols={50}  className="text_area" placeholder="Take a note..." name="text"  value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
            </div>
            <div className="text_box_icons_btns">
                <div className="text_box_icons">
                    <IonColorPaletteOutline/>
                    <BxBxImageAlt/>
                    <MdiArchiveArrowDownOutline/>
                    <HeroiconsSolidDotsVertical/>
                </div>
                <div className="text_box_btns">
                    <button className="addNote_btn" onClick={addNoteHandler} type="submit">Add Note</button>
                    <button className="close_btn" onClick={addNoteHandler} type="submit">Close</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Input
