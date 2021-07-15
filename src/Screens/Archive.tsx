import React from 'react'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import AddImage from '../Components/Reusable/AddImage'
import { ArchiveNote } from '../Components/Reusable/ArchiveNote'
import {ChangeColor} from '../Components/Reusable/ChangeColor'
import { DeleteNote } from '../Components/Reusable/DeleteNote'
import { PinArchivedNote } from '../Components/Reusable/PinArchivedNote'
import { PinNote} from '../Components/Reusable/PinNote'
import { UnarchiveNote } from '../Components/Reusable/UnarchiveNote'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { colorsData } from '../Context/reducer/colors'
import { Notes } from '../Context/types'

export default function Archive() {
const {state,dispatch} = useGoogleKeep();
return (
<>
  <Header />
  <div style={{display:"flex"}}>
    <LeftNav />
    <div className="trash_cards">
      { state?.archive?.map(({title,description,label,id,color}:Notes)=>{
      return <div key={id} className="card_div" style={{backgroundColor:color}}>
        <form>
          <div className="card_title_pin">
            <input style={{backgroundColor:color}} className="card_title_input" value={title} placeholder="Title"
              type="text"
              onChange={(e)=>dispatch({type:"CHANGE_ARCHIVED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})}/>
            <PinArchivedNote onClick={()=>dispatch({type:"PIN_ARCHIVED_NOTE",payload:{id}})} pinText={"Pin archived Note"}/>
          </div>
          <br />
          <div className="card_text_box">
            <textarea style={{backgroundColor:color}} cols={50} className="text_area" placeholder="Take a note..."
              name="text" value={description}
              onChange={(e)=>dispatch({type:"CHANGE_ARCHIVED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})} ></textarea>
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
                    dispatch({type:"CHANGE_ARCHIVED_NOTES_BG",payload:{colorName:color.color,id:id}})}>
                    <span className="tooltiptext">{color.name}</span>
                  </div>
                  ))
                  }
                </div>
              </div>
              <AddImage />
              <UnarchiveNote onClick={()=>dispatch({type:"UNARCHIVE",payload:{id}})}/>
                <DeleteNote onClick={()=> dispatch({type:"DELETE_ARCHIVED_NOTE",payload:{id}})}/>
                  <button className="close_btn" type="submit">CLOSE</button>
            </div>
          </div>
        </form>
      </div>
      })}
    </div>
  </div>
</>
)
}