import { NavigateFunction } from 'react-router';
import { Dispatch, SetStateAction } from 'react';

export type SetUserStatus= {
    token:string;
    userId:string;
    setToken:Dispatch<SetStateAction<string>>;
    setUserID:Dispatch<SetStateAction<string>>
    navigate:NavigateFunction
}

export function setUserStatus({token,userId,setToken,setUserID,navigate}:SetUserStatus): void{
    setToken(token)
    setUserID(userId)
    navigate("/home")
    localStorage.setItem("login",JSON.stringify({token}))
}