import { Dispatch } from 'react';
import { ACTION } from '../reducer/actions';
import { ReducerInitialState } from './../types';
import { checkLabelInNotesHandler } from "./checkBoxIdLabelHandler";
import { dispatchHandler } from './dispatchLabelHandler';

export type NoteLabelHandlers = {
    state:ReducerInitialState;
    noteId:number;
    id:number;
    dispatch:Dispatch<ACTION>;
    labelName:string;
}

export function notesLabelHandler({state,noteId,id,dispatch,labelName}:NoteLabelHandlers) {
    const getNote = state.notes.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
}
export function pinnedNotesLabelHandler({state,noteId,id,dispatch,labelName}:NoteLabelHandlers) {
    const getNote = state.pinnedNotes.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
}
export function archiveLabelHandler({state,noteId,id,dispatch,labelName}:NoteLabelHandlers) {
    const getNote = state.archive.filter((note) => note.id === noteId);
    const checkForLabel = checkLabelInNotesHandler(getNote, id);
    dispatchHandler(checkForLabel, dispatch, id, noteId, labelName);
}
