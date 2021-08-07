import React from 'react'
import { MdiArchiveArrowDownOutline, MdiLightbulbOutline, MdiLightPencil, MdiTrashCanOutline } from '../../Svgs/Svgs'
import "./LeftNav.css"
import {Link} from "react-router-dom"
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
export default function LeftNav() {
    const {setShowLabelModel} = useGoogleKeep();
    function labelHandler(){
        setShowLabelModel("visible")
    }
    return (
        <div className="left_nav" >
         <Link to="/" className="link" >
                <div className="left_nav_contents notes">
                        <MdiLightbulbOutline className="svg"/>
                        <span className="left_nav_icons_text">Notes</span>
                </div>
        </Link>
        <Link to="/archive"  className="link">
            <div className="left_nav_contents archive">
                    <MdiArchiveArrowDownOutline className="svg"/>
                    <span className="left_nav_icons_text">Archive</span>
            </div>
        </Link>
            <div className="left_nav_contents edit_labels" onClick={labelHandler}>
                <MdiLightPencil className="svg"/>
                <span className="left_nav_icons_text" >Edit Lables</span>
            </div>
        <Link to="/trash"  className="link">
            <div className="left_nav_contents trash">
                    <MdiTrashCanOutline className="svg"/>
                    <span className="left_nav_icons_text">Trash</span>
            </div>
        </Link>
        </div>
    )
}
