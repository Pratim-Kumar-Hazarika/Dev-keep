import { ReducerInitialState } from './../types';
export function filterNoteToBeEdited(state: ReducerInitialState, noteId: string) {
    const filterNote = state.notes.filter((note) => note.id === Number(noteId))
    const filterPinnedNote = state.pinnedNotes.filter((note) => note.id === Number(noteId))
    const filterArchiveNote = state.archive.filter((note) => note.id === Number(noteId))
    return { filterNote, filterPinnedNote, filterArchiveNote }
}
