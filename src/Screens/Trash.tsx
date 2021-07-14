import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { DeleteForever } from '../Components/Reusable/DeleteForever'
import { DeleteNote } from '../Components/Reusable/DeleteNote'
import { RestoreNote } from '../Components/Reusable/RestoreNote'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

export default function Trash() {
const {state,dispatch} = useGoogleKeep()
return (
<>
    <Header />
    <div style={{display:"flex"}}>
        <LeftNav />
        <div className="trash_cards">
            { state?.trash?.map(({title,description,label,id,color}:Notes)=>{
            return <div className="card_div" style={{backgroundColor:color}}>
                <span> {title}</span>
                <p>{description}</p>
                <div className="label">{label}</div>
                <div className="trash_card_icons">
                    <RestoreNote onClick={()=>dispatch({type:"RESTORE_NOTE",payload:{id}})}/>
                    <DeleteForever onClick={()=> dispatch({type:"DELETE_FOREVER",payload:{id}})}/>
                </div>
            </div>
            })}
        </div>
    </div>
</>
)}