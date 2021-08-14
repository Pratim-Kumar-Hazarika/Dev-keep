import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAuth } from '../../Context/AuthProvider'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { colorsData } from '../../Context/reducer/colors'
import { Image, NoteLabelTypes } from '../../Context/types'
import { editDescription } from '../../Context/utils/DescriptionTitle/DescriptionUpdateAxios/updateDescriptionDispatchHandler'
import { changeColorFromEditModel } from '../../Context/utils/EditNote/changeColorFromEditModel'
import { deleteImageHandler } from '../../Context/utils/Image/ImageDeleteHandler'
import { editNoteTitle } from '../../Context/utils/DescriptionTitle/TitleUpdateAxios/editeTitleDispatchHandler'
import AddImage from '../Reusable/AddImage'
import { ArchiveNote } from '../Reusable/ArchiveNote'
import { ChangeColor } from '../Reusable/ChangeColor'
import { DeleteNote } from '../Reusable/DeleteNote'
import { EditNoteImage } from '../Reusable/EditNoteImage'
import { NoteMediumImages } from '../Reusable/NoteMediumImages'
import { PinFromModel } from '../Reusable/PinFromModel'
import { VerticalDots } from '../Reusable/VerticalDots'
import { achiveNoteFromEditModel } from '../../Context/utils/EditNote/archiveNoteFromEditModel'
import { UnpinNote } from '../Reusable/UnpinNote'
import { UnarchiveNote } from '../Reusable/UnarchiveNote'
import { deleteNoteFromEditModel } from '../../Context/utils/EditNote/deleteNoteFromEditMode'
import { pinNoteFromEdit } from '../../Context/utils/EditNote/pinNoteFromEditMode'
import { unpinNoteFromEdit } from '../../Context/utils/EditNote/unpinNoteFromEditModel'
import { unarchiveNoteFromEdit } from '../../Context/utils/EditNote/unarchiveNoteFromEditModel'
import { saveNote } from '../../Context/utils/EditNote/saveNoteFromEditModel'

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
    const {dispatch,setShowEditNoteModel,setKeepOpacity} = useGoogleKeep()
    const {noteId}= useParams()
    const navigate = useNavigate()
    const {token} = useAuth()
    const textRef = useRef<any>()
    useEffect(()=>{
        setKeepOpacity(true)
        // eslint-disable-next-line
    },[noteId])

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
                    {
                        from === "pinnedCard" ? <UnpinNote onClick={()=>unpinNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate})}/> :<PinFromModel onClick={()=>pinNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate})}/>
                    }
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
                      {
                          from === "archive" ?  <UnarchiveNote
                          onClick={() =>unarchiveNoteFromEdit({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate})}/> : <ArchiveNote onClick={()=>achiveNoteFromEditModel({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate})}/>
                      }  
                            <DeleteNote onClick={()=>deleteNoteFromEditModel({from,dispatch,id,token,setShowEditNoteModel,setKeepOpacity,navigate})}/>
                               <VerticalDots noteId={id} from={from} />
                               <button className="addNote_btn"  type="submit" onClick={(e)=>saveNote({e,from,id,token,setShowEditNoteModel,setKeepOpacity,navigate,description,title})}>Save Note</button>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}



