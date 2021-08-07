import React from 'react'
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
const {state} = useGoogleKeep()
return (
<>
    <Header />
   
    <div style={{display:"flex"}}>
        <LeftNav />
        <div className="main">
            <Input />
            <EditLabel/>
   
            <h5>{state?.pinnedNotes?.length >0 && "PINNED"}</h5>
            <div className="flex-wrap">
                {
                state?.pinnedNotes?.map(({title,description,label,id,color}:Notes)=>{
                return <PinnedCard from={"pinnedCard"} key={id} id={id} title={title} description={description} color={color} /> })
                }
            </div>
            <br />
            <h5>{state?.notes?.length >0 && "OTHERS"}</h5>
            <div className="flex-wrap">
                {
                state?.notes?.map(({title,description,id,color,label}:Notes)=>{

                return <Card from={"card"}  key={id} id={id} title={title} description={description} color={color} /> })
                }
            </div>
        </div>
    </div>

</>
)
}

export default GoogleKeep