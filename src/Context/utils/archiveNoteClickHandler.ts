import {AddNoteHandler} from './addNoteHandler';
import {archiveNoteWithImage} from './InputNoteBoxAxios/archiveNoteWithImage';
import {archiveNoteWithoutImage} from './InputNoteBoxAxios/archiveNoteWithoutImage';

export async function archiveClickHandler({
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
    textRef,
    token
} : AddNoteHandler) {
    if (title || description !== '') {
        if (previewImage) {
            dispatch({
                type: "ARCHIVE_NOTE_DIRECTLY",
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
            await archiveNoteWithImage(previewImage, title, description, bgColor, token,dispatch);
        } else {
            dispatch({
                type: "ARCHIVE_NOTE_DIRECTLY",
                payload: {
                    id: Math.random(),
                    title: title,
                    description: description,
                    label: [],
                    color: bgColor,
                    images: []
                }
            })
            await archiveNoteWithoutImage(previewImage, title, description, bgColor, token,dispatch);
        }
        setTitle("");
        setDescription('');
        setBgColor("");
        setLabel("");
        setPreviewImageSource("");
        textRef.current.style.height = "25px";
    }
}
