import { Dispatch } from 'react';
import axios from "axios";
import { ACTION } from '../../reducer/actions';
import { getUserArchivedFromServer } from '../GetNotesFromServer/getUserArchivedNotes';
export async function archiveNoteWithoutImage(previewImage: string, title: string, description: string, bgColor: string, token: string,dispatch:Dispatch<ACTION>) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/onlytext`, {
            image: [],
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
            getUserArchivedFromServer({dispatch,token})
        }
    } catch (error) {
        return error;
    }
}