import { Dispatch } from 'react';
import { ReducerInitialState } from './../types';
import { archiveLabelHandler, notesLabelHandler, pinnedNotesLabelHandler } from './labelHandler';

import { ACTION } from 'e:/Github/google-keep/src/Context/reducer/actions';

export type AddLabelToNote = {
    labelName:string;
    id:number;
    from:string;
    state:ReducerInitialState;
    noteId:number;
    dispatch:Dispatch<ACTION>
    token:string
}

export function addLabelToNoteClickHandler({labelName,id,from,state,noteId,dispatch,token}:AddLabelToNote){
    if(from === "pinnedCard"){
        pinnedNotesLabelHandler({state, noteId, id, dispatch, labelName,token});
    }else if(from === "card"){
        notesLabelHandler({state, noteId, id, dispatch, labelName,token});
    }else{
        archiveLabelHandler({state, noteId, id, dispatch, labelName,token});
    }
}

  
