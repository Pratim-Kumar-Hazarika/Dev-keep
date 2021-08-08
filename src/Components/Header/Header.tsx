import {BxBxSearchAlt2,AkarIconsCross,LogosGoogleKeep,IcOutlineWbSunny,CarbonUserAvatar} from "../../Svgs/Svgs"
import "./Header.css";
import {Link} from "react-router-dom"
import { EmojioneV1NotePage } from "../Svgs/Svg";

function Header() {
    return (
        <div className="header">
            <div className="logo_text">
            <EmojioneV1NotePage/> 
            <span className="keep">Keep</span>
            </div>
            <div className="search-container">
                <div className="flex">
                <div className="search-container-searchbar-text">
                <BxBxSearchAlt2 />
                </div>
                <div className="mt search"><input className="search" placeholder="Search"/></div>
                </div>
                <div className="mt mr">
                <AkarIconsCross/>
                </div> 
            </div>

            <div className="flex">
                <Link to="/profile">
                <div className="mt-1 ml">
                    <CarbonUserAvatar/>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
