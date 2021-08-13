import axios from 'axios';
import { Dispatch } from 'react';
import { ACTION } from '../reducer/actions';
import { ReducerInitialState } from './../types';
import { addLabelToArchivedNote } from './AddLabelToParticularNoteAxios/addLabelToArchiveNote';
import { addLabelToNote } from './AddLabelToParticularNoteAxios/addLabelToNote';
import { addLabelToPinnedNote } from './AddLabelToParticularNoteAxios/addLabelToPinnedNote';
import { deleteLabelFromArchivedNote } from './AddLabelToParticularNoteAxios/deleteLabelFromArchiveNote';
import { deleteLabelFromNote } from './AddLabelToParticularNoteAxios/deleteLabelFromNote';
import { deleteLabelFromPinnedNote } from './AddLabelToParticularNoteAxios/deleteLabelFromPinnedNote';
import { checkLabelInNotesHandler } from "./checkBoxIdLabelHandler";
import { dispatchHandler } from './dispatchLabelHandler';

export type NoteLabelHandlers = {
    state:ReducerInitialState;
    noteId:any;
    id:number;
    dispatch:Dispatch<ACTION>;
    labelName:string;
    token:string
}

export async function notesLabelHandler({state,noteId,id,dispatch,labelName,token}:NoteLabelHandlers) {
    const getNote = state.notes.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
    if(checkForLabel){
        await deleteLabelFromNote(noteId, id, token);
    }else {
        await addLabelToNote(noteId, labelName, id, token);
    }
}

export async function pinnedNotesLabelHandler({state,noteId,id,dispatch,labelName,token}:NoteLabelHandlers) {
    const getNote = state.pinnedNotes.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
    if(checkForLabel){
        await deleteLabelFromPinnedNote(noteId, id, token);
    }else {
        await addLabelToPinnedNote(noteId, labelName, id, token);
    }
}
export async function archiveLabelHandler({state,noteId,id,dispatch,labelName,token}:NoteLabelHandlers) {
    const getNote = state.archive.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
    if(checkForLabel){
        await deleteLabelFromArchivedNote(noteId, id, token);
    }else {
        await addLabelToArchivedNote(noteId, labelName, id, token);
    }
}
