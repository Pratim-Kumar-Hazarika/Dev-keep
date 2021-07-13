import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'
import { MdiDeleteRestore, MdiTrashCanOutline } from '../Svgs/Svgs'

export default function Trash() {
const {state,dispatch} = useGoogleKeep()
return (
<>
    <Header />
    <div style={{display:"flex"}}>
        <LeftNav />
        <div className="trash_cards">
            { state?.trash?.map(({title,description,label,id}:Notes)=>{
            return <div className="card_div">
                <span> {title}</span>
                <p>{description}</p>
                <div className="label">{label}</div>
                <div className="trash_card_icons">
                    <div className="tooltip">
                        <MdiDeleteRestore onClick={()=>dispatch({type:"RESTORE_NOTE",payload:{id}})} />
                        <span className="tooltiptext">Restore</span>
                    </div>
                    <div className="tooltip">
                        <MdiTrashCanOutline onClick={()=>dispatch({type:"DELETE_FOREVER",payload:{id}})}/>
                        <span className="tooltiptext">Delete Forever</span>
                    </div>
                </div>
            </div>
            })}
        </div>
    </div>
</>
)}