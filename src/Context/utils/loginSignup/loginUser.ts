import axios from "axios";

export  type Response = {
    token :string;
    userId:string
}

export type LoginData = {
    email:string;
    password:string
}

export async function loginUser(userEmail:string,userPassword:string) {
    const trimEmail = userEmail.trim()
    const data :LoginData = {
        email:trimEmail,
        password:userPassword
    }
    return   axios.post<Response>(`${process.env.REACT_APP_SERVER_URL}/user/login`,data)  
}