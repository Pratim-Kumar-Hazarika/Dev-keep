import { ReducerInitialState } from './../types';

export const initialState:ReducerInitialState = {
 notes : [],
 pinnedNotes :[],
 trash:[],
 archive:[],
}

export type ACTION = 
    | {type :"ADD_NOTE";payload:{id:number,title:string,description:string,label:string,color:string}}
    | {type :"PIN_NOTE_DIRECTLY";payload:{id:number,title:string,description:string,label:string,color:string}}
    | {type :"ARCHIVE_NOTE_DIRECTLY";payload:{id:number,title:string,description:string,label:string,color:string}}
    | {type :"DELETE_NOTE";payload:{id:number}}
    | {type :"PIN_NOTE";payload:{id:number}}
    | {type :"DELETE_PINNED_NOTE";payload:{id:number}}
    | {type :"UNPIN_NOTE";payload:{id:number}}
    | {type :"DELETE_FOREVER";payload:{id:number}}
    | {type :"RESTORE_NOTE";payload:{id:number}}
    | {type :"ARCHIVE_FROM_NOTES";payload:{id:number}}
    | {type :"ARCHIVE_FROM_PINNED_NOTES";payload:{id:number}}
    | {type :"UNARCHIVE";payload:{id:number}}
    | {type :"PIN_ARCHIVED_NOTE";payload:{id:number}}
    | {type :"DELETE_ARCHIVED_NOTE";payload:{id:number}}
    | {type :"CHANGE_OTHER_NOTES_BG";payload:{colorName:string,id:number}}
    | {type :"CHANGE_PINNED_NOTES_BG";payload:{colorName:string,id:number}}
    | {type :"CHANGE_ARCHIVED_NOTES_BG";payload:{colorName:string,id:number}}
    | {type :"CHANGE_NOTES_TITLE";payload:{newTitle:string;id:number}}
    | {type :"CHANGE_PINNED_NOTES_TITLE";payload:{newTitle:string;id:number}}
    | {type :"CHANGE_ARCHIVED_NOTES_TITLE";payload:{newTitle:string;id:number}}
    | {type :"CHANGE_NOTES_DESCRIPTION";payload:{newDescription:string;id:number}}
    | {type :"CHANGE_ARCHIVED_NOTES_DESCRIPTION";payload:{newDescription:string;id:number}}
    | {type :"CHANGE_PINNED_NOTES_DESCRIPTION";payload:{newDescription:string;id:number}}




export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                 notes :[...state.notes,action.payload]
            };
         case "PIN_NOTE_DIRECTLY":
                return {
                ...state,
                 pinnedNotes :[...state.pinnedNotes,action.payload]
             };
        case "ARCHIVE_NOTE_DIRECTLY":
                return {
                ...state,
                 archive :[...state.archive,action.payload]
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
          case "UNARCHIVE":
                const getNoteFromArchive = state.archive.filter((note)=>note.id === action.payload.id)
                return{
                    ...state,
                    notes:[...state.notes,getNoteFromArchive[0]],
                    archive:state.archive.filter((note)=>note.id !== action.payload.id)
             };
         case "PIN_ARCHIVED_NOTE":
                const getNoteToBePinnedFromArchived= state.archive.filter((note)=>note.id === action.payload.id)
                return{
                    ...state,
                    pinnedNotes:[...state.pinnedNotes,getNoteToBePinnedFromArchived[0]],
                    archive:state.archive.filter((note)=>note.id !== action.payload.id)
             };
         case "DELETE_ARCHIVED_NOTE":
                const getNoteToBeDeletedFromArchive= state.archive.filter((note)=>note.id === action.payload.id)
                return{
                    ...state,
                    trash:[...state.trash,getNoteToBeDeletedFromArchive[0]],
                    archive:state.archive.filter((note)=>note.id !== action.payload.id)
             };
        case "CHANGE_OTHER_NOTES_BG":
            return{
                ...state,
                notes:state.notes.map((note)=>(
                    note.id === action.payload.id ? {...note,color:action.payload.colorName} :note
                ))
            };
        case "CHANGE_PINNED_NOTES_BG":
                return{
                    ...state,
                    pinnedNotes:state.pinnedNotes.map((note)=>(
                        note.id === action.payload.id ? {...note,color:action.payload.colorName} :note
                    ))
            };
        case "CHANGE_ARCHIVED_NOTES_BG":
                return{
                    ...state,
                    archive:state.archive.map((note)=>(
                        note.id === action.payload.id ? {...note,color:action.payload.colorName} :note
                    ))
            };
            case "CHANGE_NOTES_TITLE":
                return{
                    ...state,
                    notes:state.notes.map((note)=>(note.id === action.payload.id ?
                        {...note,title:action.payload.newTitle}:note)) 
                };
            case "CHANGE_PINNED_NOTES_TITLE":
            return{
                ...state,
                pinnedNotes:state.pinnedNotes.map((note)=>(note.id === action.payload.id ?
                    {...note,title:action.payload.newTitle}:note)) 
            };
            case "CHANGE_ARCHIVED_NOTES_TITLE":
                return{
                    ...state,
                    archive:state.archive.map((note)=>(note.id === action.payload.id ?
                        {...note,title:action.payload.newTitle}:note)) 
             };
             case "CHANGE_NOTES_DESCRIPTION":
                return{
                    ...state,
                    notes:state.notes.map((note)=>(note.id === action.payload.id ?
                        {...note,description:action.payload.newDescription}:note)) 
             };
             case "CHANGE_ARCHIVED_NOTES_DESCRIPTION":
                return{
                    ...state,
                    archive:state.archive.map((note)=>(note.id === action.payload.id ?
                        {...note,description:action.payload.newDescription}:note)) 
             };
             case "CHANGE_PINNED_NOTES_DESCRIPTION":
                return{
                    ...state,
                    pinnedNotes:state.pinnedNotes.map((note)=>(note.id === action.payload.id ?
                        {...note,description:action.payload.newDescription}:note)) 
             };
            
            
        default:
          return state;
    }
}


