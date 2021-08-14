import React, {  useState } from 'react';
import { useAuth } from '../../Context/AuthProvider';
import { useGoogleKeep } from '../../Context/GoogleKeepProvider';
import { ReducerInitialState } from '../../Context/types';
import { addLabelToNoteClickHandler } from '../../Context/utils/addLabelToParticularNote';
import { checkBoxHandler } from '../../Context/utils/checkbox/checkBoxHandler';
import { checkLabelInNotesHandler } from '../../Context/utils/checkbox/checkBoxIdLabelHandler';
import { addLabelClickHandler } from '../../Context/utils/CreateDeleteEditLabelAxios/createLabel';
import { dispatchHandler } from '../../Context/utils/dispatchLabelHandler';

type Visibility = "hidden" | "visible"
export const Label: React.FC<{showLabelNote:Visibility,noteId:number,from:string}> = ({showLabelNote,noteId,from}) => {
    const [btntext,setBtnText] = useState("");
    const {dispatch,state} = useGoogleKeep();
    const {token} = useAuth()
    return (
        <div
        className="add_label1"
        style={{
        visibility: showLabelNote
    }}>
        <div>
            <span style={{
                color: "#202124"
            }}>Label Note</span>
        </div>
        <div>
            <input
                onChange={(e) => setBtnText(e.target.value)}
                className="label_input"
                type="text"
                value={btntext}
                
                placeholder="Enter label name xD"/>
        </div>{
            state?.labels.map(({labelName,id})=>(
                <div className="labels">
            <input type="checkbox" checked={checkBoxHandler(labelName,id,state,from,noteId)} onChange={()=>addLabelToNoteClickHandler({labelName,id,from,state,noteId,dispatch,token})}/>
            <label
                style={{
                marginLeft: "5px",
                color: "#202124"
            }}>{labelName}</label>
        </div>
            ))
        }
        
        <div className="border"/>
        <div className="create_label_btn" onClick={(e)=>addLabelClickHandler({e,btntext,dispatch,setBtnText,token})} >
            {btntext !== "" && <div className="create_label_btn_div">
                <span className="iconify" data-icon="akar-icons:plus" data-inline="false"></span>
                <button className="create_btn" >
                    <span
                        style={{
                        color: "gray"
                    }}>Create</span>
                    <span
                        style={{
                        fontWeight: "bold"
                    }}>
                        "{btntext}"</span>
                </button>
            </div>
            }
        </div>
    </div>
    )
}


