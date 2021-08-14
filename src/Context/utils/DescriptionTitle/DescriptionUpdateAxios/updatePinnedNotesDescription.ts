import axios from "axios"

  export async function changePinnedNotesDescription(id: number, description: string, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/description`, {
            noteId: id,
            newDescription: description
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