import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import LoginForm from '../Components/Login/LoginForm';
import { useAuth } from '../Context/AuthProvider';
import {ReactComponent as HeroImage} from "../Svgs/notes2.svg"
export default function Login() {
    const {token} = useAuth();
    const navigate = useNavigate()
    useEffect(()=>{
        token ? navigate("/home") :navigate("/login")
       // eslint-disable-next-line 
    },[token])
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
