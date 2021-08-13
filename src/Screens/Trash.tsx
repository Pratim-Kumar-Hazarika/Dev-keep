import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { DeleteForever } from '../Components/Reusable/DeleteForever'
import { DisplayImage } from '../Components/Reusable/DisplayImage'
import { RestoreNote } from '../Components/Reusable/RestoreNote'
import { SmallImages } from '../Components/Reusable/SmallImages'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

export default function Trash() {
const {state,dispatch,keepOpacity} = useGoogleKeep()
return (
<>
    <Header />
    <EditLabel/>
    <div style={{display:"flex",opacity:keepOpacity? "0.4":"1"}}>
        <LeftNav />
        <div className="trash_cards">
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
                    <RestoreNote onClick={()=>dispatch({type:"RESTORE_NOTE",payload:{id}})}/>
                    <DeleteForever onClick={()=> dispatch({type:"DELETE_FOREVER",payload:{id}})}/>
                </div>
            </div>
            </>
            })}
        </div>
    </div>
</>
)}