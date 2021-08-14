import axios from "axios"

export async function deleteImageFromOthers(imageId: string | number | undefined, id: number, token: string) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/notes/image/delete`, {
            imageId: imageId,
            noteId: id
        }, {
            headers: {
                authorization: token
            }
        })
        if (response.status === 200) {
            console.log("image deleted sucessfully from card")

        }
    }catch (error){
        return error;
    }
}
