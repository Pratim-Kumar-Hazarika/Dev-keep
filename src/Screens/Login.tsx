import "../login.css"
import LoginForm from '../Components/Login/LoginForm';
import { LogosGoogleKeep } from '../Components/Reusable/HeroLogo';

export default function Login() {
    return (
        <div className="login">
            <div className="login_text">
                <div className="quote">
                    <span className="note_quote">Relax And Take Notes</span>
                </div>
                <div className="hero_image">
                    <LogosGoogleKeep/>
                </div>
            </div>
            <div className="login_form">
               <LoginForm/>
            </div>
        </div>
    )
}
