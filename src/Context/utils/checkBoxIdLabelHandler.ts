import { Notes } from './../types';
export function idInLabelCheckHandler(getNote: Notes[], id: any) {
    return getNote[0]?.label.filter((label) => label.id === id);
}

export function checkLabelInNotesHandler(getNote: Notes[], id: number) {
    return getNote[0].label.find((label) => label.id === id);
}

