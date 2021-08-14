import { useState} from "react";
import {useGoogleKeep} from "../../Context/GoogleKeepProvider";
import {CreateLabel} from "../Reusable/CreateLabel";
import { DeleteLabel } from "../Reusable/DeleteLabel";
import {DeleteModel} from "../DeleteModel/DeleteModel";
import { useAuth } from "../../Context/AuthProvider";
import { editLabelHandler } from "../../Context/utils/Label/editLabelHandler";
import { createLabelClickHandler } from "../../Context/utils/Label/createLabel";
export default function EditLabel() {
    const [newLabel,setNewLabel] = useState < string > ('')
    const {showLabelModel, setShowLabelModel, state, dispatch,setShowDeleteModel,setKeepOpacity} = useGoogleKeep()
    const {token} = useAuth();
    async  function closeEditLabel(){
            setShowLabelModel("hidden")
            setKeepOpacity(false)
        }
 
    return (
        <>
        <div
            className="label_main"
            style={{
            visibility: showLabelModel,
        }}>
            <div>
                <span>Edit Labels</span>
            </div>
            <div className="label_input">
                <input
                    className="input"
                    type="text"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                    placeholder="Create new label"/>
                <div className="icon_color">
                   <CreateLabel onClick={()=>createLabelClickHandler({dispatch,newLabel,setNewLabel,token})}/>
                </div>
            </div>
            {state
                .labels
                .map(({labelName,id:labelId},index) => (
                    <div className="label_content" key={index}>
                        <div className="name_logo">
                            <div className="icon_color">
                            <DeleteLabel onClick={()=>setShowDeleteModel("visible")} />
                          <DeleteModel id={labelId}  labelName={labelName}/>
                            </div>
                            <div >
                                <input
                                    className="input"
                                    type="text"
                                    value={labelName}
                                    onChange={(e) => dispatch({
                                    type: "EDIT_LABLES",
                                    payload: {
                                        labelName: e.target.value,
                                        id: labelId
                                    }
                                })}/>
                            </div >
                        </div>
                        < div className="icon_color">
                <button className="update_btn"  onClick={() => editLabelHandler({labelId,labelName,setNewLabel,token})}>Update</button>
                        </div>
                    </div >
                ))
            }
            <div className="border"/>
            <div className="btn_div">
                <button className="done_btn" onClick={() => closeEditLabel()}>Close</button>
            </div>
        </div>
        </>
    )
}
