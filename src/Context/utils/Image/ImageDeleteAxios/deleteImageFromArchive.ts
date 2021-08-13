import axios from "axios"

export async function deleteImageFromArchive(imageId: string | number | undefined, id: number, token: string) {
    try {
        const response = await axios.post("http://localhost:8080/user/archiveNote/image/delete", {
            imageId: imageId,
            noteId: id
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            console.log("image deleted sucessfully from archive")

        }
    } catch (error) {
        console.log("error occured while deleting the image to from archive note")
    }
}