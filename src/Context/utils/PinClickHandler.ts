import {AddNoteHandler} from './addNoteHandler';
import { pinNoteFromInputWithImage } from './InputNoteBoxAxios/pinNoteWithImage';
import { pinNoteFromInputWithoutImage } from './InputNoteBoxAxios/pinNoteWithoutImage';

export async function pinClickHandler({
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
            await pinNoteFromInputWithImage(previewImage, title, description, bgColor, token,dispatch);
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
            await pinNoteFromInputWithoutImage(previewImage, title, description, bgColor, token,dispatch);
        }
        setTitle("");
        setDescription('');
        setBgColor("");
        setLabel("");
        setPreviewImageSource("");
        textRef.current.style.height = "25px";
       
    }
}



