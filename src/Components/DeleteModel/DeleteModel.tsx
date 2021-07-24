import { useGoogleKeep } from "../../Context/GoogleKeepProvider"

export const DeleteModel: React.FC<{id:number,labelName:string}> = ({id,labelName}) => {
    const {showDeleteModel,setShowDeleteModel,dispatch} = useGoogleKeep()
    function deleteLabelHandler(){
        dispatch({type:"DELETE_LABELS",payload:{labelName:labelName,id:id}})
        setShowDeleteModel("hidden")
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