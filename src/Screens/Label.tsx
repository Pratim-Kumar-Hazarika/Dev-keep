import React from 'react'
import { useParams } from 'react-router'
import { ArchiveCard } from '../Components/ArchiveCard/ArchiveCard'
import Card from '../Components/Card/Card'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import PinnedCard from '../Components/PinnedCards/PinnedCard'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes } from '../Context/types'

export const Label: React.FC<{}> = () => {
    const {labelName} = useParams()
    const {state,keepOpacity} = useGoogleKeep();
    const filterNotes = state.notes.filter((note)=>note.label.find((label)=>label.labelName === labelName))
    const filterPinnedNotes = state.pinnedNotes.filter((note)=>note.label.find((label)=>label.labelName === labelName))
    const filterArchiveNotes = state.archive.filter((note)=>note.label.find((label)=>label.labelName === labelName))
    return (
        <>
         <Header />
         <EditLabel/>
        <div className="keep"  style={{opacity:keepOpacity? "0.4":"1"}}>
       <LeftNav />
       <div className="main">
   
           <h5>{filterPinnedNotes?.length >0 && "PINNED"}</h5>
           <div className="flex-wrap">
               {
               filterPinnedNotes?.map(({title,description,label,id,color,image}:Notes)=>{
               return <PinnedCard from={"pinnedCard"} image={image} key={id} id={id} title={title} description={description} color={color} label={label}/> })
               }
           </div>
           <h5>{filterNotes?.length >0 && "OTHERS"}</h5>
           <div className="flex-wrap">
               {
               filterNotes?.map(({title,description,id,color,label,image}:Notes)=>{
               return <Card from={"card"} image={image} key={id} id={id} title={title} description={description} color={color} label={label}/> })
               }
           </div>
           <h5>{filterArchiveNotes?.length >0 && "ARCHIVE"}</h5>
           <div className="flex-wrap">
               {
               filterArchiveNotes?.map(({title,description,id,color,label,image}:Notes)=>{
               return <ArchiveCard from={"card"} image={image} key={id} id={id} title={title} description={description} color={color} label={label} /> })
               }
           </div>
       </div>
   </div>
        </>
    )
}