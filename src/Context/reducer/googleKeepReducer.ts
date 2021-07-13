import { ReducerInitialState } from './../types';

export const initialState:ReducerInitialState = {
 notes : [],
 pinnedNotes :[],
 trash:[],
 archive:[]
}

export type ACTION = 
    | {type :"ADD_NOTE";payload:{id:number,title:string,description:string,label:string}}
    | {type :"DELETE_NOTE";payload:{id:number}}
    | {type :"PIN_NOTE";payload:{id:number}}
    | {type :"DELETE_PINNED_NOTE";payload:{id:number}}
    | {type :"UNPIN_NOTE";payload:{id:number}}
    | {type :"DELETE_FOREVER";payload:{id:number}}
    | {type :"RESTORE_NOTE";payload:{id:number}}
    | {type :"ARCHIVE_FROM_NOTES";payload:{id:number}}
    | {type :"ARCHIVE_FROM_PINNED_NOTES";payload:{id:number}}


export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                 notes :[...state.notes,action.payload]
            };
        case "DELETE_NOTE":
        const getDeletedNote = state.notes.filter((note)=>note.id === action.payload.id)
            return{
                ...state,
                trash:[...state.trash,getDeletedNote[0]],
                notes:state.notes.filter((note)=>note.id !== action.payload.id),
            };
        case "PIN_NOTE":
         const getNote = state.notes.filter((note)=>note.id === action.payload.id)
           return {
               ...state,
               pinnedNotes:[...state.pinnedNotes,getNote[0]],
               notes:state.notes.filter((note)=>note.id !== action.payload.id)
            };
         case "DELETE_PINNED_NOTE":
             const getDeletedPinnedNote = state.pinnedNotes.filter((note)=>note.id === action.payload.id)
             return{
                ...state,
                 trash:[...state.trash,getDeletedPinnedNote[0]],
                 pinnedNotes:state.pinnedNotes.filter((note)=>note.id !== action.payload.id)
             };
        case "UNPIN_NOTE":
            const getNoteFromPinned = state.pinnedNotes.filter((note)=>note.id === action.payload.id)
            return{
                ...state,
                notes :[...state.notes,getNoteFromPinned[0]],
                pinnedNotes:state.pinnedNotes.filter((note)=>note.id !== action.payload.id)
            };
        case "DELETE_FOREVER":
            return{
                ...state,
                trash:state.trash.filter((note)=>note.id !== action.payload.id)
            };
        case "RESTORE_NOTE":
            const getNoteToBeRestored = state.trash.filter((note)=>note.id === action.payload.id);
            return{
                ...state,
                notes:[...state.notes,getNoteToBeRestored[0]],
                trash:state.trash.filter((note)=>note.id !== action.payload.id)
            }
        case "ARCHIVE_FROM_NOTES":
            const getNoteToBeArchived = state.notes.filter((note)=>note.id === action.payload.id)
            return{
                ...state,
                archive:[...state.archive,getNoteToBeArchived[0]],
                notes:state.notes.filter((note)=>note.id !== action.payload.id)
            };
        case "ARCHIVE_FROM_PINNED_NOTES":
                const getNoteToBeArchivedFromPinned = state.pinnedNotes.filter((note)=>note.id === action.payload.id)
                return{
                    ...state,
                    archive:[...state.archive,getNoteToBeArchivedFromPinned[0]],
                    pinnedNotes:state.pinnedNotes.filter((note)=>note.id !== action.payload.id)
             };
        default:
          return state;
    }
}


