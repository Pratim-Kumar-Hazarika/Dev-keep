import { ArchiveCard } from '../Components/ArchiveCard/ArchiveCard'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import AddImage from '../Components/Reusable/AddImage'
import {ChangeColor} from '../Components/Reusable/ChangeColor'
import { DeleteNote } from '../Components/Reusable/DeleteNote'
import { PinArchivedNote } from '../Components/Reusable/PinArchivedNote'
import { UnarchiveNote } from '../Components/Reusable/UnarchiveNote'
import { VerticalDots } from '../Components/Reusable/VerticalDots'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { colorsData } from '../Context/reducer/colors'
import { Notes } from '../Context/types'

export default function Archive() {
const {state,dispatch} = useGoogleKeep();
return (
<>
  <Header />
  <div style={{display:"flex"}}>
    <LeftNav />
    <EditLabel/>
    <div className="trash_cards">
      { state?.archive?.map(({title,description,label,id,color}:Notes)=>{
      return<>
       <ArchiveCard from="archive" key={id} id={id} title={title} description={description} color={color}/>
      </>
      })}
    </div>
  </div>
</>
)
}