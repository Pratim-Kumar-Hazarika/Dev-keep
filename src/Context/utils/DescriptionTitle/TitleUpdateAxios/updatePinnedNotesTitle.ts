import axios from "axios"

export async function changePinnedNotesTitle(id: number, title: string, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/pinnedNote/title`, {
            noteId: id,
            newTitle: title
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            console.log("edit successfully title")
        }
    } catch (error) {
        console.log("error occured while editing the title")
    }
}