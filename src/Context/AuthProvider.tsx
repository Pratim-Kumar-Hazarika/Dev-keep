import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from "react";
import { useNavigate } from "react-router";
import { loginUser } from "./utils/loginSignup/loginUser";
import { setUserStatus } from "./utils/setUserStatus";

interface AuthContextType {
    email:string;
    setEmail:Dispatch<SetStateAction<string>>;
    password:string;
    setPassword:Dispatch<SetStateAction<string>>;
    name:string;
    setName:Dispatch<SetStateAction<string>>;
    loginUserWithCredentials:any;
    loading:boolean;
    setLoading:Dispatch<SetStateAction<boolean>>;
    userID:string ;
    token:string;
    signoutHandler:()=>void;
    setUserID:Dispatch<SetStateAction<string>>;
}
const AuthContext = createContext({} as AuthContextType);

export const AuthProvider : FC = ({children}) => {
  const {  token: savedToken } = JSON.parse(localStorage.getItem("login")  || '{}')
   || {
      token: null,
    };
    const [token,setToken] = useState(savedToken)
    const [userID,setUserID] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

   async function loginUserWithCredentials(userEmail:string,userPassword:string): Promise<void>{
        setLoading(true)
        try {
            const response = await loginUser(userEmail,userPassword);
            const {token,userId} = response.data
            if(response.status === 200){
               setUserStatus({token,userId,setToken,setUserID,navigate})
               setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            return;
        }
     }

        function signoutHandler(){
            localStorage.removeItem("login");
            navigate("/login")
            setToken(null)
        }

    return (
        <AuthContext.Provider value={{email,setEmail,password,setPassword,name,setName,loginUserWithCredentials,loading,setLoading,userID,token,signoutHandler,setUserID}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}