import { Dispatch } from 'react';
import { ACTION } from '../../../reducer/actions';
export type EditDescription = {
    e:any;
    from:string;
    dispatch:Dispatch<ACTION>;
    id:any;
    textRef:React.MutableRefObject<any>
}

export function editDescription({e,from,dispatch,id,textRef}:EditDescription){
    if(from =="card"){
        dispatch({type:"CHANGE_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
    }else if(from ==="pinnedCard"){
        dispatch({type:"CHANGE_PINNED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
    }else if(from ==="archive"){
        dispatch({type:"CHANGE_ARCHIVED_NOTES_DESCRIPTION",payload:{newDescription:e.target.value,id:id}})
    }
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "50px";
    textRef.current.style.height = `${target.scrollHeight}px`;
}
