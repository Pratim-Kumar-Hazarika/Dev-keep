import {BxBxSearchAlt2,AkarIconsCross,LogosGoogleKeep,IcOutlineWbSunny,CarbonUserAvatar} from "../../Svgs/Svgs"
import "./Header.css";
import {Link} from "react-router-dom"
import { EmojioneV1NotePage } from "../Svgs/Svg";
import { useAuth } from "../../Context/AuthProvider";

function Header() {
    const {signoutHandler} = useAuth()
    return (
        <div className="header">
            <div className="logo_text ">
            <EmojioneV1NotePage/> 
            <span className="keep">DevKeep</span>
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
