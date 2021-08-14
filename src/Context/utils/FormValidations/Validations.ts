import React, { SetStateAction } from "react";

export type ValidateEmail = {
  value:string;
  setEmail:React.Dispatch<SetStateAction<string>>
}
export type ValidatePassword = {
  value:string;
  setPassword:React.Dispatch<SetStateAction<string>>
}

export type ValidateName = {
  value:string;
  setName :React.Dispatch<SetStateAction<string>>
}
export function validateEmail({value,setEmail}:ValidateEmail) :string | undefined{
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    setEmail(value)
    return error;
  }
  export function validatePassword({value,setPassword}:ValidatePassword) {
    let error;
    if (!value ) {
      error = "Please enter your password";
    }
    setPassword(value)
    return error;
  }
  
  export function validateuserName({value,setName}:ValidateName) {
    let error;
    if (!value ) {
      error = "Please enter your name";
    }else if ( !/^[a-zA-Z]+(\s*\w*)*$/.test(value)){
        error = "Please enter valid name"
      }
      setName(value)
    return error;
  }
  