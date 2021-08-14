import axios from 'axios';


export type EditLabel = {
    labelId:number;
    labelName:string;
    setNewLabel:React.Dispatch<React.SetStateAction<string>>
    token:string
}
export async  function editLabelHandler({labelId,labelName,setNewLabel,token}:EditLabel){
    setNewLabel("")
    try {
        const response = await axios.post("http://localhost:8080/user/labels/edit",{
            newLabel:labelName,
            labelId:labelId
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status===200){
            console.log("label updated sucessfully")
        }
    } catch (error) {
        console.log("error while creating the label")
    }
}