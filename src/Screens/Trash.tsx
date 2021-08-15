import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { DeleteForever } from '../Components/Reusable/DeleteForever'
import { DisplayImage } from '../Components/Reusable/DisplayImage'
import NoNotesMessage from '../Components/Reusable/NoNotesMessage'
import { RestoreNote } from '../Components/Reusable/RestoreNote'
import { SmallImages } from '../Components/Reusable/SmallImages'
import { useAuth } from '../Context/AuthProvider'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'
import { deleteNoteForever } from '../Context/utils/Trash/deleteNoteForever'
import { restoreNote } from '../Context/utils/Trash/restoreNote'

export default function Trash() {
const {state,dispatch,keepOpacity,sidebar} = useGoogleKeep()
const {token} = useAuth();
return (
<>
    <Header />
    <EditLabel/>
    <NoNotesMessage/>
    <div  className="keep" style={{opacity:keepOpacity? "0.4":"1"}}>
        <LeftNav />
        <div className={sidebar?"main active":"main"}>
            <h5>{state?.trash?.length >0 && "TRASH NOTES"}</h5>
            <div className="flex-wrap">
            { state?.trash?.map(({title,description,label,id,color,images}:Notes)=>{
            return <>
             <div className="card_div" style={{backgroundColor:color}}>
              {
                    images?.slice(0,1).map((image)=>(
                        <>
                        <DisplayImage image={image.image} onClick={()=>dispatch({type:"DELETE_IMAGE",payload:{noteId:id,imageId:image.image}})}/>
                        </>
                    ))
                }
               <div className="img_flex">
               {
                images?.slice(1).map((image)=>(
                            <SmallImages image={image.image}/>
                        ))
                }
                </div>
                <span> {title}</span>
                <p>{description}</p>
                <div className="label__flex">
             {
                 label.map((label)=>(
                     <div className="label">{label.labelName}</div>
                 ))
             }
           </div>
                <div className="trash_card_icons">
                    <RestoreNote onClick={()=>restoreNote({id,dispatch,token})}/>
                    <DeleteForever onClick={()=> deleteNoteForever({id,dispatch,token})}/>
                </div>
            </div>
            </>
            })}
        </div>
        </div>
    </div>
    <div className="extra_height"/>
</>
)}