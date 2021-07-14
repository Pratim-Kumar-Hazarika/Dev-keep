export type Notes = {
    title:string;
    description:string;
    label :string;
    id:number;
    color:string
}

export type ReducerInitialState = {
    notes : Notes[];
    pinnedNotes:Notes[];
    trash:Notes[];
    archive:Notes[];
}

