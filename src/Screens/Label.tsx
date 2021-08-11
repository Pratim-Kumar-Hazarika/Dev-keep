import React from 'react'
import { useParams } from 'react-router'
import { ArchiveCard } from '../Components/ArchiveCard/ArchiveCard'
import Card from '../Components/Card/Card'
import EditLabel from '../Components/EditLabel/EditLabel'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import PinnedCard from '../Components/PinnedCards/PinnedCard'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'
import { Notes, ReducerInitialState } from '../Context/types'
import { getFilteredLabelNotes } from '../Context/utils/getFilteredLabelNotes'

export const Label: React.FC<{}> = () => {
    const {labelName} = useParams()
    const {state,keepOpacity} = useGoogleKeep();
    const { filterPinnedNotes, filterNotes, filterArchiveNotes } = getFilteredLabelNotes(state, labelName)
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
               filterPinnedNotes?.map(({title,description,label,id,color,images}:Notes)=>{
               return <PinnedCard from={"pinnedCard"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> })
               }
           </div>
           <h5>{filterNotes?.length >0 && "OTHERS"}</h5>
           <div className="flex-wrap">
               {
               filterNotes?.map(({title,description,id,color,label,images}:Notes)=>{
               return <Card from={"card"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> })
               }
           </div>
           <h5>{filterArchiveNotes?.length >0 && "ARCHIVE"}</h5>
           <div className="flex-wrap">
               {
               filterArchiveNotes?.map(({title,description,id,color,label,images}:Notes)=>{
               return <ArchiveCard from={"card"} image={images} key={id} id={id} title={title} description={description} color={color} label={label} /> })
               }
           </div>
       </div>
   </div>

        </>
    )
}

