import { ReducerInitialState} from './../types';
import { ACTION } from './actions';

export const initialState:ReducerInitialState = {
 notes : [],
 pinnedNotes :[],
 trash:[],
 archive:[],
 labels:[]
}

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
             case "ADD_LABEL":       
             return {
                ...state,
                labels:[...state.labels,action.payload]
       };
            case "ADD_LABEL_TO_ALL_TYPE_OF_NOTES":
                return{
                    ...state,
                    notes:state.notes.map((note)=> (
                        note.id === action.payload.noteId ? {...note,label:[...note.label,action.payload.label]}:note
                    )),
                    pinnedNotes:state.pinnedNotes.map((note)=> (
                        note.id === action.payload.noteId ? {...note,label:[...note.label,action.payload.label]}:note
                    )),
                    archive:state.archive.map((note)=> (
                        note.id === action.payload.noteId ? {...note,label:[...note.label,action.payload.label]}:note
                    ))
                };

            case "EDIT_LABLES":
                return{
                    ...state,
                    labels:state.labels.map((label)=>label.id === action.payload.id? {...label,labelName:action.payload.labelName}:label),
                    notes:state.notes.map((note)=>(
                        {
                            ...note,
                            label:note.label.map((label)=>label.id === action.payload.id ? 
                            {
                                ...label,
                                labelName:action.payload.labelName
                            }:label)
                        }
                    )),
                    pinnedNotes:state.pinnedNotes.map((note)=>(
                        {
                            ...note,
                            label:note.label.map((label)=>label.id === action.payload.id ? 
                            {
                                ...label,
                                labelName:action.payload.labelName
                            }:label)
                        }
                    )),
                    archive:state.archive.map((note)=>(
                        {
                            ...note,
                            label:note.label.map((label)=>label.id === action.payload.id ? 
                            {
                                ...label,
                                labelName:action.payload.labelName
                            }:label)
                        }
                    )),
                };

            case "DELETE_LABELS":
                return{
                    ...state,
                    labels:state.labels.filter((label)=>label.id !== action.payload.id),
                    notes :state.notes.map((note)=>({
                        ...note,
                        label:note.label.filter((label)=>label.id !== action.payload.id)
                    })),
                    pinnedNotes :state.pinnedNotes.map((note)=>({
                        ...note,
                        label:note.label.filter((label)=>label.id !== action.payload.id)
                    })),
                    archive :state.archive.map((note)=>({
                        ...note,
                        label:note.label.filter((label)=>label.id !== action.payload.id)
                    }))
                };

                case "DELETE_LABELS_ONLY_FROM_NOTES":
                    return{
                        ...state,
                        notes :state.notes.map((note)=>({
                            ...note,
                            label:note.label.filter((label)=>label.id !== action.payload.id)
                        })),
                        pinnedNotes :state.pinnedNotes.map((note)=>({
                            ...note,
                            label:note.label.filter((label)=>label.id !== action.payload.id)
                        })),
                        archive :state.archive.map((note)=>({
                            ...note,
                            label:note.label.filter((label)=>label.id !== action.payload.id)
                        }))
                    };
        default:
          return state;
    }
}





