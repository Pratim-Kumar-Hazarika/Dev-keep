import { Image, NoteLabelTypes } from './../types';

export type ACTION = 
    | {type :"ADD_NOTE";payload:{id:number,title:string,description:string,label:NoteLabelTypes[],color:string,images:Image[] | []}}
    | {type :"PIN_NOTE_DIRECTLY";payload:{id:number,title:string,description:string,label:NoteLabelTypes[],color:string,images:Image[] |[]}}
    | {type :"ARCHIVE_NOTE_DIRECTLY";payload:{id:number,title:string,description:string,label:NoteLabelTypes[],color:string,images:Image[] |[]}}
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
    | {type :"ADD_LABEL";payload:{labelName:string,id:number}}
    | {type :"ADD_LABEL_TO_ALL_TYPE_OF_NOTES";payload:{noteId:number,label:{labelName:string,id:number}}}
    | {type :"EDIT_LABLES";payload:{labelName:string,id:number}}
    | {type :"DELETE_LABELS";payload:{labelName:string,id:number}}
    | {type :"DELETE_LABELS_ONLY_FROM_NOTES";payload:{id:number}}
    | {type :"ADD_IMAGE_TO_NOTE";payload:{noteId:number |undefined,images:{image:string}}}
    | {type :"ADD_IMAGE_TO_ARCHIVED_NOTE";payload:{noteId:number |undefined,images:{image:string}}}
    | {type :"ADD_IMAGE_TO_PINNED_NOTE";payload:{noteId:number |undefined,images:{image:string}}}
    | {type :"DELETE_IMAGE";payload:{noteId:number |undefined,imageId:string}}
