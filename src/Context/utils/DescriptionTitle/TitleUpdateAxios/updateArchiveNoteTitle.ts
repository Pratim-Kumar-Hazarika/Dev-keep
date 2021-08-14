import axios from "axios"

export async function changeArchiveNotesTitle(id: number, title: string, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/archiveNote/title", {
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
