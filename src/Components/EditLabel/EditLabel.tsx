import { useState} from "react";
import {useGoogleKeep} from "../../Context/GoogleKeepProvider";
import {CreateLabel} from "../Reusable/CreateLabel";
import { DeleteLabel } from "../Reusable/DeleteLabel";
import {DeleteModel} from "../DeleteModel/DeleteModel";
import { MdiPencil } from "../Svgs/Svg";
import { useAuth } from "../../Context/AuthProvider";
import axios from "axios";
export default function EditLabel() {
    const [newLabel,setNewLabel] = useState < string > ('')
    const {showLabelModel, setShowLabelModel, state, dispatch,setShowDeleteModel,setKeepOpacity} = useGoogleKeep()
    const {token} = useAuth();
    
   async function createLabelClickHandler(){
    dispatch({type:"ADD_LABEL",payload:{labelName:newLabel,id:Math.random()}})
    setNewLabel("")
    try {
        const response = await axios.post("http://localhost:8080/user/labels",{
            labelName:newLabel
        },{
            headers: {
                authorization: token
            }
        })
        if(response.status==200){
            console.log("label added sucessfully")
        }
    } catch (error) {
        console.log("error while creating the label")
    }
    }
    function closeEditLabel(){
        setShowLabelModel("hidden")
        setKeepOpacity(false)
    }
    return (
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
                   <CreateLabel onClick={createLabelClickHandler}/>
                </div>
            </div>
            {state
                .labels
                .map((label,index) => (
                    <div className="label_content" key={index}>
                        <div className="name_logo">
                            <div className="icon_color">
                            <DeleteLabel onClick={()=>setShowDeleteModel("visible")} />
                          <DeleteModel id={label.id}  labelName={label.labelName}/>
                            </div>
                            <div >
                                <input
                                    className="input"
                                    type="text"
                                    value={label.labelName}
                                    onChange={(e) => dispatch({
                                    type: "EDIT_LABLES",
                                    payload: {
                                        labelName: e.target.value,
                                        id: label.id
                                    }
                                })}/>
                            </div >
                        </div>
                        < div className="icon_color">
                            <MdiPencil/>
                        </div>
                    </div >
                ))
            }
            <div className="border"/>
            <div className="btn_div">
                <button className="done_btn" onClick={() => closeEditLabel()}>Done</button>
            </div>
        </div>
    )
}
