import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { DeleteForever } from '../Components/Reusable/DeleteForever'
import { RestoreNote } from '../Components/Reusable/RestoreNote'
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
            { state?.trash?.map(({title,description,label,id,color,image}:Notes)=>{
            return <><div key={id} className="card_div" style={{backgroundColor:color}}>
                 <div className="uplod_img_div">
                <img className="uplod_img" src={image}/>
            </div>
                <span> {title}</span>
                <p>{description}</p>
                <div className="label">"lolo"</div>
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