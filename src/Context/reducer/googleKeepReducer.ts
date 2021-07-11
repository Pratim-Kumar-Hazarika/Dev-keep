import { ReducerInitialState } from './../types';

export const initialState:ReducerInitialState = {
 notes : [],
 pinnedNotes :[]
}

export type ACTION = 
    | {type :"ADD_NOTE";payload:{title:string,description:string,label:string}}

export function reducer(state:ReducerInitialState,action:ACTION){
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state, notes :[...state.notes,action.payload]
            }
        default:
          return state;
    }
}


