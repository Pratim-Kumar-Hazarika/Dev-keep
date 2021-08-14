import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useAuth } from '../../Context/AuthProvider'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors'
import { Image, NoteLabelTypes } from '../../Context/types'
import { addNoteHandler } from '../../Context/utils/addNoteHandler'
import { archiveClickHandler } from '../../Context/utils/archiveNoteClickHandler'
import { unarchiveNote } from '../../Context/utils/ArchiveNotesAxios/unarchive'
import { changeArchiveNotesDescription } from '../../Context/utils/DescriptionTitle/DescriptionUpdateAxios/updateArchiveDescription'
import { editDescription } from '../../Context/utils/DescriptionTitle/DescriptionUpdateAxios/updateDescriptionDispatchHandler'
import { changeNotesDescription } from '../../Context/utils/DescriptionTitle/DescriptionUpdateAxios/updateNoteDescription'
import { changePinnedNotesDescription } from '../../Context/utils/DescriptionTitle/DescriptionUpdateAxios/updatePinnedNotesDescription'
import { changeColorFromEditModel } from '../../Context/utils/EditNote/changeColorFromEditModel'
import { deleteImageFromArchive } from '../../Context/utils/Image/ImageDeleteAxios/deleteImageFromArchive'
import { deleteImageFromOthers } from '../../Context/utils/Image/ImageDeleteAxios/deleteImageFromOthers'
import { deleteImageFromPinnedNotes } from '../../Context/utils/Image/ImageDeleteAxios/deleteImageFromPinned'
import { deleteImageHandler } from '../../Context/utils/Image/ImageDeleteHandler'
import { archiveNoteFromOthers } from '../../Context/utils/OtherNotesAxios/archiveNoteFromOthers'
import { archivePinNote } from '../../Context/utils/PinnedNotesAxios/archivePinNote'
import { editNoteTitle } from '../../Context/utils/DescriptionTitle/TitleUpdateAxios/editeTitleDispatchHandler'
import { changeArchiveNotesTitle } from '../../Context/utils/DescriptionTitle/TitleUpdateAxios/updateArchiveNoteTitle'
import { changeNotesTitle } from '../../Context/utils/DescriptionTitle/TitleUpdateAxios/updateNotesTitle'
import { changePinnedNotesTitle } from '../../Context/utils/DescriptionTitle/TitleUpdateAxios/updatePinnedNotesTitle'
import AddImage from '../Reusable/AddImage'
import { ArchiveNote } from '../Reusable/ArchiveNote'
import { ChangeColor } from '../Reusable/ChangeColor'
import { DeleteNote } from '../Reusable/DeleteNote'
import { DisplayImage } from '../Reusable/DisplayImage'
import { EditNoteImage } from '../Reusable/EditNoteImage'
import { MediumImages } from '../Reusable/MediumImages'
import { NoteMediumImages } from '../Reusable/NoteMediumImages'
import { PinFromModel } from '../Reusable/PinFromModel'
import { PinNote } from '../Reusable/PinNote'
import { PinNoteFromInput } from '../Reusable/PinNoteFromInput'
import { ShowImage } from '../Reusable/ShowImage'
import { SmallImages } from '../Reusable/SmallImages'
import { VerticalDots } from '../Reusable/VerticalDots'
import { NotoV1CrossMark } from '../Svgs/Svg'
import { archiveNoteTitleDescriptionHandler, cardTitleDescriptionHandler, pinnedNoteTitleDescriptionHandler } from '../../Context/utils/DescriptionTitle/titleDesriptionHandlers'

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
    const {dispatch,showEditNoteModel,setShowEditNoteModel,setKeepOpacity,state} = useGoogleKeep()
    const {noteId}= useParams()
    const navigate = useNavigate()
    const {token} = useAuth()
    const textRef = useRef<any>()
   async function saveNote(e:any){
        e.preventDefault();
        setShowEditNoteModel("hidden");
        setKeepOpacity(false)
        if(from ==="archive"){
            navigate("/archive")
          return  await archiveNoteTitleDescriptionHandler(id, description, token, title)
        }else if(from ==="pinnedCard"){
            navigate("/home")
          return await pinnedNoteTitleDescriptionHandler(id, description, token, title)
        }else if(from ==="card"){
            navigate("/home")
           return await cardTitleDescriptionHandler(id, description, token, title)
        }   
    }

    useEffect(()=>{
        setKeepOpacity(true)
    },[noteId])


 
    
    function pinNote(){
        if(from ==="card"){
            dispatch({type:"PIN_NOTE",payload:{id}})
        }else if(from =="pinnedCard"){
            dispatch({type:"UNPIN_NOTE",payload:{id}})
        }else if(from ==="archive"){
            dispatch({type:"PIN_ARCHIVED_NOTE",payload:{id}})
        }
       
    }
  async function achiveNoteFromEditModel(){
        if(from ==="card"){
        await archiveNoteFromOthers({dispatch,id,token})
        }else if(from =="pinnedCard"){
          await archivePinNote({dispatch,id,token})
        }else if(from ==="archive"){
         await unarchiveNote({dispatch,id,token})
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
        // setShowEditNoteModel("hidden");
        // setKeepOpacity(false)
    }
   
 
  function setHeight(e:any){
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "50px";
    textRef.current.style.height = `${target.scrollHeight}px`;
  }

    return (
        <>
        <div className="edit_model_popup" style={{backgroundColor:color}} >
              {
                    image?.slice(0,1).map(({image,id:imageId})=>(
                        <>
                        <EditNoteImage image={image} onClick={()=>deleteImageHandler({image,imageId,from,id,dispatch,token})}/>
                        </>
                    ))
                }
               <div className="img_flex" >
               {
                image?.slice(1).map(({image,id:imageId})=>(
                              <>
                            <NoteMediumImages image={image}  onClick={()=>deleteImageHandler({image,imageId,from,id,dispatch,token})}/>
                            </>
                        ))
                }
                </div>
            <form>
                <div className="card_title_pin">
                    <input style={{backgroundColor:color}} className="card_title_input" value={title}
                        placeholder="Title" type="text"
                        onChange={(e)=>editNoteTitle({e,from,dispatch,id})} />
                    <PinFromModel onClick={()=>pinNote()}/>
                </div>
                <div className="card_text_box">
                    <textarea style={{backgroundColor:color}} ref={textRef}  className="text_area"
                        placeholder="Take a note..." name="text" value={description}
                        onChange={(e)=>editDescription({e,from,dispatch,id,textRef})} onClick={(e)=>setHeight(e)}></textarea>
                </div>
                <div className="label__flex">
               {
                   label?.map((label)=>(
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
                                <div className="circle tooltip" style={{backgroundColor:color}} onClick={()=>changeColorFromEditModel(color,dispatch,id,from,token)}>
                                    <span className="tooltiptext">{name}</span>
                                </div>
                                ))
                                }
                            </div>
                        </div>
                        <AddImage from={from} noteId={id}/>
                        <ArchiveNote onClick={()=>achiveNoteFromEditModel()}/>
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



