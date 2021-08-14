import axios from "axios"

export async function deleteImageFromPinnedNotes(imageId: string | number | undefined, id: number, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/image/delete`, {
            imageId: imageId,
            noteId: id
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            return true;

        }
    } catch (error){
        return error;
    }
}
