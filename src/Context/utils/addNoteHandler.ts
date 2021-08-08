import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../reducer/actions';

export type AddNoteHandler = {
    e:any
   title:string;
   description:string;
   bgColor:string;
   dispatch:Dispatch<ACTION>;
   setTitle:Dispatch<SetStateAction<string>>;
   setDescription:Dispatch<SetStateAction<string>>;
   setBgColor:Dispatch<SetStateAction<string>>;
   setLabel:Dispatch<SetStateAction<string>>;
   previewImage:any;
   setPreviewImageSource:any

}

export function addNoteHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource}:AddNoteHandler){
        e.preventDefault()
        if(title || description !== ''){
        dispatch({type:"ADD_NOTE",payload:{id:Math.random() ,title:title,description:description,label:[],color:bgColor,image:previewImage}})
        setTitle("");
        setDescription('')
        setBgColor("")
        setLabel("")
        setPreviewImageSource("")
        }
    }