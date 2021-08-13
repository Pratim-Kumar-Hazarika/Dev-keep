import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { Image, NoteLabelTypes, Notes, ReducerInitialState } from '../../Context/types'
import { filterNoteToBeEdited } from '../../Context/utils/filterNoteToBeEdited'
import { ArchiveCard } from '../ArchiveCard/ArchiveCard'
import Card from '../Card/Card'
import { EditNote } from '../EditNote/EditNote'
import Header from '../Header/Header'
import Input from '../Input/Input'
import LeftNav from '../LeftNavBar/LeftNav'
import PinnedCard from '../PinnedCards/PinnedCard'

export type EditNoteProps = {
    noteTitle:string;
    noteDescription:string;
    noteColor:string;
    noteImages:Image[] | undefined;
    noteId:number;
    noteLables:NoteLabelTypes[]
}


export const EditLabelNotes: React.FC<{}> = ({}) => {
    const {showEditNoteModel,state,keepOpacity} = useGoogleKeep()
    const {noteId}:any = useParams()
    const {from} = useParams()
    const {labelName} = useParams()
    const { filterNote, filterPinnedNote, filterArchiveNote } = filterNoteToBeEdited(state, noteId)
    const {title,id,description,label,color,images} = filterNote[0] || filterPinnedNote[0] || filterArchiveNote[0] || {}
    
    const filterNonEditedPinnedNotes = state.pinnedNotes.filter((note)=>note.id !== noteId)
    const filterNonEditedNotes = state.notes.filter((note)=>note.id !== noteId)
    const filterNotes = state.notes.filter((note) => note.label.find((label) => label.labelName === labelName))
    const filterPinnedNotes = state.pinnedNotes.filter((note) => note.label.find((label) => label.labelName === labelName))
    const filterArchiveNotes = state.archive.filter((note) => note.label.find((label) => label.labelName === labelName))

    return (
        <>
           <Header />
        <div className="edit_model"  >
           <EditNote from={from} title={title} description={description} color={color} image={images} id={id} label={label}/>
        </div>
        <div className="keep" style={{opacity:keepOpacity? "0.4":"1"}}>
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

