import axios from "axios";

export async function addNoteWithImage(previewImage: string, title: string, description: string, bgColor: string, token: string) {
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
            console.log("note added  sucessfully from input");

        }
    } catch (error) {
        console.log("error occured while adding the note");
    }
}
