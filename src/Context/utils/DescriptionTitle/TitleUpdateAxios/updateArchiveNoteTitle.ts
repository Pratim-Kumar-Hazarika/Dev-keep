import axios from "axios"

export async function changeArchiveNotesTitle(id: number, title: string, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/archiveNote/title`, {
            noteId: id,
            newTitle: title
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
