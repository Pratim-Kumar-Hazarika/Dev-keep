export type Notes = {
    title:string;
    description:string;
    label :string;
}

export type ReducerInitialState = {
    notes : Notes[];
    pinnedNotes:Notes[]
}

