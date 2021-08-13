import axios from "axios"
import { useAuth } from "../../Context/AuthProvider"
import { useGoogleKeep } from "../../Context/GoogleKeepProvider"

export const DeleteModel: React.FC<{id:number,labelName:string}> = ({id,labelName}) => {
    const {showDeleteModel,setShowDeleteModel,setShowLabelModel,dispatch,setKeepOpacity} = useGoogleKeep()
    const {token} = useAuth()
  async function deleteLabelHandler(){
        dispatch({type:"DELETE_LABELS",payload:{labelName:labelName,id:id}})
        setShowDeleteModel("hidden")
        setShowLabelModel("hidden")
        setKeepOpacity(false)
        try {
            const response = await axios.post("http://localhost:8080/user/labels/delete",{
                labelId:id
            },{
                headers: {
                    authorization: token
                }
            })
            if(response.status==200){
                console.log("label deleted sucessfully")
            }
        } catch (error) {
            console.log("error while deleting the label")
        }
    }
    return (
        <div className="delete_div" style={{ visibility:showDeleteModel}}>
        <div >
            <p className="delete_model_text">We’ll delete this label and remove it from all of your Keep notes. Your notes
                won’t be deleted.</p>
        </div>
        <div className="btn_div">
            <button className="cancel_btn" onClick={()=>setShowDeleteModel("hidden")}>Cancel</button>
            <button className="delete_btn" onClick={deleteLabelHandler}>Delete</button>
        </div>
    </div>
    )
}