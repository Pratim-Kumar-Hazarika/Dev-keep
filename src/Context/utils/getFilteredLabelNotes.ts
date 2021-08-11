import { ReducerInitialState } from '../types';
export function getFilteredLabelNotes(state: ReducerInitialState, labelName: string) {
    const filterNotes = state.notes.filter((note) => note.label.find((label) => label.labelName === labelName))
    const filterPinnedNotes = state.pinnedNotes.filter((note) => note.label.find((label) => label.labelName === labelName))
    const filterArchiveNotes = state.archive.filter((note) => note.label.find((label) => label.labelName === labelName))
    return { filterPinnedNotes, filterNotes, filterArchiveNotes }
}
