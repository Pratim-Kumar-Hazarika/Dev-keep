
export type LabelName = string
export type Label = {
    labelName:string;
    id:number 
}
export type NoteLabelTypes = {
    labelName:string;
    id?:number | string ;
}
export type Notes = {
    title:string;
    description:string;
    label :NoteLabelTypes[];
    id:number ;
    color:string;
}


export type ReducerInitialState = {
    notes : Notes[];
    pinnedNotes:Notes[];
    trash:Notes[];
    archive:Notes[]; 
    labels:Label[]
}

