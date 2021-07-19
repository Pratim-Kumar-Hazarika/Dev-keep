import React, { useState } from 'react';
import { useGoogleKeep } from '../../Context/GoogleKeepProvider';

type Visibility = "hidden" | "visible"
export const Label: React.FC<{showLabelNote:Visibility}> = ({showLabelNote}) => {
    const [btntext,setBtnText] = useState("");
    const {dispatch,state} = useGoogleKeep();
    function addLabelClickHandler(e:any){
        e.preventDefault()
        if(btntext!==""){
            dispatch({type:"ADD_LABEL",payload:{labelName:btntext}})
            setBtnText("");
        }
    }
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
            
                placeholder="Enter label name"/>
        </div>{
            state?.labels.map((label)=>(
                <div className="labels">
            <input type="checkbox"/>
            <label
                style={{
                marginLeft: "5px",
                color: "#202124"
            }}>{label.labelName}</label>
        </div>
            ))
        }
        
        <div className="border"/>
        <div className="create_label_btn" onClick={(e)=>addLabelClickHandler(e)} >
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