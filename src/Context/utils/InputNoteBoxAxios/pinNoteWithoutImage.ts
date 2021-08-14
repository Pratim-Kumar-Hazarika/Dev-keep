import axios from "axios";

export async function pinNoteFromInputWithoutImage(previewImage: string, title: string, description: string, bgColor: string, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/onlytext`, {
            image: [],
            title: title,
            description: description,
            label: [],
            color: bgColor
        }, {
            headers: {
                authorization: token
            }
        });
        if (response.status === 200) {
            console.log("note added  sucessfully from input to pinned");
        }
    } catch (error) {
        console.log("error occured while adding the note  to pinned");
    }
}