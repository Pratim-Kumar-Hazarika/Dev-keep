import axios from "axios";

export async function addLabelToArchivedNote(noteId: any, labelName: string, id: number, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/label`, {
            noteId: noteId,
            labelName: labelName,
            _id: id
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            console.log("label added sucessfully to archived note");
        }
    } catch(error) {
        return error;
    }
}
