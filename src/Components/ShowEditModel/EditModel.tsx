import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { Image, NoteLabelTypes, Notes, ReducerInitialState } from '../../Context/types'
import { filterNoteToBeEdited } from '../../Context/utils/filterNoteToBeEdited'
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


export const EditModel: React.FC<{}> = ({}) => {
    const {showEditNoteModel,state,keepOpacity} = useGoogleKeep()
    const {noteId} = useParams()
    const {from} = useParams()
    const { filterNote, filterPinnedNote, filterArchiveNote } = filterNoteToBeEdited(state, noteId)
    const {title,id,description,label,color,images} = filterNote[0] || filterPinnedNote[0] || filterArchiveNote[0] || {}
    
    const filterNonEditedPinnedNotes = state.pinnedNotes.filter((note)=>note.id !== Number(noteId))
    const filterNonEditedNotes = state.notes.filter((note)=>note.id !== Number(noteId))

    return (
        <>
           <Header />
        <div className="edit_model"  >
           <EditNote from={from} title={title} description={description} color={color} image={images} id={id} label={label}/>
        </div>
        <div className="keep" style={{opacity:keepOpacity? "0.4":"1"}}>
        <LeftNav />
        <div className="main">
            <Input />
            <h5>{state?.pinnedNotes?.length >0 && "PINNED"}</h5>
            <div className="flex-wrap" >
                {
                filterNonEditedPinnedNotes?.map(({title,description,label,id,color,images}:Notes)=>{
                return <PinnedCard from={"pinnedCard"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> })
                }
            </div>
            <br />
            <h5>{state?.notes?.length >0 && "OTHERS"}</h5>
            <div className="flex-wrap">
                {
               filterNonEditedNotes?.map(({title,description,id,color,label,images}:Notes)=>{
                return<> <Card from={"card"} image={images} key={id} id={id} title={title} description={description} color={color} label={label}/> 
                </>})
                }
            </div>
        </div>
    </div>
        </>
    )
}

