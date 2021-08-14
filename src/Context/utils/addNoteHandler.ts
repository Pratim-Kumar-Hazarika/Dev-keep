import { Dispatch, SetStateAction } from 'react';
import { ACTION } from '../reducer/actions';
import { addNoteWithImage } from './InputNoteBoxAxios/addNoteWithImage';
import { addNoteWithoutImage } from './InputNoteBoxAxios/addNoteWithoutImage';

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
   token:string

}

export async function addNoteHandler({e,title,description,bgColor,dispatch,setTitle,setDescription,setBgColor,setLabel,previewImage,setPreviewImageSource,textRef,token}:AddNoteHandler){
        e.preventDefault()
        if(title || description !== ''){
            if(previewImage){
                dispatch({type:"ADD_NOTE",payload:{id:Math.random() ,title:title,description:description,label:[],color:bgColor,images:[{image:previewImage}]}})
                await addNoteWithImage(previewImage, title, description, bgColor, token,dispatch);
            }else{
            dispatch({type:"ADD_NOTE",payload:{id:Math.random() ,title:title,description:description,label:[],color:bgColor,images:[]}})
            await addNoteWithoutImage(title, description, bgColor, token,dispatch);
            }
            setTitle("");
            setDescription('');
            setBgColor("");
            setLabel("");
            setPreviewImageSource("");
            textRef.current.style.height = "25px";
        }
    }


