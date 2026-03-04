import React, { useState } from "react";
import ReactDOM from "react-dom/client";
export default function Bars({arr})
{
   console.log(arr) 
    return(
        <>
        <div className="barcontainer">
            {arr.map((item,index)=>(
                <div className="bars"  key={index} style={{height:`${item}px`}}>{item}</div>
            ))
                
            }
        </div>
        </>
    )
}