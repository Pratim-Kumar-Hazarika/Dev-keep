import axios from "axios"

  export async function changeNotesDescription(id: number, description: string, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes/description`, {
            noteId: id,
            newDescription: description
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            console.log("description successfully updated")
        }
    } catch (error) {
        console.log("error occured while updating the description")
    }
}