import { SetStateAction } from 'react';
import { ACTION } from 'e:/Github/google-keep/src/Context/reducer/actions';
import { Dispatch } from 'react';
import { ReducerInitialState, Visibility } from './types';



export interface ContextType {
    state:ReducerInitialState;
    dispatch: Dispatch<ACTION>
    title:string;
    setDescription:Dispatch<SetStateAction<string>>;
    setTitle:Dispatch<SetStateAction<string>>;
    setLabel:Dispatch<SetStateAction<string>>;
    description:string;
    label:string;
    bgColor:string;
    setBgColor: Dispatch<SetStateAction<string>>;
    showLabelModel:Visibility;
    setShowLabelModel : Dispatch<SetStateAction<Visibility>>;
    showDeleteModel:Visibility;
    setShowDeleteModel : Dispatch<SetStateAction<Visibility>>;
}
