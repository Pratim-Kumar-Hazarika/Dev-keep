import React, { ReactChildren } from 'react'
import { useGoogleKeep } from '../../Context/GoogleKeepProvider'
import { IonColorPaletteOutline } from '../../Svgs/Svgs'

export const ChangeColor=( ) => {
    const colorsData = [
    {
    name:"red",
    color:"#EF4444"
    },
    {
    name:"yellow",
    color:"#FDE68A"
    },
    {
    name:"blue",
    color:"#1D4ED8"
    },
    {
    name:"indigo",
    color:"#6366F1"
    },
    {
    name:"purple",
    color:"#C4B5FD"
    },
    {
    name:"pink",
    color:"#F9A8D4"
    },
    {
    name:"gray",
    color:"#F9FAFB"
    },
    {
    name:"white",
    color:"#fff"
    },
    {
    name:"violet",
    color:"#A78BFA"
    },
    {
    name:"dark pink",
    color:"#DB2777"
    },
    {
    name:"black",
    color:"#111827"
    },
    {
    name:"silver",
    color:"#D1D5DB"
    }
    ]
    const {dispatch} = useGoogleKeep()
    return (
    <div className="change_color_icon">
        <div className="tooltip">
            <IonColorPaletteOutline />
            <span className="tooltiptext">Change color</span>
            <br />
        </div>
        <div className="color_divs ">
            {
            colorsData.map((color:any)=>(
            <div className="circle tooltip" style={{backgroundColor:color.color}} >
                <span className="tooltiptext">{color.name}</span>
            </div>
            ))
            }
        </div>
    </div>
    )
    }

    // dispatch({type:"ADD_BG_COLOR",payload:{colorName:"green",id}})