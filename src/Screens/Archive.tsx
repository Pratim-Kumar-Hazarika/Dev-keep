import { ArchiveCard } from '../Components/ArchiveCard/ArchiveCard'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

export default function Archive() {
const {state,keepOpacity} = useGoogleKeep();
return (
<>
  <Header />
  <EditLabel/>
  <div style={{display:"flex",opacity:keepOpacity? "0.4":"1"}}>
    <LeftNav />
    <div className="trash_cards" >
      { state?.archive?.map(({title,description,label,id,color,images}:Notes)=>{
      return<>
       <ArchiveCard from="archive" image={images} key={id} id={id} title={title} description={description} color={color} label={label}/>
      </>
      })}
    </div>
  </div>
</>
)
}