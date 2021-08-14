import axios from "axios";

export async function deleteLabelFromArchivedNote(noteId: any, id: number, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/archiveNote/label/delete", {
            noteId: noteId,
            labelId: id
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            console.log("label deleted sucessfully to from archived note");
        }
    } catch {
        console.log("error occured while deleting the label from archived note");
    }
}