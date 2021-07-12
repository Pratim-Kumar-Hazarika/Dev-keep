export type Notes = {
    title:string;
    description:string;
    label :string;
    id:number;
}

export type ReducerInitialState = {
    notes : Notes[];
    pinnedNotes:Notes[]
}

