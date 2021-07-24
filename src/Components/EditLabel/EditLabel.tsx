// import "./LabelEdit.css"
import {SVGProps} from "react-router/node_modules/@types/react";
import {useRef, useState} from "react";
import {useGoogleKeep} from "../../Context/GoogleKeepProvider";
import {CreateLabel} from "../Reusable/CreateLabel";
import { DeleteLabel } from "../Reusable/DeleteLabel";
import {DeleteModel} from "../DeleteModel/DeleteModel";
export function MdiPencil(props : SVGProps < SVGSVGElement >) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path
                d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"
                fill="currentColor"></path>
        </svg>
    )
}

export function DashiconsTrash(props : SVGProps < SVGSVGElement >) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
            <path
                d="M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
                fill="currentColor"></path>
        </svg>
    )
}

export function TeenyiconsTickOutline(props : SVGProps < SVGSVGElement >) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 15 15" {...props}>
            <g fill="none">
                <path d="M1 7l4.5 4.5L14 3" stroke="currentColor" strokeLinecap="square"></path>
            </g>
        </svg>
    )
}
export default function EditLabel() {

    const [newLabel,
        setNewLabel] = useState < string > ('')
    const {showLabelModel, setShowLabelModel, state, dispatch,setShowDeleteModel} = useGoogleKeep()

    return (
        <div
            className="label_main"
            style={{
            visibility: showLabelModel
        }}>
            <div>
                <span>Edit Labels</span>
            </div>
            <div className="label_input">
                <input
                    className="input"
                    type="text"
                    onChange={(e) => setNewLabel(e.target.value)}
                    placeholder="Create new label"/>
                <div className="icon_color">
                   <CreateLabel onClick={()=>dispatch({type:"ADD_LABEL",payload:{labelName:newLabel,id:Math.random()}})}/>
                </div>
            </div>

            {state
                .labels
                .map((label) => (
                    <div className="label_content">
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
                <button className="done_btn" onClick={() => setShowLabelModel("hidden")}>Done</button>
            </div>
        </div>
    )
}
