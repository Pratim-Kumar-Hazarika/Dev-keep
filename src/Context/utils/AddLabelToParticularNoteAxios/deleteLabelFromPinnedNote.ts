import axios from "axios";

export async function deleteLabelFromPinnedNote(noteId: any, id: number, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/label/delete`, {
            noteId: noteId,
            labelId: id
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            return true;
        }
    }  catch (error){
        return error;
    }
}