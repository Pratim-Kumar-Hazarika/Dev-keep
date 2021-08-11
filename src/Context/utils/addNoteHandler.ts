import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../reducer/actions';
import { Image } from '../types';

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
   previewImage:string ;
   setPreviewImageSource:any;
   textRef:React.MutableRefObject<any>

}

export function addNoteHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource,textRef}:AddNoteHandler){
        e.preventDefault()
        if(title || description !== ''){
            if(previewImage){
                dispatch({type:"ADD_NOTE",payload:{id:Math.random() ,title:title,description:description,label:[],color:bgColor,images:[{image:previewImage}]}})
            }else{
            dispatch({type:"ADD_NOTE",payload:{id:Math.random() ,title:title,description:description,label:[],color:bgColor,images:[]}})
            }
            setTitle("");
            setDescription('')
            setBgColor("")
            setLabel("")
            setPreviewImageSource("")
            textRef.current.style.height = "25px";
        }
    }