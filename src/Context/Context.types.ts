import { SetStateAction } from 'react';
import { Dispatch } from 'react';
import { ACTION } from './reducer/actions';
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
    keepOpacity:boolean
    setKeepOpacity: Dispatch<SetStateAction<boolean>>;
    previewImage:any
     setPreviewImageSource:any;
     showEditNoteModel:Visibility
     setShowEditNoteModel:Dispatch<SetStateAction<Visibility>>
     sidebar:boolean
      setSidebar:Dispatch<SetStateAction<boolean>>


}
