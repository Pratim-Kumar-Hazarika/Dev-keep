import LoginForm from '../Components/Login/LoginForm';
import {ReactComponent as HeroImage} from "../Svgs/notes2.svg"
export default function Login() {
    return (
        <div className="login">
            <div className="login_text_img">
                <div className="quote">
                    {/* <span className="note_quote">Relax And Take Notes</span> */}
                </div>
                <div className="hero_image11">
                    <HeroImage/>
                </div>
            </div>
            <div className="login_form login_form_style">
               <LoginForm/>
            </div>
        </div>
    )
}
