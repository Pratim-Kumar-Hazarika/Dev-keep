import React from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { Image, NoteLabelTypes } from '../../Context/types'
import { EditNote } from '../EditNote/EditNote'

export type EditNoteProps = {
    noteTitle:string;
    noteDescription:string;
    noteColor:string;
    noteImages:Image[] | undefined;
    noteId:number;
    noteLables:NoteLabelTypes[]
}


export const EditModel: React.FC<EditNoteProps> = ({noteTitle,noteDescription,noteColor,noteImages,noteId,noteLables}) => {
    const {showEditNoteModel} = useGoogleKeep()
    return (
        <div className="edit_model"  >
           {/* <EditNote noteTitle={noteTitle} noteDescription={noteDescription} noteColor={noteColor} noteImages={noteImages} noteId={noteId} noteLables={noteLables}/> */}
        </div>
    )
}