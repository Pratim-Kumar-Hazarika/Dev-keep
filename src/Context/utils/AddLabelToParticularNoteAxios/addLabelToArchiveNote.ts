import axios from "axios";

export async function addLabelToArchivedNote(noteId: any, labelName: string, id: number, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/archiveNote/label", {
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
    } catch {
        console.log("error occured while adding the label to archive note");
    }
}
