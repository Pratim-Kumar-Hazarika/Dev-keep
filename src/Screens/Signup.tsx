import { useEffect } from "react";
import { useNavigate } from "react-router";
import SignUpForm from "../Components/Signup/SignupForm";
import { useAuth } from "../Context/AuthProvider";
import {ReactComponent as HeroImage} from "../Svgs/notes3.svg"
export default function Signup() {
    const {token} = useAuth();
    const navigate = useNavigate()
    useEffect(()=>{
        token ? navigate("/home") :navigate("/signup")
       // eslint-disable-next-line 
    },[token])
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
