import { Link, useNavigate } from 'react-router-dom'
import "../Login/Login.css"
import { Formik, Form, Field } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from '../../Context/AuthProvider';
import { validateEmail, validatePassword, validateuserName } from '../../Context/utils/Validations';
import { signUpHandler } from '../../Context/utils/signUpHandler';
interface MyFormValues {
    password: string;
    email: string;
    userName:string;
  }
export default function SignupForm() {
    const initialValues: MyFormValues = { password: "", email: "",userName:"" };
    const {email,setEmail,setPassword,password,name,setName,loading,setLoading} = useAuth();
    const navigate = useNavigate()
 
    return (<> 
    <div className="login_content">
        <div className="login_heading">
            <span
                style={{
                fontWeight: "bold"
            }}>Signup</span>
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
            <div>Name</div>
              <Field name="userName" validate={(value:string)=>validateuserName({value,setName})} className="password-input"/>
              {errors.userName && touched.userName && <div className="error_text">{errors.userName}</div>}
            </div>
            <div className="email_div">
            <div>Email</div>
              <Field name="email" validate={(value:string)=>validateEmail({value,setEmail})} className="password-input"/>
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
            <button type="submit" className="login_btn" onClick={()=>signUpHandler({name,email,password,navigate,setLoading})}>
            {!loading && "SUBMIT"}
              {loading && ""}
            <div className="loader"> 
               <ClipLoader
                  color={"white"}
                  loading={loading}
                  size={25}
                /></div>
            </button>
            <div className="dont_have_account_div">
            <span>Have an account ?</span>
                <Link to="/login">
                <span className="signup_text">
                    Login</span>
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