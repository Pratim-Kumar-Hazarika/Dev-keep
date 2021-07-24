
export type LabelName = string

export type Notes = {
    title:string;
    description:string;
    label :LabelName[];
    id:number ;
    color:string
}

export type Label = {
    labelName:string;
    id:number
}

export type ReducerInitialState = {
    notes : Notes[];
    pinnedNotes:Notes[];
    trash:Notes[];
    archive:Notes[]; 
    labels:Label[]
}

