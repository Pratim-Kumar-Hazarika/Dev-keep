import React from 'react'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import Input from '../Components/Input/Input'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import PinnedCard from '../Components/PinnedCards/PinnedCard'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

function GoogleKeep() {
const {state} = useGoogleKeep()
// console.log("state is",state.notes)
return (
<>
    <Header />
    <div style={{display:"flex"}}>
        <LeftNav />
        <div className="main">
            <Input />
            <h5>{state?.pinnedNotes?.length >0 && "PINNED"}</h5>
            <div className="flex-wrap">
                {
                state?.pinnedNotes?.map(({title,description,label,id,color}:Notes)=>{
                return <PinnedCard  key={id} id={id} title={title} description={description} color={color} /> })
                }
            </div>
            <br />
            <h5>{state?.notes?.length >0 && "OTHERS"}</h5>
            <div className="flex-wrap">
                {
                state?.notes?.map(({title,description,label,id,color}:Notes)=>{

                return <Card key={id} id={id} title={title} description={description} color={color} /> })
                }
            </div>
        </div>
    </div>

</>
)
}

export default GoogleKeep