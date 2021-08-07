import { Link } from 'react-router-dom'
import "./Login.css"

export default function LoginForm() {
    return (<> <div className="login_content">
        <div className="login_heading">
            <span
                style={{
                fontWeight: "bold"
            }}>Login</span>
        </div>
        <div className="email_div">
            <div>Email</div>
            <input className="email_input" type="text" name="" id=""/>
        </div>
        <div className="password_div">
            <div>Password</div>
            <input className="password_input" type="text" name="" id=""/>
        </div>
        <div>
            <button className="login_btn">Login</button>
            <div className="dont_have_account_div">
                <span>Don't have an account ?</span>
                <Link to="/signup">
                <span className="signup_text">
                    Signup</span>
                </Link>
            </div>
        </div>
    </div>
    </>
    )
}
