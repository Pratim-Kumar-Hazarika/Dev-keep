import axios from "axios";

export async function addLabelToPinnedNote(noteId: any, labelName: string, id: number, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/label`, {
            noteId: noteId,
            labelName: labelName,
            _id: id
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            return true;
        }
    } catch (error){
        return error;
    }
}
