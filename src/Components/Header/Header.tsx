import "./Header.css";
import {Link} from "react-router-dom"
import { EmojioneV1NotePage } from "../Svgs/Svg";
import { useAuth } from "../../Context/AuthProvider";
import { useGoogleKeep } from "../../Context/GoogleKeepProvider";
import { NotoV1CrossedSwords, OpenmojiHamburgerMenu } from "../../Svgs/Svgs";

function Header() {
    const {setSidebar,sidebar} = useGoogleKeep()
    const {signoutHandler} = useAuth()

    return (
        <div className="header">
            <div className="hamburger">
                {
                    sidebar ?<NotoV1CrossedSwords onClick={()=>setSidebar(!sidebar)}/> : <OpenmojiHamburgerMenu onClick={()=>setSidebar(!sidebar)}/>
                }
                
            </div>
            <div className="logo_text ">
            <EmojioneV1NotePage className="logo_icon"/> 
            <span className="keep keep_text">DevKeep</span>
            </div>
            <div className="flex">
                <Link to="/profile">
                <div className="mt-1 ml">
                <button className="homebtn " onClick={()=>signoutHandler()}>SIGN OUT</button> 
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
