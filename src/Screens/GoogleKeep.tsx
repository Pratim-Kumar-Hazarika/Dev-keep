import Card from '../Components/Card/Card'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import Input from '../Components/Input/Input'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import PinnedCard from '../Components/PinnedCards/PinnedCard'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'
import "../Components/EditLabel/LabelEdit.css"
import "../Components/DeleteModel/DeleteModel.css"

function GoogleKeep() {
const {state,keepOpacity,sidebar} = useGoogleKeep()

return (
<>
    <Header />
    <EditLabel/>
    <div className="keep" style={{opacity:keepOpacity? "0.4":"1"}}>
        <LeftNav />
        <div className={sidebar?"main active":"main"}>
            <Input />
            <h5>{state?.pinnedNotes?.length >0 && "PINNED"}</h5>
            <div className="flex-wrap" >
                {
                state?.pinnedNotes?.map(({title,description,label,id,color,images}:Notes)=>{
                return <PinnedCard  from={"pinnedCard"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> })
                }
            </div>
            <br />
            <h5>{state?.notes?.length >0 && "OTHERS"}</h5>
            <div className="flex-wrap">
                {
                state?.notes?.map(({title,description,id,color,label,images}:Notes)=>{

                return<> <Card from={"card"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> 
                </>})
                }
            </div>
        </div>
    </div>
    <div className="extra_height"/>
</>
)
}

export default GoogleKeep