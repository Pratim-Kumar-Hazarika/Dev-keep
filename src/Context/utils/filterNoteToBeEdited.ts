import { ReducerInitialState } from './../types';
export function filterNoteToBeEdited(state: ReducerInitialState, noteId: string | any) {
    const filterNote = state.notes.filter((note) => note.id === noteId)
    console.log("filter note is",filterNote)
    const filterPinnedNote = state.pinnedNotes.filter((note) => note.id === noteId)
    const filterArchiveNote = state.archive.filter((note) => note.id === noteId)
    return { filterNote, filterPinnedNote, filterArchiveNote }
}
