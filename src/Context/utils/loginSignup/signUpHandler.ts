import { Dispatch, SetStateAction } from 'react';
import axios from "axios"
import { NavigateFunction } from 'react-router';

export type SignupHandler ={
    name :string;
    email:string;
    password:string;
    navigate:NavigateFunction;
    setLoading:Dispatch<SetStateAction<boolean>>
}
export type PostData = {
    name :string;
    password:string;
    email:string
}

export async function signUpHandler({name,email,password,navigate,setLoading}:SignupHandler){
    const data :PostData = {
        name :name,
        email:email,
        password:password
    }
    setLoading(true)
    try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user`,data)
       if(response.status === 200){
           navigate("/login")
           setLoading(false)
       }
    } catch (error) {
        setLoading(false)
        return error;
    }

}