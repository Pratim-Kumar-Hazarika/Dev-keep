import { ArchiveCard } from '../Components/ArchiveCard/ArchiveCard'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import ArchiveNotesMessage from '../Components/Reusable/ArchiveNotesMessage'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

export default function Archive() {
const {state,keepOpacity,sidebar} = useGoogleKeep();
return (
<>
   <Header />
    <EditLabel/>
    <ArchiveNotesMessage/>
    <div className="keep" style={{opacity:keepOpacity? "0.4":"1"}}>
        <LeftNav />
        <div className={sidebar?"main active":"main"}>
            <h5>{state?.archive?.length >0 && "ARCHIVED"}</h5>
            <div className="flex-wrap">
                {
                state?.archive?.map(({title,description,id,color,label,images}:Notes)=>{
                return<>  <ArchiveCard from="archive" image={images} key={id} id={id} title={title} description={description} color={color} label={label}/>
                </>})
                }
            </div>
        </div>
    </div>
    <div className="extra_height"/>
</>
)
}