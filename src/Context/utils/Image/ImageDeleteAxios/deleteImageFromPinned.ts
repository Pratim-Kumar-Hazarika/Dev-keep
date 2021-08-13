import axios from "axios"

export async function deleteImageFromPinnedNotes(imageId: string | number | undefined, id: number, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/pinnedNote/image/delete", {
            imageId: imageId,
            noteId: id
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            console.log("image deleted sucessfully from pinned note")

        }
    } catch (error) {
        console.log("error occured while deleting the image to from pinned note")
    }
}
