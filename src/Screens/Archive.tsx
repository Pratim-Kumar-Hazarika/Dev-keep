import React from 'react'
import Card from '../Components/Card/Card'
import Header from '../Components/Header/Header'
import LeftNav from '../Components/LeftNavBar/LeftNav'
import { useGoogleKeep } from '../Context/GoogleKeepProvider'

export default function Archive() {
  const {state} = useGoogleKeep();
    return (
        <>
          <Header/>
            <div style={{display:"flex"}}>
                <LeftNav/>
                
                <div className="trash_cards">
                { 
                state?.notes?.map((item:any)=>{
                    return <Card  id={item.id} title={item.title} description={item.description }/> })
                }
            </div>
                
            </div>
        </>
    )
}
