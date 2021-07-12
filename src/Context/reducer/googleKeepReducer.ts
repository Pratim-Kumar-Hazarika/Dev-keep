import { ReducerInitialState } from './../types';

export const initialState:ReducerInitialState = {
 notes : [],
 pinnedNotes :[]
}

export type ACTION = 
    | {type :"ADD_NOTE";payload:{id:number,title:string,description:string,label:string}}
    | {type :"DELETE_NOTE";payload:{id:number}}
    | {type :"PIN_NOTE";payload:{id:number}}
    | {type :"DELETE_PINNED_NOTE";payload:{id:number}}
    | {type :"UNPIN_NOTE";payload:{id:number}}

export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                 notes :[...state.notes,action.payload]
            };
        case "DELETE_NOTE":
            return{
                ...state,
                notes:state.notes.filter((note)=>note.id !== action.payload.id)
            };
        case "PIN_NOTE":
         const getNote = state.notes.filter((note)=>note.id === action.payload.id)
           return {
               ...state,
               pinnedNotes:[...state.pinnedNotes,getNote[0]],
               notes:state.notes.filter((note)=>note.id !== action.payload.id)
            };
         case "DELETE_PINNED_NOTE":
             return{
                ...state,
                 pinnedNotes:state.pinnedNotes.filter((note)=>note.id !== action.payload.id)
             };
        case "UNPIN_NOTE":
            const getNoteFromPinned = state.pinnedNotes.filter((note)=>note.id === action.payload.id)
            return{
                ...state,
                notes :[...state.notes,getNoteFromPinned[0]],
                pinnedNotes:state.pinnedNotes.filter((note)=>note.id !== action.payload.id)
            }
        default:
          return state;
    }
}


