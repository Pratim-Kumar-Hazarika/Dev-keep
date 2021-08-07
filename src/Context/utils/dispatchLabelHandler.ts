import { ACTION } from './../reducer/actions';
import { NoteLabelTypes } from './../types';
export function dispatchHandler(checkForLabel: NoteLabelTypes | undefined, dispatch: React.Dispatch<ACTION>, id: number, noteId: number, labelName: string) {
    if (checkForLabel) {
        dispatch({ type: "DELETE_LABELS_ONLY_FROM_NOTES", payload: { id: id } });
    } else {
        dispatch({ type: "ADD_LABEL_TO_ALL_TYPE_OF_NOTES", payload: { noteId: noteId, label: { labelName: labelName, id: id } } });
    }
}