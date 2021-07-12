import React from 'react'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import Input from '../Components/Input/Input'
import PinnedCard from '../Components/PinnedCards/PinnedCard'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'

function GoogleKeep() {
    const {state} = useGoogleKeep()
    // console.log("state is",state.notes)
    return (
        <>
        <div>
            <Header/>
            <Input/>
            <h5>{state?.pinnedNotes?.length >0 && "PINNED"}</h5>
            <div className="flex-wrap">
        
                { 
                state?.pinnedNotes?.map((item:any)=>{
                    return <PinnedCard  id={item.id} title={item.title} description={item.description }/> })
                }
            </div>
            <br/>
            <h5>OTHERS</h5>
            <div className="flex-wrap">
          
                { 
                state?.notes?.map((item:any)=>{
                    return <Card  id={item.id} title={item.title} description={item.description }/> })
                }
            </div>
          
          
        </div>
        </>
    )
}

export default GoogleKeep
