import { Dispatch } from 'react';
import axios from "axios";
import { ACTION } from '../../reducer/actions';
import { getUserNotesFromServer } from '../GetNotesFromServer/getUserNotes';

export async function addNoteWithImage(previewImage: string, title: string, description: string, bgColor: string, token: string,dispatch:Dispatch<ACTION>) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes`, {
            imageUrl: previewImage,
            title: title,
            description: description,
            label: [],
            color: bgColor,
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            getUserNotesFromServer({dispatch,token})
        }
    } catch (error) {
       return error;
    }
}
