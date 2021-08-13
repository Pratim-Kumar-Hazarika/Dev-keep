import axios from "axios";

export async function deleteLabelFromPinnedNote(noteId: any, id: number, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/pinnedNote/label/delete", {
            noteId: noteId,
            labelId: id
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status == 200) {
            console.log("label deleted sucessfully from particular  note");
        }
    } catch {
        console.log("error occured while adding the label to pinned note");
    }
}