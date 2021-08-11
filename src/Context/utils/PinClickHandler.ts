import {AddNoteHandler} from './addNoteHandler';

export function pinClickHandler({
    e,
    title,
    description,
    bgColor,
    dispatch,
    setTitle,
    setDescription,
    setBgColor,
    setLabel,
    previewImage,
    setPreviewImageSource,
    textRef
} : AddNoteHandler) {
    if (title || description !== '') {
        if (previewImage) {
            dispatch({
                type: "PIN_NOTE_DIRECTLY",
                payload: {
                    id: Math.random(),
                    title: title,
                    description: description,
                    label: [],
                    color: bgColor,
                    images: [
                        {
                            image: previewImage
                        }
                    ]
                }
            })
        } else {
            dispatch({
                type: "PIN_NOTE_DIRECTLY",
                payload: {
                    id: Math.random(),
                    title: title,
                    description: description,
                    label: [],
                    color: bgColor,
                    images: []
                }
            })
        }
        setTitle("");
        setDescription('')
        setBgColor("")
        setPreviewImageSource("")
        textRef.current.style.height = "25px";
    }
}