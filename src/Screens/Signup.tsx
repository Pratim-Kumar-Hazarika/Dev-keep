import SignUpForm from "../Components/Signup/SignupForm";
import {ReactComponent as HeroImage} from "../Svgs/notes3.svg"
export default function Signup() {
    return (
        <div className="login">
            <div className="login_text">
                <div className="quote">
                    {/* <span className="note_quote mt_10">Relax And Take Notes</span> */}
                </div>
                <div className="hero_image1">
                    <HeroImage/>
                </div>
            </div>
            <div className="login_form">
               <SignUpForm/>
            </div>
        </div>
    )
}
