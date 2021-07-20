import React from 'react'
import { Link } from 'react-router-dom'
import "../Login/Login.css"

export default function SignUpForm() {
    return (<> <div className="login_content">
        <div className="login_heading">
            <span
                style={{
                fontWeight: "bold"
            }}>Signup</span>
        </div>
        <div className="email_div">
            <div>Name</div>
            <input className="email_input" type="text" name="" id=""/>
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
            <button className="login_btn">Signup</button>
            <div className="dont_have_account_div">
                <span>Have an account ?</span>
                <Link to="/login">
                <span className="signup_text">
                    Login</span>
                </Link>
               
            </div>
        </div>
    </div>
    </>
    )
}
