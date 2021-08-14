import axios from "axios";

export async function addNoteWithoutImage(title: string, description: string, bgColor: string, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/notes/onlytext", {
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
            console.log("note added  sucessfully from input");
        }
    } catch (error) {
        console.log("error occured while adding the note");
    }
}
