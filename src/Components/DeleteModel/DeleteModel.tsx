import { useAuth } from "../../Context/AuthProvider"
import { useGoogleKeep } from "../../Context/GoogleKeepProvider"
import { deleteLabelHandler } from "../../Context/utils/CreateDeleteEditLabelAxios/deleteLabel"

export const DeleteModel: React.FC<{id:number,labelName:string}> = ({id,labelName}) => {
    const {showDeleteModel,setShowDeleteModel,setShowLabelModel,dispatch,setKeepOpacity} = useGoogleKeep()
    const {token} = useAuth()
    return (
        <div className="delete_div" style={{ visibility:showDeleteModel}}>
        <div >
            <p className="delete_model_text">We’ll delete this label and remove it from all of your Keep notes. Your notes
                won’t be deleted.</p>
        </div>
        <div className="btn_div">
            <button className="cancel_btn" onClick={()=>setShowDeleteModel("hidden")}>Cancel</button>
            <button className="delete_btn" onClick={()=>deleteLabelHandler({labelName,id,dispatch,setShowDeleteModel,setShowLabelModel,setKeepOpacity,token})}>Delete</button>
        </div>
    </div>
    )
}