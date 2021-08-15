import { EmojionePencil, FxemojiLightbulb} from '../../Svgs/Svgs'
import "./LeftNav.css"
import {Link} from "react-router-dom"
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { NotoV1Wastebasket, OpenmojiArchive, TwemojiLabel } from '../Svgs/Svg'


export default function LeftNav() {
    const {setShowLabelModel,state,setKeepOpacity,sidebar} = useGoogleKeep();
    function labelHandler(){
        setShowLabelModel("visible")
        setKeepOpacity(true)
    }
    return (
        <div className={sidebar ? "left_nav active" : "left_nav"} >

         <Link to="/home" className="link" >
                <div className="left_nav_contents notes">
                        <FxemojiLightbulb className="svg"/>
                        <span className="left_nav_icons_text" >Notes</span>
                        <span className={sidebar ? "sidebartext active" : "sidebartext"}>Notes</span>
                </div>
        </Link>
     
        <Link to="/archive"  className="link">
            <div className="left_nav_contents archive">
                    <OpenmojiArchive className="svg"/>
                    <span className="left_nav_icons_text">Archive</span>
                    <span className={sidebar ? "sidebartext active" : "sidebartext"}>Archive</span>
            </div>
        </Link>
            <div className="left_nav_contents edit_labels" onClick={labelHandler}>
                <EmojionePencil className="svg"/>
                <span className="left_nav_icons_text" >Edit Lables</span>
                <span className={sidebar ? "sidebartext active" : "sidebartext"}>Notes</span>
            </div>
        <Link to="/trash"  className="link">
            <div className="left_nav_contents trash">
                    <NotoV1Wastebasket className="svg"/>
                    <span className="left_nav_icons_text">Trash</span>
                    <span className={sidebar ? "sidebartext active" : "sidebartext"}>Notes</span>
            </div>
        </Link>
        {
            state.labels.map((label)=>(
                <Link to={`/label/${label.labelName} `} className="link" key={label.id}>
                <div className="left_nav_contents trash" >
                        <TwemojiLabel className="svg"/>
                        <span className="left_nav_icons_text">{label.labelName}</span>
                        <span className={sidebar ? "sidebartext active" : "sidebartext"}>{label.labelName}</span>
                </div>
            </Link>
            ))
        }
        </div>
    )
}
