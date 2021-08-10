import React, { useRef } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors'
import { Image, NoteLabelTypes } from '../../Context/types'
import { addNoteHandler } from '../../Context/utils/addNoteHandler'
import { archiveClickHandler } from '../../Context/utils/archiveNoteClickHandler'
import AddImage from '../Reusable/AddImage'
import { ArchiveNote } from '../Reusable/ArchiveNote'
import { ChangeColor } from '../Reusable/ChangeColor'
import { DeleteNote } from '../Reusable/DeleteNote'
import { DisplayImage } from '../Reusable/DisplayImage'
import { MediumImages } from '../Reusable/MediumImages'
import { PinFromModel } from '../Reusable/PinFromModel'
import { PinNote } from '../Reusable/PinNote'
import { PinNoteFromInput } from '../Reusable/PinNoteFromInput'
import { ShowImage } from '../Reusable/ShowImage'
import { SmallImages } from '../Reusable/SmallImages'
import { VerticalDots } from '../Reusable/VerticalDots'

export type EditNoteProps = {
    title:string;
    description:string;
    id:number;
    color:string;
    from :string;
    image:Image[] | undefined;
    label:NoteLabelTypes[]
}

export const EditNote: React.FC<EditNoteProps> = ({title,description,id,color,from,image,label}) => {
    const {dispatch,showEditNoteModel,setShowEditNoteModel,setKeepOpacity} = useGoogleKeep()
    function saveNote(e:any){
        e.preventDefault();
        setShowEditNoteModel("hidden");
        console.log("clicked svae")
        // setKeepOpacity(false)
    }
    const textRef = useRef<any>()
    function editDescription(e:any){
        if(from =="card"){
            dispatch({type:"CHANGE_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
        }else if(from ==="pinnedCard"){
            dispatch({type:"CHANGE_PINNED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
        }else if(from ==="archive"){
            dispatch({type:"CHANGE_ARCHIVED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
        }
        const target = e.target as HTMLTextAreaElement;
        textRef.current.style.height = "50px";
        textRef.current.style.height = `${target.scrollHeight}px`;
    }
    function editNoteTitle(e:any){
        if(from ==="card"){
            dispatch({type:"CHANGE_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})
        } 
         else if(from === "pinnedCard"){
            dispatch({type:"CHANGE_PINNED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})
        } 
         else if(from ==="archive"){
            dispatch({type:"CHANGE_ARCHIVED_NOTES_TITLE",payload:{newTitle:e.target.value,id:id}})
        }
        }
       
    
    function pinNote(){
        if(from ==="card"){
            dispatch({type:"PIN_NOTE",payload:{id}})
        }else if(from =="pinnedCard"){
            dispatch({type:"UNPIN_NOTE",payload:{id}})
        }else if(from ==="archive"){
            dispatch({type:"PIN_ARCHIVED_NOTE",payload:{id}})
        }
       
    }
    function achiveNoteFromEditModel(){
        if(from ==="card"){
            dispatch({type:"ARCHIVE_FROM_NOTES",payload:{id}})
        }else if(from =="pinnedCard"){
            dispatch({type:"ARCHIVE_FROM_PINNED_NOTES",payload:{id}})
        }else if(from ==="archive"){
            dispatch({type:"UNARCHIVE",payload:{id}})
        }
        
    }
    function deleteNoteFromEditModel(){
        if(from ==="card"){
            dispatch({type:"DELETE_NOTE",payload:{id}})
        }else if(from =="pinnedCard"){
            dispatch({type:"DELETE_PINNED_NOTE",payload:{id}})
        }else if(from ==="archive"){
            dispatch({type:"DELETE_ARCHIVED_NOTE",payload:{id}})
        }
      
    }
    function changeColorFromEditModel(color:any){
        if(from ==="card"){
            dispatch({type:"CHANGE_OTHER_NOTES_BG",payload:{colorName:color,id:id}})
        }else if(from =="pinnedCard"){
            dispatch({type:"CHANGE_PINNED_NOTES_BG",payload:{colorName:color,id:id}})
        }else if(from ==="archive"){
            dispatch({type:"CHANGE_ARCHIVED_NOTES_BG",payload:{colorName:color,id:id}})
        }
        
    }
  
    return (
        <>
        <div className="edit_model_popup" style={{backgroundColor:color,visibility:showEditNoteModel}} >
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
                            <MediumImages image={image.image}/>
                        ))
                }
                </div>
            <form>
                <div className="card_title_pin">
                    <input style={{backgroundColor:color}} className="card_title_input" value={title}
                        placeholder="Title" type="text"
                        onChange={(e)=>editNoteTitle(e)}/>
                    <PinFromModel onClick={()=>pinNote()}/>
                </div>
                <div className="card_text_box">
                    <textarea style={{backgroundColor:color}} ref={textRef}  className="text_area"
                        placeholder="Take a note..." name="text" value={description}
                        onChange={(e)=>editDescription(e)}></textarea>
                </div>
                <div className="label__flex">
               {
                   label.map((label)=>(
                       <div className="label">{label.labelName}</div>
                   ))
               }           
                </div>
                <div className="">
                    <div className="edit_note_icons">
                        <div className="change_color_icon">
                            <ChangeColor />
                            <div className="color_divs ">
                                {
                                colorsData.map(({color,name}:any)=>(
                                <div className="circle tooltip" style={{backgroundColor:color}} onClick={()=>changeColorFromEditModel(color)}>
                                    <span className="tooltiptext">{name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage from={from} noteId={id}/>
                        <ArchiveNote onClick={achiveNoteFromEditModel}/>
                            <DeleteNote onClick={deleteNoteFromEditModel}/>
                               <VerticalDots noteId={id} from={from} />
                               <button className="addNote_btn"  type="submit" onClick={(e)=>saveNote(e)}>Save Note</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}