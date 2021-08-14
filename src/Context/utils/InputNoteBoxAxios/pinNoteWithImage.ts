import { Dispatch } from 'react';
import axios from "axios";
import { getUserPinnedNotesFromServer } from "../GetNotesFromServer/getUserPinnedNotes";
import { ACTION } from '../../reducer/actions';

export async function pinNoteFromInputWithImage(previewImage: string, title: string, description: string, bgColor: string, token: string,dispatch:Dispatch<ACTION>) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote`, {
            imageUrl: previewImage,
            title: title,
            description: description,
            label: [],
            color: bgColor
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            getUserPinnedNotesFromServer({dispatch,token})
        }
    } catch (error) {
        return error
    }
}
