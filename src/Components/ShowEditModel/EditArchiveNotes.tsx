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


export const EditArchiveNotes: React.FC<{}> = ({}) => {
    const {showEditNoteModel,state,keepOpacity} = useGoogleKeep()
    const {noteId} = useParams()
    const {from} = useParams()
    const {  filterArchiveNote } = filterNoteToBeEdited(state, noteId)
    const {title,id,description,label,color,images} =  filterArchiveNote[0] || {}
    const filterNotEditedArchiveNotes = state.archive.filter((note)=>note.id !== Number(noteId))
    return (
        <>
           <Header />
        <div className="edit_model"  >
           <EditNote from={from} title={title} description={description} color={color} image={images} id={id} label={label}/>
        </div>
        <div style={{display:"flex",opacity:keepOpacity? "0.4":"1"}}>
    <LeftNav />
    <div className="trash_cards" >
      {filterNotEditedArchiveNotes?.map(({title,description,label,id,color,images}:Notes)=>{
      return<>
       <ArchiveCard from="archive" image={images} key={id} id={id} title={title} description={description} color={color} label={label}/>
      </>
      })}
    </div>
  </div>
        </>
    )
}

