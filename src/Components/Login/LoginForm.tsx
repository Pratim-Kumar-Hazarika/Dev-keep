import { Link } from 'react-router-dom'
import "./Login.css"

import { validateEmail, validatePassword } from '../../Context/utils/Validations';
import { useAuth } from '../../Context/AuthProvider';
import ClipLoader from "react-spinners/ClipLoader";
import { Field, Form, Formik } from 'formik';
interface MyFormValues {
    password: string;
    email: string;
  }

  
export default function LoginForm() {
    const initialValues: MyFormValues = { password: "", email: "" };
    const {email,setEmail,password,setPassword,loginUserWithCredentials,loading} = useAuth()

  function userLogin(email:string,password:string){
    loginUserWithCredentials(email,password)
    
  }
 
    return (<> 
    <div className="login_content">
        <div className="login_heading">
            <span
                style={{
                fontWeight: "bold"
            }}>Login</span>
        </div>
        <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <div className="email_div">
            <div>Email</div>
              <Field name="email" validate={(value:string)=>(validateEmail({value,setEmail}))} className="password-input"  />
              {errors.email && touched.email && <div className="error_text">{errors.email}</div>}
            </div>
            
            <div className="password_div">
            <div>Password</div>
              <Field name="password" validate={(value:string)=>validatePassword({value,setPassword})} className="password-input" type="password"/>
              {errors.password && touched.password && (
                <div className="error_text">{errors.password}</div>
              )}
            </div>
            <div>
            <button style={{cursor:"pointer"}} type="submit" className="login_btn" onClick={()=>{userLogin(email,password)}}>
              {!loading && "LOGIN"}
              {loading && ""}
              <div className="loader"> 
               <ClipLoader
                  color={"white"}
                  loading={loading}
                  size={25}
                /></div>
          
            </button>
            <div className="dont_have_account_div">
                <span>Don't have an account ?</span>
                <Link to="/signup">
                <span className="signup_text">
                    Signup</span>
                </Link>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
    )
}